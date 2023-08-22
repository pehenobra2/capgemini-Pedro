import { NgModule } from '@angular/core';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { RouterModule, Routes } from '@angular/router';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNEncontradaComponent } from './pagina-n-encontrada/pagina-n-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';


const routes: Routes = [
  { path: "primeira-pagina", component: PrimeiraPaginaComponent },
  { path: "segunda-pagina", component: SegundaPaginaComponent},
  { path: "", redirectTo: "primeira-pagina", pathMatch: "full"},
  { path: "pagina-com-parametros/:id", component:PaginaComParametrosComponent},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: "**", component: PaginaNEncontradaComponent}
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
