function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><meta charset="utf-8"><title>React components</title></head><body>' +
      escapeXml(data.markup) +
      '</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);