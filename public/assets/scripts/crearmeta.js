document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.crear-meta form');
    const metasActivasContainer = document.querySelector('.metas-activas');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombreMeta = document.getElementById('nombre-meta').value;
        const montoMeta = document.getElementById('monto-meta').value;
        const moneda = document.getElementById('moneda').value;
        const fechaInicio = document.getElementById('fecha-inicio').value;
        const fechaLimite = document.getElementById('fecha-limite').value;

        if (!nombreMeta || !montoMeta || !moneda || !fechaInicio || !fechaLimite) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const nuevaMeta = document.createElement('div');
        nuevaMeta.classList.add('meta-card');
        nuevaMeta.innerHTML = `
            <p>“${nombreMeta}”</p>
            <p>Progreso: 0%</p>
            <p>Monto objetivo: ${moneda === 'usd' ? '$' : moneda === 'pe' ? 'S/.' : moneda === 'eur' ? '€' : 'MX$'}${montoMeta}</p>
            <p>Tiempo restante: ${calcularTiempoRestante(fechaLimite)} días</p>
            <div class="progress-container">
                <div class="progress-bar" style="width: 0%;"></div>
                <div class="progress-text">0%</div>
            </div>
        `;

        metasActivasContainer.appendChild(nuevaMeta);

        form.reset();
    });

    function calcularTiempoRestante(fechaLimite) {
        const fechaLimiteObj = new Date(fechaLimite);
        const hoy = new Date();
        const diferenciaTiempo = fechaLimiteObj - hoy;
        const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
        return diasRestantes > 0 ? diasRestantes : 0;
    }
});
