import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { InsumoComponent } from './insumo/insumo.component';
import { InventarioComponent } from './inventario/inventario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DetalleInsComponent } from './insumo/detalle-ins/detalle-ins.component';
import { EditarInsComponent } from './insumo/editar-ins/editar-ins.component';
import { ListarInvComponent } from './inventario/listar-inv/listar-inv.component';
import { DetalleUsComponent } from './usuario/detalle-us/detalle-us.component';
import { AgregarInsComponent } from './insumo/agregar-ins/agregar-ins.component';
import { SacarInsComponent } from './insumo/sacar-ins/sacar-ins.component';

@NgModule({
  declarations: [
    AppComponent,
    InsumoComponent,
    InventarioComponent,
    UsuarioComponent,
    DetalleInsComponent,
    EditarInsComponent,
    ListarInvComponent,
    DetalleUsComponent,
    AgregarInsComponent,
    SacarInsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
