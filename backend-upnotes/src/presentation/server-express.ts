import { Router } from "express";
import express from 'express';
import cors from 'cors';

interface ServerAppOptions {
  port: number;
  router: Router;
  publicPath?: string;
}

export class ServerApp {

  public readonly app = express();
  private readonly port: number;
  private readonly router: Router;
  private readonly publicPath?: string;
  private serverListener?: any;

  constructor( serverOptions: ServerAppOptions ) {
    const { port, router, publicPath = 'public' } = serverOptions
    this.port = port
    this.router = router
    this.publicPath = publicPath
  }

  public async start() {

    this.app.use( cors() )
    this.app.use( express.json() )
    this.app.use( express.static( this.publicPath! ) )
    this.app.use( express.urlencoded({extended: true}))

    this.app.use( this.router )

    this.serverListener = this.app.listen( this.port, () => {
      console.log(`Server running in port ${this.port}`)
    })

  }

  public close() {
    this.serverListener?.close();
  }

}