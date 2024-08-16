import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListadoMonedas, SucursalDTO, SucursalEdicion } from 'src/app/services/Isucursales';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit{
  fechaActual: Date = new Date();
  id: string | null = null;
  sucursales: ListadoMonedas[] | undefined;
  selectedItem: any;
  constructor (private formBuilder: FormBuilder, private router:Router, private service: SucursalesService, private activatedRoute: ActivatedRoute){}


  modelo: SucursalDTO | undefined;
  
  EditarSucursalForm = this.formBuilder.group({
    sucId:['',],
    sucCodigo:['',],
    sucDescripcion:['',Validators.maxLength(250)],
    sucDirrecion:['',Validators.maxLength(250)],
    sucIdentificacion:['',Validators.maxLength(50)],
    sucFechaCreacion:['',],
    sucFechaModificacion:[this.formatearFecha(this.fechaActual)],
    monId:['',],
  })

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id'); 
    console.log(this.id);
   

      this.service.ObtenerPorId(this.id!).subscribe((sucursal) => {
        this.EditarSucursalForm.patchValue({
          sucId: this.id!,
          sucCodigo: sucursal.sucCodigo,
          sucDescripcion: sucursal.sucDescripcion,
          sucDirrecion: sucursal.sucDirrecion,
          sucIdentificacion: sucursal.sucIdentificacion,
          sucFechaCreacion: sucursal.sucFechaCreacion,
          sucFechaModificacion: this.formatearFecha(this.fechaActual),
          monId: sucursal.monId
          // Asigna más valores según los campos del formulario y la respuesta
        });
        console.log(sucursal);
        
      });
    
      this.service.ListadoMonedas().subscribe(sucursales => {
        this.sucursales = sucursales;
        console.log(this.sucursales);
      });
  }

  get sucCodigo(){ return this.EditarSucursalForm.controls.sucCodigo }
  get sucDescripcion(){ return this.EditarSucursalForm.controls.sucDescripcion }
  get sucDirrecion(){ return this.EditarSucursalForm.controls.sucDirrecion }
  get sucIdentificacion(){ return this.EditarSucursalForm.controls.sucIdentificacion }
  get sucFechaCreacion(){ return this.EditarSucursalForm.controls.sucFechaCreacion }
  get monId(){ return this.EditarSucursalForm.controls.monId }

  editarSucursal(){
    if(this.EditarSucursalForm.valid){
      this.service.EditarSucursal(this.id!,this.EditarSucursalForm.value as unknown as SucursalEdicion).subscribe(() => {
        this.router.navigate(['/sucursales']);
        this.EditarSucursalForm.reset();
      });
    }
    else
    {
      alert("error al ingresar los datos");
    }

  }

  ObtenerPorId(id:string){
   
    this.service.ObtenerPorId(id).subscribe((sucursal) => {

      this.EditarSucursalForm.patchValue;
      console.log(sucursal);
      
    });
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