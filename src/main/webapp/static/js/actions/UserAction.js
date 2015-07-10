/**
 * User action
 *
 * @author victor li
 * @date 2015/07/09
 */

'use strict';

var Reflux = require('reflux');

var UserAction = Reflux.createActions({
    'login': {},
    'logout': {},
    'signup': {},
    'update': {}
});

module.exports = UserAction;
