import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReSenhas } from '../model/re-senhas';

@Component({
  selector: 'app-reenviar-senha',
  imports: [FormsModule],
  templateUrl: './reenviar-senha.html',
  styleUrl: './reenviar-senha.css',
})
export class ReenviarSenha {
  
  public reenviar : ReSenhas = new ReSenhas();

  public reenvioSenha() {

    let userInfos = "Email:" + this.reenviar.email + "\n" +
                     "Confirmar Email:" + this.reenviar.confirmarEmail;

    localStorage.setItem("userInfos", userInfos);
  }
}
