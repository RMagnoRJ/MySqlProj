import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../Model/products';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  allProducts: Product[] = [];

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  onProductsFetch(){
    this.fetchProducts();
  }

  onDeleteProduct(id: string) {
    this.http.delete('https://indianapp-ae60b-default-rtdb.firebaseio.com/products/'+id+'.json')
    .subscribe();
  }
  
  onDeleteAllProduct() {
    this.http.delete('https://indianapp-ae60b-default-rtdb.firebaseio.com/products.json')
    .subscribe();
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
