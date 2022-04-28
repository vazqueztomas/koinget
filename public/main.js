const d = document;
const cantGasto = d.getElementById("cantGasto");
const nombreGasto = d.getElementById("nombreGasto");
const btnAddGasto = d.getElementById("addGasto");
const containerGastos = d.getElementById('container-gasto').style.maxWidth = '300px'

const ctx = document.getElementById("gastos").getContext("2d");
console.log(ctx);
Chart.defaults.font.size = 20;
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        label: "Total",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const añadirGasto = () => {
  myChart.data.labels.push(nombreGasto.value);
  myChart.data.datasets[0].data.push(cantGasto.value);
};

btnAddGasto.addEventListener("click", () => {
  añadirGasto();
  myChart.update()
});
