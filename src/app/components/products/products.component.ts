import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ProductsService } from "src/app/services/productsService";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';


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
      this.spinner.hide();
    }
   });


   this.productsService.fnObtenerProducto(30).subscribe({
    next:(product)=>{
      console.log(product);
    },
    error:(err) => {
      Swal.fire({
        title: `<strong>${err.status}</strong>` ,
        text: err.message,
        icon: "error"
      });
    },
   })
  }

  ngAfterViewInit(): void {
  }






}
