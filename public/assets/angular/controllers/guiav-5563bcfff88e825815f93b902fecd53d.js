!function(){var o=angular.module("guiaV",[]);o.controller("LaboratorioController",function(o,r){return o.laboratorios=[],r.get("./laboratorios.json").success(function(r){return o.laboratorios=r})})}();