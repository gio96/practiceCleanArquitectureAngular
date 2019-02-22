import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './views/proyecto/proyecto.component';
import { ContainerComponent } from './views/container/container.component';
import { proyectoGatewayAbstract } from './domain/models/proyecto/gateway/proyecto-gateway.abstract';
import { ProyectoServiceService } from './infrastructure/proyecto/proyecto-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: proyectoGatewayAbstract,
    useClass: ProyectoServiceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
