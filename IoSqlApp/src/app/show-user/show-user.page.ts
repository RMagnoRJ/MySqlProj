import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../Model/products';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.page.html',
  styleUrls: ['./show-user.page.scss'],
})
export class ShowUserPage {
  
  allProducts: Product[] = [];

  constructor(public http: HttpClient) {
   }

  onProductCreate(products: {pName: string, desc: string, price: string}) {
    console.log(products);
    const headers = new HttpHeaders({'myHeader': 'r_magno_rj'});
    this.http.post<{name: string}>('https://indianapp-ae60b-default-rtdb.firebaseio.com/products.json',
    products, {headers: headers})
    .subscribe((res) => {
      console.log(res);
    });
  }

  public fetchProducts() {
    this.http.get<{[key: string]: Product}>('https://indianapp-ae60b-default-rtdb.firebaseio.com/products.json')
    .pipe(map((res) => {
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id: key})
        }
      }
      return products;
    }))
    .subscribe((products) => {
      console.log(products);
      this.allProducts = products;
    })
  }
  
}
