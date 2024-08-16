import { Injectable } from '@angular/core';
import { ILogin, LoginDTO } from './Icuentas';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment.pro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }

  private apiURL = enviroment.apiURL;

  public LoginApi(credenciales: ILogin){
    console.log(credenciales)
    return this.http.post(this.apiURL + 'cuentas/login',credenciales);
  }
}
