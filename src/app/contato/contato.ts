import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-contato',
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  public mensagem: string = '';
  public titulo: string = '';
  public nome: string = '';
  public email: string = '';
  public telefone: string = '';
  public text: string = '';
  public copia: string = '';

  //public obj: Cliente = new Cliente(); //obj.nome, obj.email, obj.telefone, obj.cpf, obj.endereco

  public enviar() {

    this.mensagem = 'Mensagem enviada com sucesso!';
    let corpoMensagem =
      'Titulo:' +
      this.titulo +
      '\nNome:' +
      this.nome +
      '\nEmail: ' +
      this.email +
      '\nTelefone: ' +
      this.telefone +
      '\nMensagem: ' +
      this.text +
      '\nCópia para: ' +
      this.copia;
    localStorage.setItem('mensagemContato', corpoMensagem);

    //let json = JSON.stringify(this.obj);
    //localStorage.setItem('clienteContato', json);
  }
}
