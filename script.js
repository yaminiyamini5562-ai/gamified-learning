let points = 0;
let level = 1;

function correctAnswer() {
    points += 10;
    document.getElementById("points").innerText = points;

    let progress = document.getElementById("progress");
    let width = points;

    if (width >= 100) {
        level++;
        points = 0;
        width = 0;
        document.getElementById("level").innerText = level;
        alert("🎉 Level Up!");
    }

    progress.style.width = width + "%";
}

function wrongAnswer() {
    alert("❌ Try again!");
}
