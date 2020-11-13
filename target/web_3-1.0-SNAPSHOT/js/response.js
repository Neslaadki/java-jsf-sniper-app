$('#checkbox_x input:checkbox').click(function(){
    if ($(this).is(':checked')) {
        $('#checkbox_x input:checkbox').not(this).prop('checked', false);
    }
});