import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }

  fnObtenerProductos():Observable<any>{
    return this.http.get<any[]>('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');
  }

  fnObtenerProducto(codigo:number):Observable<any>{
    return this.http.get<any[]>(`https://api.escuelajs.co/api/v1/products/${codigo}`);
  }
}
