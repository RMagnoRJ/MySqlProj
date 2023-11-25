//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ServidorProviderService {

  constructor() {}

}



  /*
  url: string = "http://localhost/phpp/";

  constructor(public http: HttpClient) {
    console.log('Hello ServidorProvider Provider');
  }

  
  getPegar(){
    return this.http.get(
      this.url + 'dados.php')
      .subscribe((res) => {
        console.log(res)
      }
    )
  }
  */


//.pipe(
//  map(res => res.json)
//  );
