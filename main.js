$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    $('button').click(function() {
        const List = $('#lista').val();
        const Tarefa = $('<li></li>').text(List);
        Tarefa.appendTo('ul');
        $('#lista').val('');
        
    });

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('riscar');
    });

});