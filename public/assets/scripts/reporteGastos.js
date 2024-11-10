document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('incomeChart').getContext('2d');

    const incomeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: 'Categoría 1',
                    data: [20, 5, 10, 20, 25, 50, 25, 30, 30, 50, 20, 10],
                    borderColor: 'orange',
                    fill: false
                },
                {
                    label: 'Categoría 2',
                    data: [10, 25, 40, 5, 35, 20, 10, 20, 50, 30, 45, 60],
                    borderColor: 'green',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Meses',
                        font: {
                            size: 24
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Gastos',
                        font: {
                            size: 24
                        }
                    },
                    beginAtZero: true
                }
            }
        }
    });
});