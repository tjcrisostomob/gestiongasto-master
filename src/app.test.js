const { obtenerPuerto, generarModelo } = require("./app");

test("Debería mostrar el puerto", () => {
    const puertoRecibido = obtenerPuerto();
    expect(puertoRecibido).toBe("6000");
});
test("Deberia nostrar dni y nombres", () => {
    const CadenaRecibida = generarModelo("12345678", "Juan Peres");
    expect(CadenaRecibida).toBe("(12345678) Juan Peres");
});