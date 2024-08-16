import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './usuarios/login/login.component';
import { IndexSucursalesComponent } from './sucursales/index-sucursales/index-sucursales.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';


const routes: Routes = [
  {path:'',redirectTo:'/iniciarSesion' ,pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciarSesion',component:LoginComponent},
  {path:'sucursales',component:IndexSucursalesComponent},
  {path:'sucursales/crear',component:CrearSucursalComponent},
  {path:'sucursales/editar/:id',component:EditarSucursalComponent},
  {path:'sucursales/eliminar/:id',component:EliminarSucursalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
