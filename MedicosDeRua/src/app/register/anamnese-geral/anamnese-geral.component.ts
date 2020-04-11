import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-anamnese-geral',
  templateUrl: './anamnese-geral.component.html',
  styleUrls: ['./anamnese-geral.component.scss']
})
export class AnamneseGeralComponent implements OnInit {

  anamneseForm: any;
  docsPessoais = [] = ['RG', 'CPF', 'Cart.Trab', 'CNH', 'Cert.Nasc', 'Cert.Cas']
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.anamneseForm = this.fb.group({
      
    })
  }

}
