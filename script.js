// const ctx = document.getElementById('myChart');

// new Chart(ctx, { // @ https://www.chartjs.org/docs/latest/getting-started/
//     type: 'doughnut',
//     data: {
//         labels: ['Wants', 'Savings', 'Others', 'Necessities'],
//         datasets: [{
//             label: 'Income by Dollar',
//             data: [12, 19, 3, 3],
//             borderWidth: 1
//         }]
//     },
//     }
// );
document.addEventListener("DOMContentLoaded"), function () {
    var form = document.getElementById("mincome");

    function handleForm(event) { 
        event.preventDefault();
    } 

    form.addEventListener('submit', handleForm);

    function getNeccessities(mincome) {
        let income = mincome * 0.667;
        return income * 0.5;
    }
    function getWants(mincome) {
        let income = mincome * 0.667;
        return income * 0.3;
    }
    function getSavings(mincome) {
        let income = mincome * 0.667;
        return income * 0.2;
    }
}