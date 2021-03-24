import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   items:string[] = [];
//   constructor() { }


  
//   addToCart(product:any){

//     this.items.push(product);

//   }

 

//   getItems() {

//     return this.items;

//   }

 

//   clearCart() {

//     this.items = [];

//     return this.items;

//   }
// }
@Injectable({
  providedIn: 'root',
})
export class CartService {
  // items = [];
  items:string[] = [];

  constructor() {}

  addToCart(product:any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  itemsLength() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];

    return this.items;
  }
}
