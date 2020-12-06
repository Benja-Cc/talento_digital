function repetir(x){
    for(i=1;i<x.length+1;i+=2){
      x.splice(i,0,x[i-1]);
    }
    return x;
  }
  console.log(repetir([7,"Benja", 2, false]));
  //Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
  //Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].