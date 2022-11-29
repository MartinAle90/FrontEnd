import { TokenService } from './../../service/token.service';
import { SkillService } from './../../service/skill.service';
import { Skill } from './../../model/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          alert("Skill Eliminada de Modo Satisfactorio");
          this.cargarSkills();
        }, err => {
          alert("Error al Eliminar la Skill");
        }
      )
    }
  }

}
