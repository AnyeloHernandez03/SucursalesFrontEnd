import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.css']
})
export class EliminarSucursalComponent implements OnInit{
  id: string | null = null;
  constructor (private formBuilder: FormBuilder, private router:Router, private service: SucursalesService, private activatedRoute: ActivatedRoute){}

  EliminarSucursalForm = this.formBuilder.group({
    sucId:['',[Validators.required]]
  })

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); 
    console.log(this.id);

    this.service.ObtenerPorId(this.id!).subscribe((sucursal) => {
    this.EliminarSucursalForm.patchValue({
      sucId: this.id!
      // Asigna valores
    });console.log(sucursal);
        
    });
  }
  get sucId(){ return this.EliminarSucursalForm.controls.sucId }

  EliminarSuc(){
    if(this.EliminarSucursalForm.valid){
      this.service.EliminarSucursal(this.id!).subscribe(() => {
        this.router.navigate(['/sucursales']);
        this.EliminarSucursalForm.reset();
      });
    }
    else
    {
      alert("error al ingresar los datos");
    }

  }

}
