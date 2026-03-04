import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { Login } from './login/login';
import { Pesquisa } from './pesquisa/pesquisa';
import { Reenviarsenha } from './reenviarsenha/reenviarsenha';

export const routes: Routes = [
    {path: 'contato', component: Contato},
    {path: '', component:Vitrine},
    {path: 'cadastro', component: Cadastro},
    {path: 'cesta', component: Cesta},
    {path: 'login', component: Login},
    {path: 'pesquisa', component: Pesquisa},
    {path: 'reenviarsenha', component: Reenviarsenha}
];
