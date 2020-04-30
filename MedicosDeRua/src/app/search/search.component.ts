import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private searchService: SearchService,
              private userService: UserService) {
    this.searchForm = this.formBuilder.group({
      input: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  search() {
    this.searchService.findUsers(this.searchForm.value.type, this.searchForm.value.input).subscribe(
      res => {
        this.userService.setUsers(res);
        this.router.navigate(['users'], { relativeTo: this.activatedRoute });
      }
    )
  }

}
