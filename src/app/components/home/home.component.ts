import { Component, OnDestroy, OnInit } from '@angular/core';
import Typed from "typed.js";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private typed:Typed | undefined;
  titleweb:string = 'farm eco <span style="color:#38b000;font-weight:bold;">products</span>';
  constructor() { }

  ngOnInit(): void {
    const optiontyped = {
      strings: [this.titleweb,],
      typeSpeed: 50, // Velocidad de escritura
      backSpeed: 35, // Velocidad de borrado
      loop: true,
      cursorChar:'',
    }
    const typed = new Typed('.title',optiontyped);
  }
  ngOnDestroy(): void {
    this.typed?.destroy();
  }



}
