# TSREST - barebones TypeScript REST api for node
A minimalist implementation of a node-based REST api.

This implementation uses the following
  * restify as connect-style middleware, instead of express
  * ts-node, for node typescript-support.
  * got, for sweet, lightweight http request handling 
  * dotenv for variable handling

## Installation
  * clone
  * npm install
  * npm start / npm run-script start

## Usage / Extending

Endpoint urls are specified in endpoints.ts and point to api.ts, which in turns contains the logic for the different endpoints.

To add a new endpoint, create a handler function in api.ts, and point to it from endpoints.ts