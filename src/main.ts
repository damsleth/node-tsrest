// ES6-style Imports
import Endpoints from "./endpoints"
import * as Restify from "restify"
import * as dotenv from "dotenv"
dotenv.config()

// Bootstrapping
const server = Restify.createServer({
    name: 'tsrest',
    version: '1.0.0'
})
server.use(Restify.plugins.acceptParser(server.acceptable))
server.use(Restify.plugins.queryParser())
server.use(Restify.plugins.bodyParser())

// Load all endpoints
Endpoints.initialize()

// Start listening
server.listen((process.env.PORT || 8080),
    () => console.log(`${server.name} listening at ${server.url}`))

export { server }