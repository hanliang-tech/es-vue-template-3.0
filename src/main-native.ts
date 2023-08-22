//
import routes from "./routes.js";
import {ESApp,} from '@extscreen/es3-vue';
import application from './App.vue';

import {createESApp} from "@extscreen/es3-core";
import {createESLog, ESLog} from "@extscreen/es3-log";

const routerOptions = {
  main: 'index',
  error: 'error',
  limit: 10,
  routes: routes,
}

const app: ESApp = createESApp(application, routerOptions);

const esLog: ESLog = createESLog();
app.use(esLog);

import {ESComponent} from "@extscreen/es3-component";

app.use(ESComponent);








