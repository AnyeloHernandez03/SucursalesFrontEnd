import { Component, OnInit } from '@angular/core';
import { ListadoMonedas } from 'src/app/services/Isucursales';
import { SucursalesService } from 'src/app/services/sucursales.service';

@Component({
  selector: 'app-monedas-dropdown',
  templateUrl: './monedas-dropdown.component.html',
  styleUrls: ['./monedas-dropdown.component.css']
})
export class MonedasDropdownComponent implements OnInit{

  sucursales: ListadoMonedas[] | undefined;
selectedItem: any;
  constructor(private service:SucursalesService  ){ }
  ngOnInit(): void {
    this.service.ListadoMonedas().subscribe(sucursales => {
      this.sucursales = sucursales;
      console.log(this.sucursales);
    });
  }
}

