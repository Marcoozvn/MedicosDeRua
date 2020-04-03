import { NgModule, LOCALE_ID } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        LayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule 
    ],providers:[{
        provide: LOCALE_ID, useValue: 'pt-BR'
    }],
    exports: [
        CommonModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        LayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule 
    ]
})

export class SharedModule { }
