import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  // product:any;
  // index:any;
  product:{img:string;name:string; price:number; description?:string};
  

  constructor(private route: ActivatedRoute,private cartService: CartService) { }


  addToCart(product:any) {

    window.alert('Your product has been added to the cart!');

    this.cartService.addToCart(product);

  }

  ngOnInit():void{

    //  this.index=this.route.snapshot.params.productId;
    //  this.product = products[+this.index];

    this.route.paramMap.subscribe(params => {

      this.product = products[+params.get('productId')];
    //   this.product=products[this.route.snapshot.params.get("productId")];
 
    });
  }
}

