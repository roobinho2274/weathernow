// Compiled using marko@4.21.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/aplicacao$1.0.0/src/app/views/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><title></title><link rel=icon href=favicon.ico type=image/x-icon><link rel=stylesheet type=text/css href=/static/css/reset.css><link rel=stylesheet type=text/css href=/static/css/home.css></head><body><header><div class=container><h1 class=title>Clima agora</h1></div></header><main><section class=container><h2>Cidades do mundo</h2><div class=botton-bar><div class=container><label for=filter-table>Filtrar cidades:</label><input type=text name=filtro id=filter-table placeholder=\"Digite o nome\"></div><div class=container><span id=erro-ajax class=invisible>Erro ao buscar cidade</span><button id=search-cities class=bto-main>Buscar cidades</button></div></div><table><thead><tr><th>Nome</th><th>Estado</th><th>País</th><th>Latitude</th><th>Longitude</th></tr></thead><tbody id=table-cities></tbody></table></section><section class=container><h2 id=title-form>Dados da cidade</h2><ul id=error-message></ul></section></main><script src=/static/js/filter.js></script><script src=/static/js/search-city.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "33");

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
