function map(f,a) {
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
