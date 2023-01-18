
// fetch('dados.json')
//   .then(response => response.json())
//   .then(data => {
//       var criandografico = document.getElementById('myChart');
//       var chart = new Chart(criandografico, {
//       type: 'bar',
//       data: {
//       labels: data.labels,
//       datasets: [{ 
//         label: 'R$',
//         data: data.values,
//         backgroundColor: [
//           '#9ad344',
//           '#edd569',
//           '#eaaa70',
//           '#ee6668',
//           '#e969ef',
//           '#5752e1',
//           '#3c95e7'],
//           }],
//     },
//     options: {
//       animations: {
//         tension: {
//           duration: 1000,
//           easing: 'linear',
//           from: 1,
//           to: 0,
//           loop: true
//         }
//       },
//       scales: {
//         y: { min: 0,
//           max: 100
//         }
//       }
//     }
//   }
//       )});

  
// CRIANDO O GRAFICO EM JS + ESTILIZACAO: JEITO 1
// const criandografico = document.getElementById('myChart');
//   new Chart(criandografico, {
//     type: 'bar',
//     data: {
//       labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
//       datasets: [{ 
//         label: 'R$',
//         data: [145.65, 119.99, 238.99, 305.59, 206.43, 123.78, 599.99],
//         backgroundColor: [
//           '#9ad344',
//           '#edd569',
//           '#eaaa70',
//           '#ee6668',
//           '#e969ef',
//           '#5752e1',
//           '#3c95e7'],
//           options: {
//             scales: {
//               y: {
//                 beginAtZero: true
//               }
//             }
//           }
//      }]
//     },
//   }
//   );

  // let divUsuarios = document.querySelector("#usuarios")
  // fetch("data.json").then((response) => {
  //   response.json().then((dados) => {
  //     dados.usuarios.map((usuario) => {
  //       divUsuarios.innerHTML += `<li> ${usuario.day}, ${usuario.month}</li>`
  //     })
  //   })
  // })

  

// CRIANDO O GRAFICO EM JS + ESTILIZACAO: JEITO 2

//  const ctx = document.getElementById('myChart').getContext('2d');
//  const options = {
//   type: 'bar',
//   data: {
//     labels: ['Jan','Fev','Mar','Abr','Jan','Jan'],
//     datasets: [{
//       label: 'My Data',
//       data: [1, 2, 3, 4, 5, 6],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(299, 60, 140, 0.2)',
//       borderWidth: 1,
//     }]
//   },
//   options: {
// 					vAxis: {
// 							format: 'currency', 
// 							gridlines: {
// 										count:5, 
// 										color: 'transparent'
// 										}
// 							},
// 					curveType: 'function',
// 					legend: 'none'

//   }
// }
  // const chart = new Chart(ctx, options);
