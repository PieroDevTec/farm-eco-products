import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fnEnviarContactoCorreo(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Registro Exitoso",
      showConfirmButton: false,
      timer: 1500
    });
  }

}
