// Extract category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Map categories to their JS files
const categoryScripts = {
    yoga: "/static/scripts/yoga.js",
    international_music: "/static/scripts/international_music.js",
    Indian_music: "/static/scripts/Indian_music.js",
    workout: "/static/scripts/workout.js",
    International_danceforms: "/static/scripts/International_danceforms.js",
    Indian_danceforms: "/static/scripts/Indian_danceforms.js",
    South:"/static/scripts/South.js",
    Hindi:"/static/scripts/Hindi.js",
    Englishmore:"/static/scripts/English&more.js"
};

// Dynamically load the appropriate script
if (categoryScripts[category]) {
    const script = document.createElement("script");
    script.src = categoryScripts[category];
    document.body.appendChild(script);
} else {
    document.getElementById("question").textContent = "No quiz available for this category.";
}