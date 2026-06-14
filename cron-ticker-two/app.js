import cron from "node-cron";
import { syncDB } from "./tasks/sync-db.js";

console.log("Inicio de la aplicacion");
cron.schedule("1-59/5 * * * * *", syncDB);