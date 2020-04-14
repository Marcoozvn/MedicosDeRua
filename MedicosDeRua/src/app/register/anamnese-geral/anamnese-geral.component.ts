import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-anamnese-geral',
  templateUrl: './anamnese-geral.component.html',
  styleUrls: ['./anamnese-geral.component.scss']
})
export class AnamneseGeralComponent implements OnInit {

  anamneseForm: any;
  docsPessoais = ['RG', 'CPF', 'Cart.Trab', 'CNH', 'Cert.Nasc', 'Cert.Cas'];
  drogas = [{ nome: 'Cocaína' }, { nome: 'Maconha' }, { nome: 'LSD' }, { nome: 'Ecstasy' }, { nome: 'Lança perfume' }];
  servicos = ['FAS', 'CREAS', 'Albergue', 'Centro Pop', 'CRAS', 'Internamento', 'CAPS']
  sintomas = ['Dor', 'Astenia', 'Náuseas', 'Diarreia', 'Edema', 'Lesões cutâneas', 'Prurido', 'Febre', 'Vertigem', 'Vômito', 'Constipação', 'Hemorragia', 'Dor de Dente']
  doencas = ['HAS', 'AVC', 'DM', 'ICC', 'IAM', 'IRC', 'HIPOTIREOIDE', 'DPOC', 'HEPATITE', 'HIV', 'TB', 'DST', 'CÂNCER']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.anamneseForm = this.fb.group({
      paciente: this.fb.group({
        nome: ['', Validators.required],
        idade: '',
        dataNascimento: '',
        religiao: '',
        etnia: '',
        sexo: '',
        orientacao: '',
        situacaoConjugal: '',
        escolaridade: '',
        qualCursoTec: '',
        qualCursoSup: '',
        cidade: '',
        ultimaCidade: '',
        temDocsPessoais: '',
        documentosPessoais: this.fb.group({
          RG: [false],
          CPF: [false],
          'Cart.Trab': [false],
          CNH: [false],
          'Cert.Nasc': [false],
          'Cert.Cas': [false]
        }),
        contato: ''
      }),
      perfilSocioeconomico: this.fb.group({
        tempoDeRua: '',
        ondevive: '',
        nomeDarua: '',
        outrosRua: '',
        comQuemEstaNaRua: '',
        outrosCompainha: '',
        seAcompanhado: this.fb.group({
          numeroAdultos: '',
          numeroCriancas: '',
          ondeFicam: '',
          estudam: ''
        }),
        parentesEmCuritiba: '',
        localidadeParentes: '',
        temContato: '',
        renda: '',
        carteiraAssinada: '',
        ocupacaoClt: ''
      }),
      substancias: this.fb.group({
        usoSubstancias: 'false',
        Alcool: this.fb.group({
          uso: false,
          tipoDeUso: { value: '', disabled: false },
          quantidade: '',
          frequencia: ''
        }),
        Cigarro: this.fb.group({
          uso: false,
          quantidade: '',
          tempoDeUso: ''
        }),
        Cocaína: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        Maconha: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        LSD: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        Ecstasy: this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
        'Lança perfume': this.fb.group({
          uso: false,
          tipoDeUso: '',
          quantidade: '',
          frequencia: ''
        }),
      }),
      sinaisVitais: this.fb.group({
        freqCardiaca: '',
        freqRespiratoria: '',
        pressaoArterial: '',
        sat: '',
        temperatura: ''
      }),
      avaliacaoNutricional: this.fb.group({
        responsavel: '',
        medidas: this.fb.group({
          hemienvergadura: '',
          alturaEstimada: '',
          alturaRelatada: '',
          pesoUsual: '',
          pesoAferido: '',
          imc: '',
          cintura: '',
          bracoDireito: ''
        }),
        problemasParaMastigar: '',
        deixaDeComer: '',
        naoCome: '',
        pesoPerdido: '',
        HAS: '',
        DM: '',
        problemasDigestivos: this.fb.group({
          Azia: '',
          Gases: '',
          Diarreia: '',
          Constipação: ''
        }),
        ultimaSemana: this.fb.group({
          fiqueiSemComer: '',
          diasSemComer: '',
          cozinhei: '',
          comoCozinhei: ''
        }),
        refeicoesOntem: '',
        tomouAguaOntem: '',
        fonteDaAgua: '',
        qualidadeAlimentacao: '',
        comoConsegueComida: '',
        alimentosComuns: '',
        alimentosDesejados: ''
      }),
      queixaPrincipal: this.fb.group({
        descricao: '',
        quantoTempo: '',
        quandoComecou: ''
      }),
      historiaMorbidaAtual: this.fb.group({
        sintoma: this.fb.group({
          Dor: [false],
          Astenia: [false],
          'Náuseas': [false],
          Diarreia: [false],
          Edema: [false],
          'Lesões cutâneas': [false],
          Prurido: [false],
          Febre: [false],
          Vertigem: [false],
          'Vômito': [false],
          'Constipação': [false],
          Hemorragia: [false],
          'Dor de Dente': [false]
        }),
        outros: '',
        detalhes: ''
      }),
      historiaMorbidaProgressa: this.fb.group({
        doenca: this.fb.group({
          HAS: [false],
          AVC: [false],
          DM: [false],
          ICC: [false],
          IAM: [false],
          IRC: [false],
          HIPOTIREOIDE: [false],
          DPOC: [false],
          HEPATITE: [false],
          HIV: [false],
          TB: [false],
          DST: [false],
          'CÂNCER': [false]
        }),
        doencasInfancia: '',
        convulsoes: '',
        internacoesOuCirugias: '',
        traumas: '',
        medContinuas: '',
        alergias: ''
      }),
      historiaMorbidaFamiliar: this.fb.group({
        mae: '',
        pai: '',
        irmaos: ''
      }),
      habitosDeVida: this.fb.group({
        atividadeFisica: '',
        qualAtividade: '',
        atividadeSexual: this.fb.group({
          protegida: '',
          desprotegida: '',
          parceiroUnico: '',
          multiplosParceiros: ''
        }),
        testeDst: ''
      }),
      historiaGinecologica: this.fb.group({
        ultimoExame: '',
        dum: '',
        idadeFertil: '',
        menopausa: '',
        cicloMenstrual: '',
        usoAnticoncepcional: '',
        ondeAcompanha: '',
        doacaoAnticoncepcional: '',
        qualAnticoncepcional: '',
        quantFilhos: '',
        vaginal: '',
        cesarea: '',
        abortos: '',
        complicParto: ''
      }),
      exameFisico: this.fb.group({
        estadoGeral: '',
        cabeçaEPescoço: '',
        cardiopulmonar: '',
        gastrintestinal: '',
        neurologico: '',
        dermatológico: '',
        geniturinário: '',
        outros: ''
      }),
      examesLaboratoriais: this.fb.group({
        
      })
    })
  }
  submitForm() {
    console.log('Form: ', this.anamneseForm.value);
  }

}
