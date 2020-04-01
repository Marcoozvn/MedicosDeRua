import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { RetornoService } from './retorno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { merge } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-retorno',
  templateUrl: './retorno.component.html',
  styleUrls: ['./retorno.component.scss']
})
export class RetornoComponent implements OnInit {

  private dataSource: MatTableDataSource<any>;
  private displayedColumns: string[] = ['prontuario', 'nome', 'idade', 'data', 'action'];
  private isLoadingResults = true;
  private totalItems: number;

  constructor(private retornoService: RetornoService, private route: Router, private activatedRoute: ActivatedRoute) { }

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    this.fetchItems();
  }

  handleChangePage(pageEvent: PageEvent) {
    this.fetchItems(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

  fetchItems(page: number = 1, perPage: number = 5) {
    this.retornoService.getAll(page, perPage).subscribe( res => {
      this.dataSource = new MatTableDataSource(res.body);
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
      this.totalItems = res.headers.get('x-total-count');
    });
  }

  redirectToReturnForm(){
    this.route.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}
