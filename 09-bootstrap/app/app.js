define([
    'bootstrap/modal', 'bootstrap/tooltip', 'bootstrap/transition'
], function () {
    return {
        start: function () {
            $('#with-tooltip').tooltip({
                placement: 'right',
                title: 'Hello from tooltip!'
            });
            
            $('#show-modal').on('click', function () {
                $('#modal').modal('show');
            });
            
            $('#modal .btn-primary').on('click', function () {
                $('#modal').modal('hide');
            })
        }
    };
});
