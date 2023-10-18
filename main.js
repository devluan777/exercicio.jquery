$(document).ready(function () {
    $('#task-form').submit(function (e) {
        e.preventDefault();
        const taskText = $('#task-input').val();
        if (taskText.trim() !== '') {
            $('#task-list').append('<li>' + taskText + '</li>');
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    $('button').on('mouseenter', function () {
        $(this).css('background-color', '#0056b3'); 
    });

    $('button').on('mouseleave', function () {
        $(this).css('background-color', '#007BFF'); 
    });
});


