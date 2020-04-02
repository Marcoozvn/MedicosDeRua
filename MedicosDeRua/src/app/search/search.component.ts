import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['users'], { relativeTo: this.activatedRoute });
  }

}
