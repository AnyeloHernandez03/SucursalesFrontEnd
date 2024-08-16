import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment.pro';
import { ListadoMonedas, ListadoSucursales, SucursalCreacion, SucursalDTO, SucursalEdicion } from './Isucursales';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private http: HttpClient) { }
  private apiURL = enviroment.apiURL;

  public ListadoSucursales(): Observable<ListadoSucursales[]>{
   return this.http.get<ListadoSucursales[]>(this.apiURL + 'sucursales');
  }

  public ListadoMonedas(): Observable<ListadoMonedas[]>{
    return this.http.get<ListadoMonedas[]>(this.apiURL + 'monedas');
   }

  public CrearSucursal(sucursal: SucursalCreacion){
    console.log(sucursal);
    return this.http.post(this.apiURL + 'sucursales', sucursal);
  }

  public EditarSucursal(id: string,sucursal: SucursalEdicion){
    console.log(sucursal);
    return this.http.put(`${this.apiURL + 'sucursales/'}${id}`,  sucursal);
  }

  public ObtenerPorId(id: string): Observable<SucursalDTO>{
    console.log(id);
    return this.http.get<SucursalDTO>(`${this.apiURL + 'sucursales/'}${id}`);
  }

  public EliminarSucursal(id: string){
    console.log(id);
    return this.http.delete(`${this.apiURL + 'sucursales/'}${id}`);
  }
}
