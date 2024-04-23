const tipoIncidenteSelect = document.getElementById('tipoIncidente');
const formTipoIncidente = document.getElementById('formTipoIncidente');

formTipoIncidente.addEventListener('submit', function (event) {
    event.preventDefault();

    const tipoSeleccionado = tipoIncidenteSelect.value;

    let targetUrl;

    switch (tipoSeleccionado) {
        case 'rotura':
            targetUrl = 'Rotura.html';
            break;
        case 'robo':
            targetUrl = 'Robo.html';
            break;
        case 'inundacion':
            targetUrl = 'Inundacion.html';
            break;
        case 'incendio':
            targetUrl = 'Incendio.html';
            break;
        default:
            targetUrl = 'Otro.html';
            break;
    }

    if (targetUrl) {
        window.location.href = targetUrl;
    }
});
