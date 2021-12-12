import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  numItems: number = 4;

  botonTexto :string ="Agregar item";

  meta: string= "Mi primera meta";

  goals:any = [];

  ngOnInit(): void {
    this.numItems = this.goals.length;
  }

  agregarItem(){
    this.goals.push(this.meta);
    this.meta = "";
    this.numItems = this.goals.length;
  }

  


}
