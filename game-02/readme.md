# Gilded Rose Reto terminado

## Reglas para uso

para poder usar los elementos conjurados al instanciar nuestras clases nesesitamos añadir
la palabra conjured al string donde bayamos a declarar el nombre de nuestro item es decir 
'queso conjured ' o 'jamon cojured' asi no modificamos la clase Item ;)

## Resolucion resumida

para este ejercicio use el tipo objeto para los items legendarios como lo son Aged Brie, Sulfuras, Backstage pases estos siendo las keys que como tal serian funciones que llaman a otras funciones que llaman a otra funcion de parametro para asi separar la dependencia entre la condicion que se tiene  de sellIn y Quality esto me parece muy practico ya que podemos acceder mediante llaves y tener un codigo reutilizable y no crear muchas lineas por cada condicion.

## nuevos cambios 
nuevas clases 'UpdateStateItems' esta clase nos sirve como controlador y poder actualizar sellIn y Quality llamando a sus metodos y para que estos modifiquen dependiendo a lo que reciban y 'ItemLegends' es el diccionario de los objetos legendarios que tienen su comportamiento propio 

para aplicar estos nuevos cambios se debe llamar a las instancias de nuestras clases desde 'updateQuality' y pasarle como parametro (<!instancia de los articulos legendarios>.itemsLegends, <!instacia de los updates>) con esto logramos corregir el problema de Open-Closed aplicando el praton adaptador