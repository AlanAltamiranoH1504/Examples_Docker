import { syncDB } from "../../tasks/sync-db";

describe("Pruebas en conexion a base de datos", () => {
  test("Debe ejecutar el proceso dos veces", () => {
    syncDB();
    const times = syncDB();
    expect(times).toBe(2);
  });
});
