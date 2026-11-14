// 確保 supabase 客戶端只宣告一次
let supabaseClient = null;

// 初始化 Supabase 連線
function initSupabase() {
    if (window.APP_CONFIG.SUPABASE_URL && window.APP_CONFIG.SUPABASE_PUBLISHABLE_KEY) {
        supabaseClient = window.supabase.createClient(
            window.APP_CONFIG.SUPABASE_URL,
            window.APP_CONFIG.SUPABASE_PUBLISHABLE_KEY
        );
        console.log("Supabase 連線準備就緒！");
    } else {
        console.warn("尚未設定 Supabase 金鑰！");
    }
}

// 登入功能 (綁定到 window 確保 HTML 按鈕能順利呼叫)
window.login = function() {
    const email = prompt("請輸入北科大學生信箱 (@ntut.edu.tw)：");
    if (email) {
        if (email.endsWith("@ntut.edu.tw") || email.endsWith("@taipeitech.edu.tw")) {
            alert("登入成功！歡迎，" + email);
            document.querySelector("header button").innerText = "已登入";
            document.querySelector("header button").style.backgroundColor = "#166534";
        } else {
            alert("請使用有效的北科大信箱登入！");
        }
    }
};

// 當網頁結構載入完成後，啟動系統
document.addEventListener("DOMContentLoaded", () => {
    initSupabase();
});
