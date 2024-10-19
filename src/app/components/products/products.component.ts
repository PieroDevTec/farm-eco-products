import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ProductsService } from "src/app/services/productsService";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { detalleProductoInterface } from 'src/app/utils/interface/detalleProductoInterface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,AfterViewInit {

  listProducts:any[] = [];
  detalleProducto:detalleProductoInterface = {id:0,title:'',description:'',image:''};

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
  }


  ngAfterViewInit(): void {
  }

  fnDetalleProducto(codproduct:any){
    this.spinner.show();
    this.productsService.fnObtenerProducto(codproduct.id).subscribe({
      next:(product)=>{

        this.detalleProducto = {id:product.id,title:product.title,description:product.description,image:product.images[0]};
        console.log(this.detalleProducto);
        this.spinner.hide();
      },
      error:(err) => {
        this.spinner.hide();
        Swal.fire({
          title: `<strong>${err.status}</strong>` ,
          text: err.message,
          icon: "error"
        });
      },
     })
  }

  fnComprarProducto(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra Exitosa",
      showConfirmButton: false,
      timer: 1500
    });
  }





}
