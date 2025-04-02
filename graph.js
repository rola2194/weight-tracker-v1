new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['jen','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
      datasets: [
        { 
          data: [80,79,76,75,74,76,75,76.4,75,76],
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
