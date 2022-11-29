import { Educacion } from './../../model/educacion';
import { Router } from '@angular/router';
import { EducacionService } from './../../service/educacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string ='';
  descripcionE: string='';

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Eduacion Añadida Correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al Agregar una Nueva Educación");
        this.router.navigate(['']);
      }
    )
  }

}
