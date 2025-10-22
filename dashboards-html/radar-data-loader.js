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
        pointBackgroundColor: "#007bff",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#007bff"
      }]
    },
    options: {
      responsive: true,
      elements: {
        line: {
          borderWidth: 2
        }
      },
      scales: {
        r: {
          angleLines: { display: true },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 10
          },
          pointLabels: {
            font: {
              size: 14
            }
          }
        }
      }
    }
  });
}
