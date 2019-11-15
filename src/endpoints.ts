import { server } from "./main";
import Api from "./api";

export module Endpoints {

    export function initialize() {

        // specify endpoints below
        server.get("/hello/:name", Api.hello)
        server.get("/echo/:name", Api.echo)
        server.get("/drno/:url", Api.drno)
    }
}

export default Endpoints;
