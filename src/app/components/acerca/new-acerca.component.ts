import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';

@Component({
  selector: 'app-new-acerca',
  templateUrl: './new-acerca.component.html',
  styleUrls: ['./new-acerca.component.css']
})
export class NewAcercaComponent implements OnInit {
  titulacionA: string ='';
  descripcionA: string='';

  constructor(private acercaS: AcercaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const acerca = new Acerca(this.titulacionA, this.descripcionA);
    this.acercaS.save(acerca).subscribe(
      data =>{
        alert("Acerca de Mí Añadido Correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al Agregar un Nuevo Acerca de Mí");
        this.router.navigate(['']);
      }
    )
  }

}
