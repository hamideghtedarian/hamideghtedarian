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
