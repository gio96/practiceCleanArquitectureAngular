import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { proyectoGatewayAbstract } from 'src/app/domain/models/proyecto/gateway/proyecto-gateway.abstract';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/domain/models/proyecto/entity/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServiceService extends proyectoGatewayAbstract {
  private busi = 'https://us-central1-training-sofka-232216.cloudfunctions.net/function-7';

  constructor(private http: HttpClient){
    super();
  }
  getAllBusiness(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.busi);
  }
}
