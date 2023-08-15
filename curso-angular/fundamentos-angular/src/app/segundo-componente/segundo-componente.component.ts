import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Pedro";
  dataNascimento = "2000-08-29";
  urlImagem = "/assets/pedro.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento do Pedro é : ${this.dataNascimento}`);
  }
}
