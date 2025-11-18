window.addEventListener("DOMContentLoaded", () => {

    console.log("JS Loaded.");

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    // Force move from intro → main
    setTimeout(() => {
        intro.style.display = "none";
        main.classList.remove("hidden");
    }, 3000);

    // Reactor Simulation (Humus + John)
    let level = 94;

    setInterval(() => {
        // Normal small fluctuations
        let spike = (Math.random() * 2 - 1);

        // Humus: random positive energy spikes
        if (Math.random() < 0.05) spike += 6;

        // John: random temporal instability drops
        if (Math.random() < 0.03) spike -= 8;

        level += spike;
        level = Math.max(0, Math.min(100, level));

        const txt = document.getElementById("reactorText");
        const fill = document.getElementById("reactorFill");

        if (txt && fill) {
            txt.innerText = "Stability: " + level.toFixed(1) + "%";
            fill.style.width = level + "%";
            fill.style.background = level < 50 ? "#ff4444" : "#00ffa6";
        }

        // Rare anomaly message
        if (level < 33 && Math.random() < 0.2) {
            console.log("ANOMALY: Humus & John interference detected.");
        }

    }, 500);
});
