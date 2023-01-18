const data = [
    {
      day: "Seg",
      amount: 157.45,
    },
    {
      day: "Ter",
      amount: 134.91,
    },
    {
      day: "Qua",
      amount: 252.36,
    },
    {
      day: "Qui",
      amount: 131.07,
    },
    {
      day: "Sex",
      amount: 123.39,
    },
    {
      day: "Sab",
      amount: 243.28,
    },
    {
      day: "Dom",
      amount: 225.48,
    },
  ];

  function generateChart() {
    const info = {
      labels: data.map((chart) => chart.day),
      datasets: [
        {
          data: data.map((chart) => chart.amount),
          backgroundColor: [
          '#9ad344',
          '#edd569',
          '#eaaa70',
          '#ee6668',
          '#e969ef',
          '#5752e1',
          '#3c95e1'],
          borderRadius: 10,
          hoverBackgroundColor: "#7bc8e0",
        },
      ],
    };
    const titleTooltip = (e) => `R$ ${e[0].formattedValue}`;
    const labelTooltip = (e) => "";
    const options = {
      scales: {
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawTicks: false,
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          yAlign: "bottom",
          displayColors: false,
          callbacks: {
            title: titleTooltip,
            label: labelTooltip,
          },
        },
      },
    };
    const config = {
      type: "bar",
      data: info,
      options,
    };
    const myChart = new Chart(document.getElementById("myChart"), config);
  }
  generateChart();