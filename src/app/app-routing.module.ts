import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

// import { ModuleWithProviders } from '@angular/compiler/src/core';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:parametro', component: ContactoComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule { }
