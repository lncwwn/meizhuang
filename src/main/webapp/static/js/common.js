/**
 * common utils module
 * @author victor.li
 * @date 2015/05/29
 */
define(['jquery', 'bootstrap'], function(jquery, bootstrap) {

    'use strict';

    var successTemplate = '<div class="alert alert-success" role="alert"><strong></strong> </div>',
        infoTemplate = '<div class="alert alert-info" role="alert"><strong>Warning!</strong> </div>',
        warnTemplate = '<div class="alert alert-warning" role="alert"><strong></strong> </div>',
        errorTemplate = '<div class="alert alert-danger" role="alert"><strong></strong> </div>';

    function warn(text) {
        $('.js-notice-modal .modal-content').text(text);
        $('.js-notice-modal').modal();
    }

    return {
        warn: warn
    };

});
