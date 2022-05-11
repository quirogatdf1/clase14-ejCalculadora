/* Ejericio Calculadora */
const btnCalcular = document.getElementById("btnCalculadora");
btnCalcular.addEventListener("click", () => {
  /* Verifica que se ingrese un valor númerico */
  function verificarNumber() {
    const message = "Ingresar un valor númerico";
    let valor = Number(prompt(message));
    while (isNaN(valor)) {
      alert(`${message} válido`);
      valor = Number(prompt(message));
    }
    return valor;
  }

  /* Ingresar los valores y el operador */
  const primerValor = verificarNumber();
  const segundoValor = verificarNumber();
  const operator = prompt("Ingrese el signo de la operación");

  /* Dibujar linea */
  function dibujarLineaN(caracter: string, indice: number) {
    let linea = "";
    for (let i = 0; i <= indice; i++) {
      linea += caracter;
    }
    return linea;
  }

  /* Calcular el resultado según corresponda */
  function calcularResultado(valorA: number, valorB: number, operator: string) {
    let resultado = 0;
    switch (operator) {
      /* Suma */
      case "+": {
        resultado = valorA + valorB;
        break;
      }
      /* Resta */
      case "-": {
        resultado = valorA - valorB;
        break;
      }
      /* Multiplicación */
      case "*": {
        resultado = valorA * valorB;
        break;
      }
      /* Division */
      case "/": {
        resultado = valorA / valorB;
        break;
      }
    }
    return `El resultado de ${valorA} ${operator} ${valorB} es ${resultado}`;
  }
  /* Mostrar por consola el resultado */
  console.log(dibujarLineaN("#", 40));
  console.log(calcularResultado(primerValor, segundoValor, operator));
  console.log(dibujarLineaN("#", 40));
});
