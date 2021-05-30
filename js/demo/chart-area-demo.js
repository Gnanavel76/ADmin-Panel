Chart.defaults.global.defaultFontColor = '#fff';
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Average Monthly Temperature Farenheit",
      lineTension: 0.3,
      backgroundColor: "#2a2d3e",
      borderColor: "#2697ff",
      pointRadius: 3,
      pointBackgroundColor: "#2697ff",
      pointBorderColor: "#2697ff",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "#2697ff",
      pointHoverBorderColor: "#2697ff",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [26.4,28.0,35.8,30.6,56.3,65.8,60.0,71.2,44.5,80.0],
    }],
  },
  options: {
    maintainAspectRatio: false,
    defaultFontColor: '#fff',
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          maxTicksLimit: 50,
          padding: 15
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 8,
          padding: 15,
        },
        gridLines: {
          color: "#fff",
          drawBorder: false,
          borderDash: [4],
        }
      }],
    },
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#212332",
      titleMarginBottom: 10,
      titleFontColor: '#fff',
      titleFontSize: 14,
      borderColor: '#000',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
    }
  }
});
