const data = {
  organization: "شرکت نمونه",
  evaluator: "ارزیاب تعالی",
  date: "2025-10-21",
  criterion: "رهبری و فرهنگ بهره‌وری",
  subcriterion: "رهبری و فرهنگ‌سازی",
  radar: {
    results: "افزایش مشارکت کارکنان در تصمیم‌گیری",
    approach: "برگزاری جلسات هفتگی با مدیران",
    deployment: "در تمام واحدها اجرا شده است",
    refinement: "بازنگری ماهانه و دریافت بازخورد"
  },
  analysis: {
    strengths: "رهبری مشارکتی و شفافیت ارتباطات",
    improvements: "افزایش آموزش مدیران میانی",
    score: 65
  }
};

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
