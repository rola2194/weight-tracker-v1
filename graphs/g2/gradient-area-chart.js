
// Create a Chart.js gradient area chart
const ctx = document.getElementById('g2').getContext('2d');

// Create gradient
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgb(21, 225, 157)');    // Yellow-green at top
gradient.addColorStop(0.5, 'rgba(76, 122, 96, 0.7)');   // Mid green
gradient.addColorStop(1, 'rgba(25, 52, 65, 0.6)');      // Dark teal at bottom
gradient = 'rgb(107, 171, 71)';
// setting css
ctx.canvas.style.width = '100%';
ctx.canvas.style.height = '500px';
ctx.canvas.style.backgroundColor = '#2B3446';
const ticksLabel = 'rgba(130, 255, 224, 0.7)';
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 31}, (_, i) => (i + 1).toString().padStart(2, '0')),
        datasets: [{
            label: 'Value',
            data: [
                22, 20, 19, 15, 10, 8, 4, 3, 10, 20, 30, 42, 37, 29, 26, 23, 18, 13, 8, 5, 10, 20, 29, 25, 18, 10, 7, 12, 14, 11, 7
            ],
            backgroundColor: gradient,
            borderColor: 'rgb(127, 203, 121)',
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointBackgroundColor:'rgb(214, 208, 40)',
            pointHoverBackgroundColor:'rgb(189, 185, 54)',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#fff',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                backgroundColor: '#1e8f7d',
                titleColor: '#fff',
                bodyColor: '#fff',
                titleFont: {
                    size: 14,
                    weight: 'normal'
                },
                bodyFont: {
                    size: 14
                },
                padding: 12,
                displayColors: false,
                callbacks: {
                    title: function(tooltipItems) {
                        return `${tooltipItems[0].label}/01/2020`;
                    },
                    label: function(context) {
                        return `${context.parsed.y} lorem ipsum`;
                    }
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                   
                    color: ticksLabel,
                    font: {
                        size: 10
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: ticksLabel,
                    font: {
                        size: 10
                    },
                    stepSize: 10
                },
                min: 0,
                max: 50
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        },
        elements: {
            line: {
                tension: 0.4
            }
        }
    }
});
