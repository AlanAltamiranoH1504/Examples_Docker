const cron = require('node-cron');
let counter = 0;

cron.schedule('1-59/5 * * * * *', () => {
  console.log('running a task every minute');
  counter++;
  console.log("Contador cada 5 segundos: " + counter);
});

console.log("Inicio");

