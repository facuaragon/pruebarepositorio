/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function masFrecuente(array) {
  // La funcion llamada 'masFrecuente' recibe como argumento un array de numeros enteros
  // y debe devolver el número entero que mas veces aparece (el más frecuente).
  // ej:
  // masFrecuente([1,1,2,3,4]) => 1
  // masFrecuente([3,2,3,2,3,3]) => 3
  // Nota: Los numeros pueden NO estar ordenados

  // Tu código aca:
var contar=1;
var conteoMax=0;
var numMasRepetido=0;

array.sort(function(a, b) {
    return a - b
  });

console.log(array);

for(var i=0; i<array.length; i++)
{
    if ( array[i]===array[i+1])
    {
        contar=contar+1;
    }
    else
    {
        contar=1;
    }
    if (contar>conteoMax)
    {
        numMasRepetido=array[i];
        conteoMax=contar;
    }
}

return numMasRepetido;

}

// No modifiques nada debajo de esta linea //

module.exports = masFrecuente