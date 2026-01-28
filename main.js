// ページが読み込まれたら実行する
document.addEventListener('DOMContentLoaded', () => {
    setBackgroundByTime();
});

// 時間によって背景を変える関数
function setBackgroundByTime() {
    const heroBg = document.getElementById('hero-bg');
    const now = new Date();
    const hour = now.getHours(); // 現在の「時」を取得 (0〜23)

    console.log("現在の時間は: " + hour + "時です");

    // 画像パスの設定（assetsフォルダの中身と名前を一致させる）
    const morningImg = 'url("assets/bg_morning.png")';
    const dayImg     = 'url("assets/bg_day.png")';
    const nightImg   = 'url("assets/bg_night.png")';

    // 時間割り当てロジック
    if (hour >= 5 && hour < 10) {
        // 朝 (5:00 〜 9:59)
        heroBg.style.backgroundImage = morningImg;
    } else if (hour >= 10 && hour < 17) {
        // 昼 (10:00 〜 16:59)
        heroBg.style.backgroundImage = dayImg;
    } else {
        // 夜 (17:00 〜 4:59)
        heroBg.style.backgroundImage = nightImg;
    }
}

// 吹き出しをクリックした時の動作
function diveToWorld() {
    const target = document.getElementById('main-content');
    // ヌルッとスクロールする
    target.scrollIntoView({ behavior: 'smooth' });
}
