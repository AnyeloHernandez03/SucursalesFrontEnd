import { Component, OnInit } from '@angular/core';
import { ListadoSucursales } from 'src/app/services/Isucursales';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-index-sucursales',
  templateUrl: './index-sucursales.component.html',
  styleUrls: ['./index-sucursales.component.css']
})
export class IndexSucursalesComponent implements OnInit{

  constructor(private service: SucursalesService) {}

  sucursales: ListadoSucursales[] | undefined;

  ngOnInit(): void {
    this.service.ListadoSucursales().subscribe(sucursales => {
      this.sucursales = sucursales;
      console.log(this.sucursales);
    });

  }

  EditarSuc(Sucid:number){
    console.log(Sucid);
  }

  EliminarSuc(Sucid:number){
    console.log(Sucid);

 
  }

  

}
