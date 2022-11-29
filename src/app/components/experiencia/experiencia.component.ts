import { Experiencia } from '../../model/experiencia';
import { TokenService } from '../../service/token.service';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => { 
        this.expe = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          alert("Experiencia Eliminada de Modo Satisfactorio");
          this.cargarExperiencia();
        }, err => {
          alert("Error al Eliminar la Experiencia");
        }
      )
    }
  }

}
