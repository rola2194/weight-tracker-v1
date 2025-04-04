import { listeners, latestData } from "../../script.js";

// addListener(drawChart)


const lineChart = document.getElementById("g1");
lineChart.style.backgroundColor = "#277746";
lineChart.style.borderRadius = "10px";
lineChart.style.width = "100%";
lineChart.style.height = "500px";
lineChart.style.display = "flex";
lineChart.style.justifyContent = "center";

lineChart.style.animation = "grow 0.5s ease-in-out";



let chart;
function drawChart(dates, weights) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(lineChart, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        { 
          data: weights,
          label: "Asia",
          borderColor: "#63BEB9",
          fill: true
          
        }
      ]
    },
    options: {
      scales: {
        x: {
            ticks:{
                color: 'lightgreen'
            }
        },
        y: {
            ticks:{
                color: 'lightgreen'
            }
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'World population per region (in millions)'
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}
drawChart(latestData[0], latestData[1]);
listeners.push(drawChart);

