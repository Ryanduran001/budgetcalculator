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
document.addEventListener("DOMContentLoaded", function () {
    // let federalTax = document.getElementById("federalTax").innerText;
    // let stateTax = document.getElementById("stateTax").innerText;
    // let socialSecurity = document.getElementById("socialSecurity").innerText;
    // let mediCare = document.getElementById("mediCare").innerText;
    // let stateDisability = document.getElementById("stateDisability").innerText;
    // let retirementInvestment = document.getElementById("retirementInvestment").innerText;
    // let medicalInsurance = document.getElementById("medicalInsurance").innerText;
    // let netMonthlyIncome = document.getElementById("netMonthly").innerText;
    // let monthlyNecessities = document.getElementById("monthlyNecessities").innerText;
    // let monthlyWants = document.getElementById("monthlyWants").innerText;
    // let monthlySavings = document.getElementById("monthlySavings").innerText;

    var form = document.getElementById("mincome");

    function handleForm(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleForm);


    document.getElementById('mincome').addEventListener('change', function () {
        let val = parseInt(document.getElementById('mincome').value);

        val = val / 12;

        document.getElementById("federalTax").innerText = 'Federal Taxes (12%): $'
        document.getElementById("stateTax").innerText = 'State Taxes (7%): $'
        document.getElementById("socialSecurity").innerText = 'Social Security (6.2%): $'
        document.getElementById("mediCare").innerText = 'Medicare (1.45%): $'
        document.getElementById("stateDisability").innerText = 'State Disability (1%): $'
        document.getElementById("retirementInvestment").innerText = 'Retirement Investment (5%): $'
        document.getElementById("medicalInsurance").innerText = 'Medical Insurance: $'
        document.getElementById("netMonthlyIncome").innerText = 'Net Monthly Income: $'
        document.getElementById("monthlyNecessities").innerText = 'Montly Necessities (50% of Net Monthly): $'
        document.getElementById("monthlyWants").innerText = 'Monthly Wants (30% of Net Monthly): $'
        document.getElementById("monthlySavings").innerText = 'Monthly Savings (20% of Net Monthly): $'
        document.getElementById("federalTax").innerText += parseInt(val * 0.12);
        document.getElementById("stateTax").innerText += parseInt(val * 0.07);
        document.getElementById("socialSecurity").innerText += parseInt(val * 0.062);
        document.getElementById("mediCare").innerText += parseInt(val * 0.0145);
        document.getElementById("stateDisability").innerText += parseInt(val * 0.01);
        document.getElementById("retirementInvestment").innerText += parseInt(val * 0.05);
        document.getElementById("medicalInsurance").innerText += '180';
        document.getElementById("netMonthlyIncome").innerText += parseInt(val * 0.67);
        document.getElementById("monthlyNecessities").innerText += parseInt(val * 0.67 * 0.50);
        document.getElementById("monthlyWants").innerText += parseInt(val * 0.67 * 0.30);
        document.getElementById("monthlySavings").innerText += parseInt(val * 0.67 * 0.20);

        return;
        // you can use number here to edit the .innerText of elements
        // let federalTax = document.getElementById("federalTax").innerText;
        // let stateTax = document.getElementById("stateTax").innerText;
        // let socialSecurity = document.getElementById("socialSecurity").innerText;
        // let mediCare = document.getElementById("mediCare").innerText;
        // let stateDisability = document.getElementById("stateDisability").innerText;
        // let retirementInvestment = document.getElementById("retirementInvestment").innerText;
        // let medicalInsurance = document.getElementById("medicalInsurance").innerText;
        // let netMonthlyIncome = document.getElementById("netMonthly").innerText;
        // let monthlyNecessities = document.getElementById("monthlyNecessities").innerText;
        // let monthlyWants = document.getElementById("monthlyWants").innerText;
        // let monthlySavings = document.getElementById("monthlySavings").innerText;
    });

})