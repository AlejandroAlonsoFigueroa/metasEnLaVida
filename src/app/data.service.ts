import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private metas = new BehaviorSubject<any> (["La meta inicial", "Otra meta cualquiera"]);

  meta = this.metas.asObservable();



  constructor() { }


  cambiarMeta(meta: any){
    this.metas.next(meta);
  }
}
