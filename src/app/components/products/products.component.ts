import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ProductsService } from "src/app/services/productsService";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,AfterViewInit {

  listProducts:any[] = [];

  constructor(
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.productsService.fnObtenerProductos().subscribe({
    next: (productsData) =>{
      this.listProducts = productsData;
      console.log(this.listProducts);
      this.spinner.hide();
    }
   });
  }

  ngAfterViewInit(): void {
  }






}
