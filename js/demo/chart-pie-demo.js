Chart.defaults.global.defaultFontColor = '#fff';


var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Document Files", "Media Files", "Other Files"],
    datasets: [{
      data: [60, 30, 15],
      backgroundColor: ['#19B7E9', '#FF4343', '#FFB443'],
    }],
  },
  options: {
    
    elements: {
        arc: {
            borderWidth: 0
        }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#212332",
      bodyFontColor: "#fff",
      borderColor: '#000',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: "bottom",
      padding: 10,
      labels: {
        padding: 20,
      },
      align:'center',
    },
    cutoutPercentage: 80,
  },
});
