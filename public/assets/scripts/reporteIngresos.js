document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('incomeChart').getContext('2d');

    const incomeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: 'Categoría 1',
                    data: [10, 20, 15, 30, 25, 35, 20, 40, 30, 50, 40, 60],
                    borderColor: 'orange',
                    fill: false
                },
                {
                    label: 'Categoría 2',
                    data: [15, 25, 20, 35, 30, 25, 40, 30, 50, 40, 45, 55],
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
                        text: 'Ingresos',
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