import { ServerApp } from "./presentation/server-express";
import { envs } from './config/plugins/envs.plugin';
import { RouterApp } from "./presentation/routes";

 (async() => {
  await main();
 })()

 async function main() {

  const server = new ServerApp({
    port: envs.PORT,
    router: RouterApp.routes,
    publicPath: 'public'
  })

  await server.start();

 }