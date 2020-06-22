// Compiled using marko@4.21.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/aplicacao$1.0.0/src/app/views/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><title></title><link rel=icon href=favicon.ico type=image/x-icon><link rel=stylesheet type=text/css href=/static/css/reset.css><link rel=stylesheet type=text/css href=/static/css/home.css></head><body><header><div class=container><h2 class=title>Clima agora</h2></div></header><main><section class=container><h2>Cidades do mundo</h2><div class=botton-bar><div class=container><input type=text name=input id=inputValue placeholder=\"Digite o nome\"></div><div class=container><button id=search-cities class=bto-main>Buscar cidades</button></div></div><div class=container><span id=erro-ajax class=invisible>Falha ao buscar cidade, verique o nome digitado!</span></div><div class=description><h1 class=\"info-name information\"></h1><h1 class=\"info-country information\"></h1><h1 class=\"info-temp information\"></h1><h1 class=\"info-humidity information\"></h1><h1 class=\"info-weather information\"></h1></div></section><section class=container><h2 id=title-form>Dados da cidade</h2><table><thead><tr><th>Nº</th><th>Id da Cidade</th><th>Nome</th></tr></thead><tbody id=tabela-pacientes>");

  var $for$0 = 0;

  marko_forOf(data.log, function(log) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "log_" + (log.id == null ? "" : log.id)) +
      "><td>" +
      marko_escapeXml(log.id) +
      "</td><td>" +
      marko_escapeXml(log.name) +
      "</td><td><a href=#>Editar</a></td></tr>");
  });

  out.w("</tbody></table></section></main><script src=/static/js/search-city.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/aplicacao$1.0.0/src/app/views/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
