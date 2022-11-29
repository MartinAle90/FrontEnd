import { SExperienciaService } from './../../service/s-experiencia.service';
import { Experiencia } from './../../model/experiencia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;
  
  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
    data =>{
      this.expLab = data;
    }, err =>{
      alert("Error al Modificar Experiencia");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia Editada Satisfactoriamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al Modificar la Experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
