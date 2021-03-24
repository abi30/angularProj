import { Component, OnInit,DoCheck} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit ,DoCheck {
  cartLenght:any;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.cartLenght= this.cartService.itemsLength();
  }

}
