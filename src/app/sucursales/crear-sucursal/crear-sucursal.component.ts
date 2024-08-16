import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SucursalCreacion } from 'src/app/services/Isucursales';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit{
  fechaActual: Date = new Date();

 
  constructor (private formBuilder: FormBuilder, private router:Router, private service: SucursalesService ){

  }

    CrearSucursalForm = this.formBuilder.group({
    sucCodigo:['',[Validators.required,]],
    sucDescripcion:['',[Validators.required]],
    sucDirrecion:['',[Validators.required]],
    sucIdentificacion:['',[Validators.required]],
    sucFechaCreacion:[this.formatearFecha(this.fechaActual),[Validators.required]],
    monId:['',[Validators.required]],
  })

  ngOnInit(): void {

  }

  get sucCodigo(){ return this.CrearSucursalForm.controls.sucCodigo }
  get sucDescripcion(){ return this.CrearSucursalForm.controls.sucDescripcion }
  get sucDirrecion(){ return this.CrearSucursalForm.controls.sucDirrecion }
  get sucIdentificacion(){ return this.CrearSucursalForm.controls.sucIdentificacion }
  get sucFechaCreacion(){ return this.CrearSucursalForm.controls.sucFechaCreacion }
  get monId(){ return this.CrearSucursalForm.controls.monId }

  crearSucursal(){
    if(this.CrearSucursalForm.valid){
      

      this.service.CrearSucursal(this.CrearSucursalForm.value as unknown as SucursalCreacion).subscribe(() => {
        this.router.navigate(['/sucursales']);
        this.CrearSucursalForm.reset();
      });
    }
    else
    {
      alert("error al ingresar los datos");
    }

  }

  formatearFecha(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0'); // Meses de 0 a 11
    const day = String(fecha.getDate()).padStart(2, '0');
    const hours = String(fecha.getHours()).padStart(2, '0');
    const minutes = String(fecha.getMinutes()).padStart(2, '0');
    const seconds = String(fecha.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}
