;(function($) {

    'use strict';

    $.fn.dependentJs = function() {

        function changeHandler(event) {
            var type = event.data.select.attr('data-dependent');
            var option = event.data.select.find('option:selected').val();
            var fields = event.data.form.find('[data-dependent-select="' + type + '"]');

            fields.each(function() {
                var field = $(this);
                var on = field.attr('data-dependent-on').split(', ');

                field.css('display', $.inArray(option, on) !== -1 ? 'block' : 'none');
            });
        }

        return this.each(function() {
            var form = $(this);
            var selects = form.find('select[data-dependent]');

            selects.each(function() {
                var select = $(this);

                select.on('change', { select: select, form: form }, changeHandler);
                select.trigger('change'); 
            });
        });
    }
})(jQuery);