fetch('../data/radar-assessment.json')
  .then(response => response.json())
  .then(data => {
    // ✅ تمام کدهای استفاده از data باید در این بلوک باشند

    // ... سایر کدهای نمایش داده‌ها و نمودارها ...

    // ✅ نمودار راداری EFQM
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
