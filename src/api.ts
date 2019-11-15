import * as got from "got";
export module Api {

    export function hello(req, res, next) { res.send(`Hello ${req.params.name}`); return next() }

    export function echo(req, res, next) { res.send(req.params); return next(); }

    export async function drno(req, res, next) {
        const rootUrl = process.env.DRNO_ROOTURL
        let q = "?"
        if (Object.keys(req.query).length) {
            Object.keys(req.query).forEach(p => q += `${p}=${req.query[p]}&`)
        }
        const requestUrl = `${rootUrl}/${req.params.url}${q}api_key=${process.env.DRNO_APIKEY}`;
        try {
            const response = await got(requestUrl)
            res.send(JSON.parse(response.body))
            return next()
        } catch (error) {
            console.log(`ERROR\n${error}`)
            res.send(`ERROR\n${error}`)
        }
    }
}

export default Api;