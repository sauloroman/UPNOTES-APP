interface AppInstance {
  use: ( ...args: any[] ) => void;
  listen: ( port: number, callback: () => void ) => ServerListener;
}

interface ServerListener {
  close: () => void;
}

interface ServerAppOptions<TApp extends AppInstance, TRouter> {
  port: number;
  app: () => TApp;
  router: TRouter;
}

export class ServerApp<TApp extends AppInstance, TRouter> {

  public readonly app: TApp;
  private readonly port: number;
  private readonly router: TRouter;
  private serverListener?: ServerListener;

  constructor( { app, port, router}: ServerAppOptions<TApp, TRouter> ) {
    this.app = app()
    this.port = port;
    this.router = router;
  }

  public async start(): Promise<void> {
    this.app.use( this.router )

    this.serverListener = this.app.listen( this.port, () => {
      console.log(`Server is running in port ${this.port}`)
    })
  }

  public close(): void {
    this.serverListener?.close();
  }
}