import { Component } from '@angular/core';
import { CadastroCredentials } from '../model/cadastro-credentials';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  public user : CadastroCredentials = new CadastroCredentials();

  public cadastrar(){

    let userInfos = "Nome: " + this.user.nomeUsuario + "\n" +
                     "Email: " + this.user.email + "\n" +
                     "Confirmar Email: " + this.user.confirmarEmail + "\n" +
                     "Senha: " + this.user.senha + "\n" +
                     "Confirmar Senha: " + this.user.confirmarSenha + "\n" +
                     "Sexo: " + this.user.sexoUsuario + "\n" +
                     "Orientação Sexual: " + this.user.orientacaoSexual;

    localStorage.setItem("userInfos", userInfos);

  
  }
}
