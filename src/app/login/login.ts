import { Component } from '@angular/core';
import { LoginCredentials } from '../model/login-credentials';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  public user : LoginCredentials = new LoginCredentials();

  public Entrar(){

    let userInfos = "Email:" + this.user.email + "\n" +
                     "Senha:" + this.user.senha;

    localStorage.setItem("userInfos", userInfos);
  }
}
