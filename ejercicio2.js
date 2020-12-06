var x = [1,2,3,4,5];
    for (var i=0;i<x.length-1;i++){
      x[i]=x[i+1];  
    }
    x[i]=0;
console.log(x);
//Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. 
//Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].