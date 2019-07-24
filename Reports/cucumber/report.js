$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChamadaGet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# encoding UTF-8"
    }
  ],
  "line": 5,
  "name": "Consulta API",
  "description": "Eu como cliente da aplicação\r\nQuero consultar informações via requisição\r\nPara validar o retorno",
  "id": "consulta-api",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@validamensagem"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Consulta com validação de resultado",
  "description": "",
  "id": "consulta-api;consulta-com-validação-de-resultado",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 11,
  "name": "envio a requisição",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "Valido o retorno",
  "keyword": "Então "
});
formatter.match({
  "location": "ValidaChamadaGetSteps.envio_a_requisição()"
});
formatter.result({
  "duration": 3319765400,
  "status": "passed"
});
formatter.match({
  "location": "ValidaChamadaGetSteps.valido_o_retorno()"
});
formatter.result({
  "duration": 679702400,
  "status": "passed"
});
});