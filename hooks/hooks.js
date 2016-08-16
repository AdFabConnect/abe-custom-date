'use strict';

var moment = require('moment');

var hooks = {
  afterHandlebarsHelpers: function(Handlebars, abe) {
    Handlebars.registerHelper('customDate', function(date, format, obj, ctx) {
      return moment(date).format(format);
    });

    return Handlebars
  }
};

exports.default = hooks;
