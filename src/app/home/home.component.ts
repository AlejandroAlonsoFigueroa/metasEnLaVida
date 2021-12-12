import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _data: DataService) { }
  numItems: number = 4;

  botonTexto :string ="Agregar item";

  meta: string= "Mi primera meta";

  goals:any = [];

  ngOnInit(): void {
    this._data.meta.subscribe(res => this.goals = res);
    this._data.meta.subscribe(res => this.goals = res);
    this._data.cambiarMeta(this.goals);
  }

  agregarItem(){
    this.goals.push(this.meta);
    this.meta = "";
    this.numItems = this.goals.length;
    this._data.cambiarMeta(this.goals);
  }

  


}
