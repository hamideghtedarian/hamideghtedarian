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

    // رسم نمودار امتیاز زیرمعیار
    const scoreCtx = document.getElementById("scoreChart").getContext("2d");
    new Chart(scoreCtx, {
      type: "bar",
      data: {
        labels: ["RADAR Score"],
        datasets: [{
          label: "Score",
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

    // رسم نمودار توزیع سطح شواهد
    const radarCtx = document.getElementById("radarChart").getContext("2d");
    new Chart(radarCtx, {
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
      },
      options: {
        responsive: true
      }
    });
  })
  .catch(error => {
    console.error("خطا در بارگذاری داده‌ها:", error);
  });
