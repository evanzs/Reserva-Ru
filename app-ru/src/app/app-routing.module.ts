import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';


const routes: Routes = [

  {path: 'cadastroPessoa',component:CadastroPessoaComponent},
  {path: '' ,pathMatch:'full', redirectTo:'cadastroPessoa'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
