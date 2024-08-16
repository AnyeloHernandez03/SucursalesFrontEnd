import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CuentasService } from 'src/app/services/cuentas.service';
import { ILogin } from 'src/app/services/Icuentas';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })
  constructor (private formBuilder:FormBuilder, private router:Router, private service: CuentasService ){}

  ngOnInit(): void {
    
  }

  get Correo(){
    return this.loginForm.controls.email
  }
  
  get clave(){
    return this.loginForm.controls.password
  }

  login(){
    if(this.loginForm.valid){
        this.service.LoginApi(this.loginForm.value as ILogin).subscribe(()=> {  
          this.router.navigate(['/sucursales']);
          this.loginForm.reset();
        },() =>  alert("credenciales incorrectas"));
    }else{
      alert("error al ingresar los datos");
    }
  }
}


