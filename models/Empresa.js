const days = require("dayjs");

class Empresa {
  constructor(peso, distancia) {
    this.peso = peso;
    this.distancia = distancia;
    this.costoBase = 50;
  }

  recargoPorPeso() {
    // Decidi hacerlo con un operador ternario
    return this.peso > 5 ? (this.peso - 5) * 20 : 0;

    // Forma tradicional
    /*
     * if(peso > 5){
     *    return (peso - 5) * 20;
     * }else{
     *   return 0;
     * }
     * */
  }

  recargoPorDistancia() {
    return this.distancia > 50 ? (this.distancia - 50) * 10 : 0;

    /*
     *if(distancia >50){
     *  return (this.distancia -50) * 10;
     *}else{
     *  return 0;
     *}
     * */
  }
  costoTotal() {
    return this.costoBase + this.recargoPorPeso() + this.recargoPorDistancia();

    /*
     * let suma = this.costoBase + this.recargoPorPeso() + this.recargoPorDistancia();
     *
     *
     * */
  }

  fechaDeEntrega() {
    const dias = 2;
    const traslado = Math.ceil(this.distancia / 100);
    const totalDias = dias + traslado;
    return days().add(totalDias, "day").format("DD/MM/YYYY");
  }
}

module.exports = Empresa;
