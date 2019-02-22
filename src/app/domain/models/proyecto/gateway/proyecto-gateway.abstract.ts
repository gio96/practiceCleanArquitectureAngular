import { Observable } from 'rxjs';
import { Proyecto } from '../entity/proyecto';

export abstract class proyectoGatewayAbstract {

  abstract getAllBusiness(): Observable<Proyecto[]> ;

}
