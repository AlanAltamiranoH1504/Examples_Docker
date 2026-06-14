let counter = 0;
const syncDB = () => {
  counter++;
  console.log("Tick cada multiplo de 5 ->", counter);

  return counter;
};

export {
    syncDB
}
