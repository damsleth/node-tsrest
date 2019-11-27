// ES6-style Imports
import endpoints from "./endpoints"
import * as restify from "restify"
import * as dotenv from "dotenv"
dotenv.config()

// Bootstrapping
const server = restify.createServer({
    name: 'tsrest',
    version: '1.0.0'
})
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.jsonBodyParser())
server.pre(restify.plugins.pre.dedupeSlashes())

// Load all endpoints
endpoints.initialize()

// Start listening
server.listen((process.env.PORT || 8080),
    () => console.log(`${server.name} listening at ${server.url}`))

export { server }