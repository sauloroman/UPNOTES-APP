import cors from 'cors'
import express, { Application, Request, Response, Router } from 'express'
import { ServerApp } from './presentation/server'

const createExpressApp = function(): Application {
  const app = express()

  app.use( cors() )
  app.use( express.json() )
  app.use( express.urlencoded({extended: true}))
  app.use( express.static('public') )
  
  return app;
}

async function main() {

  // TODO: Mover a archivo independiente
  const router: Router = Router()
  router.get('/', function( req, res ){
    res.send('Hello')
  })

  const server = new ServerApp({
    port: 4000,
    app: createExpressApp,
    router: router,
  })

  await server.start()

}

(async () => {
  await main()
})()