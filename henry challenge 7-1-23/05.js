/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function pedazos(array, cantidad) {
  // La funcion pedazos recibe un arreglo llamado 'array' y un numero entero llamado 'cantidad'
  // Esta debe separar el array recibido en N subarreglos que tengan como máximo el numero recibido en cantidad de elementos.
  // Por ejemplo:
  // pedazos([1,2,3,4,5], 2) -> retorna [[1,2], [3,4], [5]);
  // pedazos([1,2,3,4,5], 4) -> retorna [[1,2,3,4], [5]);
  // pedazos{[1,2],4) -> retorna [[1,2]];
  var newArray=[];
  var arrayFinal=[];
  for (var i=0; i<array.length;i++)
  {
    for (var x=0; x < cantidad; x++)
    {
        if(array[i]!= undefined )
        { 
            newArray[x]=array[i];
            i++;
        }
    }
    arrayFinal.push(newArray);
    if (i>0)
    {
        i--;
        newArray=[];
    }
  }
  return arrayFinal;
};
// No modifiques nada debajo de esta linea //

module.exports = pedazos