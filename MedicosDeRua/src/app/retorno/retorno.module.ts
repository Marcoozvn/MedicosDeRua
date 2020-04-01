import { NgModule } from '@angular/core';

import { RetornoComponent } from './retorno.component';
import { FormularioRetornoComponent } from './formulario-retorno/formulario-retorno/formulario-retorno.component';

import { RetornoService } from './retorno.service';

import { SharedModule } from '../shared/shared.module';

import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: FormularioRetornoComponent }
]

@NgModule({
    imports: [SharedModule,  RouterModule.forChild(ROUTES)],
    exports: [RetornoComponent, FormularioRetornoComponent],
    declarations: [RetornoComponent,FormularioRetornoComponent],
    providers: [RetornoService],
})

export class RetornoModule { }
