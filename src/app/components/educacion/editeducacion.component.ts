import { EducacionService } from 'src/app/service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;
  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al Modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        alert("Educación Editada Satisfactoriamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al Modificar la Educacion");
        this.router.navigate([''])
      }
    )
  }

}
