
fetch('../data/radar-assessment.json')
.then(response => response.json())
.then(data => {
// نمایش داده‌ها در داشبورد
document.getElementById("org").textContent = data.organization;
document.getElementById("eval").textContent = data.evaluator;
document.getElementById("date").textContent = data.date;
document.getElementById("criterion").textContent = data.criterion;
document.getElementById("subcriterion").textContent = data.subcriterion;
document.getElementById("score").textContent = data.analysis.score;
document.getElementById("results").textContent = data.radar.results;
document.getElementById("approach").textContent = data.radar.approach;
document.getElementById("deployment").textContent = data.radar.deployment;
document.getElementById("refinement").textContent = data.radar.refinement;
document.getElementById("strengths").textContent = data.analysis.strengths;
document.getElementById("improvements").textContent = data.analysis.improvements;

// نمودار امتیاز زیرمعیار (با بررسی امنیت)
const scoreCanvas = document.getElementById("scoreChart");
if (scoreCanvas && data.analysis && typeof data.analysis.score === "number") {
const scoreCtx = scoreCanvas.getContext("2d");
new Chart(scoreCtx, {
type: "bar",
data: {
labels: ["امتیاز زیرمعیار"],
datasets: [{
label: "امتیاز",
data: [data.analysis.score],
backgroundColor: "#007bff"
}]
},
options: {
responsive: true,
scales: {
y: {
beginAtZero: true,
max: 100
}
}
}
});
}

// نمودار توزیع سطح شواهد (با بررسی امنیت)
const radarCanvas = document.getElementById("radarChart");
if (radarCanvas && data.radar) {
const radarCtx = radarCanvas.getContext("2d");
new Chart(radarCtx, {
type: "doughnut",
data: {
labels: ["نتایج", "رویکرد", "استقرار", "بهبود"],
datasets: [{
label: "مولفه‌های RADAR",
data: [
data.radar.results ? data.radar.results.length : 0,
data.radar.approach ? data.radar.approach.length : 0,
data.radar.deployment ? data.radar.deployment.length : 0,
data.radar.refinement ? data.radar.refinement.length : 0
],
backgroundColor: ["#28a745", "#ffc107", "#17a2b8", "#dc3545"]
}]
},
options: {
responsive: true
}
});
}

// نمودار راداری EFQM
const radarEFQMCanvas = document.getElementById("radarEFQMChart");
if (radarEFQMCanvas && data.scores) {
const radarEFQMContext = radarEFQMCanvas.getContext("2d");
new Chart(radarEFQMContext, {
type: "radar",
data: {
labels: Object.keys(data.scores),
datasets: [{
label: "EFQM Criteria Scores",
data: Object.values(data.scores),
backgroundColor: "rgba(0, 123, 255, 0.2)",
borderColor: "#007bff",
pointBackgroundColor: "#007bff"
}]
},
options: {
responsive: true,
scales: {
r: {
beginAtZero: true,
max: 100
}
}
}
});
}
})
.catch(error => {
console.error("❌ خطا در بارگذاری داده‌ها:", error);
});

