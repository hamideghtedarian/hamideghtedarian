fetch('../data/radar-assessment.json')
  .then(response => response.json())
  .then(data => {
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
  })
  .catch(error => {
    console.error("خطا در بارگذاری داده‌ها:", error);
  });
// نمودار امتیاز زیرمعیار
new Chart(document.getElementById("scoreChart"), {
  type: "bar",
  data: {
    labels: ["Score"],
    datasets: [{
      label: "RADAR Score",
      data: [data.analysis.score],
      backgroundColor: "#007bff"
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});

// نمودار توزیع سطح شواهد
new Chart(document.getElementById("radarChart"), {
  type: "doughnut",
  data: {
    labels: ["Results", "Approach", "Deployment", "Refinement"],
    datasets: [{
      label: "RADAR Components",
      data: [
        data.radar.results.length,
        data.radar.approach.length,
        data.radar.deployment.length,
        data.radar.refinement.length
      ],
      backgroundColor: ["#28a745", "#ffc107", "#17a2b8", "#dc3545"]
    }]
  }
});
