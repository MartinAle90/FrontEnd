import { Router } from '@angular/router';
import { Skill } from './../../model/skill';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill Añadida Correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al Añadir la Skill");
        this.router.navigate(['']);
      }
    )
  }

}
