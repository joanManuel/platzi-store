import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

// Interfaz que representa un producto, es decir que tiene su titulo, decripcion y todo lo demás
import { Product } from "./../models/product.model";
//desde este servicio vamos a ir guardando dinamicamente en un array todos los productos que van añadiendo al carrito.


@Injectable({
  providedIn: 'root'
})
export class CartService {

 private  products: Product[] = [];

 //para que el carrito inicie en 0 productos
  private cart = new BehaviorSubject<Product[]>([]);

  //Se crea una variable publica para que pueda ser preguntada por cualquier componente y que sea de tipo observable para que cualquiera se subscriba a el para notar sus cambios en tiempo real
  cart$ = this.cart.asObservable();


  constructor() { }

  addCart( product: Product ){
    //se crea un nuevo estado del arreglo 
    this.products = [...this.products, product];

    //con esto notifico a todos los componentes, que hubo un cambio.

    //le envio la copia del array creado
    this.cart.next(this.products);
  }

}
