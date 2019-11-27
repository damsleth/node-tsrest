import { server } from "./server";
import * as restify from "restify"
import Api from "./api";

export module Endpoints {

    export function initialize() {

        // specify endpoints below
        server.on('NotFound', Api.notFound);
        server.on('BadRequest', Api.badRequest);
        server.get("/hello/:name", Api.hello)
        server.get("/echo/:name", Api.echo)
        server.get("/drno/:url", Api.drno)
        server.get("/*", restify.plugins.serveStatic({ directory: "./public", default: "index.html" }))
    }
}

export default Endpoints;
