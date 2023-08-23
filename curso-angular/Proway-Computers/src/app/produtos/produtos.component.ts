import { Component } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  constructor(private produtosService: ProdutosService){}

  produtos:IProduto[] | undefined;



  ngOnInit(): void{
    this.produtos = this.produtosService.getAll();
  }

}
