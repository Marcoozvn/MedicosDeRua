import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RetornoService } from './retorno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retorno',
  templateUrl: './retorno.component.html',
  styleUrls: ['./retorno.component.scss']
})
export class RetornoComponent implements OnInit {

  mock = [
    {prontuario: 1, nome: 'Marcos Vinicius Rodrigues Cesar', idade: 22, data: '01/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 2, nome: 'Julia Macionilia Teixeira Balbys', idade: 22, data: '02/03/1997'},
    {prontuario: 3, nome: 'Alexandre José Oliveira Cesar', idade: 22, data: '07/01/1997'}
  ]

  teste = [];
  dataSource = new MatTableDataSource(this.mock);

  displayedColumns: string[] = ['prontuario', 'nome', 'idade', 'data', 'action'];

  constructor(private retornoService: RetornoService, private route: Router) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.retornoService.getAll().subscribe( res => console.log(res));
  }

  redirectToReturnForm(){
    this.route.navigate(['/form-retorno']);
  }

}
