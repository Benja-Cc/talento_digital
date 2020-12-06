var x = [1,2,3];
var aux = [];
    for (var i=0;i<x.length/2;i++){
      aux=x[i];
      x[i]=x[x.length-1-i];
      x[x.length-1-i]=aux;
    }
console.log(x);
//Configura un array para que el resultado sean los valores en el orden contrario. 
//Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].