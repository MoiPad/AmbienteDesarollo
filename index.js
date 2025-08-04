const lectorDeComandos = require("readline");
const Empresa = require("./models/Empresa");

const lector = lectorDeComandos.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lector.question("Ingrese el peso del paquete: ", (peso) => {
  lector.question("Ingrese la distancia de envío: ", (distancia) => {
    pesoCapturado = parseFloat(peso);
    distanciaCapturada = parseFloat(distancia);

    const envio = new Empresa(pesoCapturado, distanciaCapturada);

    console.log("\nResumen del Envío:");
    console.log(`Costo base: L${envio.costoBase.toFixed(2)}`);
    console.log(`Recargo por peso: L${envio.recargoPorPeso().toFixed(2)}`);
    console.log(
      `Recargo por distancia: L${envio.recargoPorDistancia().toFixed(2)}`,
    );
    console.log(`Costo total: L${envio.costoTotal().toFixed(2)}`);
    console.log(`Fecha estimada de entrega: ${envio.fechaDeEntrega()}`);

    lector.close();
  });
});
