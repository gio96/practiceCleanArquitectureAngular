import { TestBed } from '@angular/core/testing';

import { ProyectoServiceService } from './proyecto-service.service';
import { of } from 'rxjs';

describe('ProyectoServiceService', () => {

  // beforeEach(() => TestBed.configureTestingModule({}));
  let service: ProyectoServiceService;
  beforeEach(() => {service = new ProyectoServiceService(); });


  // it('should be created', () => {
  //   const service: ProyectoServiceService = TestBed.get(ProyectoServiceService);
  //   expect(service).toBeTruthy();
  // });

  it('should call the service', () => {
    const businees = of( [{
      "id":1,
      "name": "Colanta",
      "nit": "64612814",
      "state": "WIP",
      "tech": "1,2,3"
    },
    {
      "id":2,
      "name": "Sura",
      "nit": "44774",
      "state": "DOING",
      "tech": "3,5,8"
    },
    {
      "id":3,
      "name": "Bancolombia",
      "nit": "48463141",
      "state": "DONE",
      "tech": "1,3,5,8"
    }]);
    expect(service.getAllBusiness()).toBe(businees);

    });


});
