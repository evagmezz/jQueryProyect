// Esperamos a que el documento esté completamente cargado
$(document).ready(function() {
    // Botón "Ocultar Capa"
    $('#hide').click(function() {
        $('.box').hide();
    });

    // Botón "Mostrar Capa"
    $('#show').click(function() {
        $('.box').show();
    });

    // Botón "Desvanecer Capa"
    $('#fadeOut').click(function() {
        $('.box').fadeOut();
    });

    // Botón "Aparecer Capa"
    $('#fadeIn').click(function() {
        $('.box').fadeIn();
    });

    // Botón "Negrita"
    $('#bold').click(function() {
        $('.box').css('font-weight', 'bold');
    });

    // Botón "Disminuir Tamaño"
    $('#small').click(function() {
        $('.box').animate({
            width: '150px',
            height: '75px'
        });
    });

    // Botón "Restablecer Tamaño"
    $('#reset').click(function() {
        $('.box').animate({
            width: '200px',
            height: '100px'
        });
    });

    // Botón "Quitar Negrita"
    $('#bold-out').click(function() {
        $('.box').css('font-weight', 'normal');
    });

    // Botón "Cambiar Texto"
    $('#change-text').click(function() {
        var nuevoTexto = $('#new-text').val();
        if (nuevoTexto !== '') {
            $('.box').text(nuevoTexto);
            $('#new-text').val(''); // Limpiar el campo de texto
        }
    });
});
