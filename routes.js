const routes = require("next-routes");

module.exports = routes().add("people", "/people/:person");
