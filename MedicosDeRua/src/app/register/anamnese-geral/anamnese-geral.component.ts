import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared/form.service';
import { Router } from '@angular/router';
import { ListUsersService } from 'src/app/list-users/list-users.service';


@Component({
  selector: 'app-anamnese-geral',
  templateUrl: './anamnese-geral.component.html',
  styleUrls: ['./anamnese-geral.component.scss']
})
export class AnamneseGeralComponent implements OnInit {

  form: any;
  anamneseForm: any;
  onlyView: boolean = false;
  
  docsPessoais = ['RG', 'CPF', 'Carteira de Trabalho', 'CNH', 'Certidão de Nascimento', 'Certidão de Casamento'];
  drogas = [{ nome: 'Cocaína' }, { nome: 'Maconha' }, { nome: 'LSD' }, { nome: 'Ecstasy' }, { nome: 'Lança perfume' }];
  servicos = ['FAS', 'CREAS', 'Albergue', 'Centro Pop', 'CRAS', 'Internamento', 'CAPS']
  sintomas = ['Dor', 'Astenia', 'Náuseas', 'Diarreia', 'Edema', 'Lesões cutâneas', 'Prurido', 'Febre', 'Vertigem', 'Vômito', 'Constipação', 'Hemorragia', 'Dor de Dente']
  doencas = ['HAS', 'AVC', 'DM', 'ICC', 'IAM', 'IRC', 'Hipotireoide', 'DPOC', 'Hepatite', 'HIV', 'TB', 'DST', 'Câncer']
  materiais = ['Soro', 'Seringa 20 ml', 'Agulha', 'Esponja', 'Kit curativo', 'Gaze', 'Cobertura', 'Atadura', 'Micropore', 'Esparadrapo']
  exames = [
    { nome: 'Destro' },
    { nome: 'Hemograma' },
    { nome: 'Parcial de Urina' },
    { nome: 'Ureia + Creatina' },
    { nome: 'TGO + TGP' },
    { nome: 'Bilirrubinas' },
    { nome: 'Lipidograma' },
    { nome: 'Hb glicada' },
    { nome: 'Sífilis' },
    { nome: 'HIV' },
    { nome: 'Hepatite B' },
    { nome: 'Hepatite C' },
    { nome: 'Gravidez' }]

  constructor(private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private listUsersService: ListUsersService) {
    this.listUsersService.selectUser(null);
    if (this.router.getCurrentNavigation().extras.state) {
      this.form = this.router.getCurrentNavigation().extras.state;

      if (this.router.getCurrentNavigation().extras.state.length > 1) {
        this.onlyView = true;
      }
    }

  }

  ngOnInit() {
    this.anamneseForm = this.fb.group({
      paciente: this.fb.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.minLength(11)],
        dataNascimento: '',
        religiao: '',
        etnia: '',
        sexo: '',
        orientacao: '',
        situacaoConjugal: '',
        escolaridade: '',
        cidade: '',
        ultimaCidade: '',
        temDocsPessoais: '',
        documentosPessoais: this.fb.group({
          RG: [false],
          CPF: [false],
          'Carteira de Trabalho': [false],
          CNH: [false],
          'Certidão de Nascimento': [false],
          'Certidão de Casamento': [false]
        }),
        contato: ''
      }),
      perfilSocioeconomico: this.fb.group({
        tempoDeRua: '',
        ondevive: '',
        nomeDarua: '',
        outrosRua: '',
        comQuemEstaNaRua: '',
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
      perfilPsicosocial: this.fb.group({
        motivoRua: this.fb.group({
          usoSubstancias: '',
          conflitoFamiliar: '',
          desemprego: '',
          outrosMotivos: ''
        }),
        usoSubstancias: this.fb.group({
          uso: 'false',
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
          abstinente: '',
          qualSubstancia: '',
          tempoAbstinencia: '',
          tratou: '',
          comoTratou: '',
        }),
        problemaMental: this.fb.group({
          possui: '',
          Depressão: '',
          Esquizofrenia: '',
          'Transtorno do Pânico': '',
          Outro: '',
          tratou: '',
          comoTratou: ''
        }),
        atendidoPor: '',
        servicos: this.fb.group({
          FAS: this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          }),
          CREAS: this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          }),
          Albergue: this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          }),
          'Centro Pop': this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          }),
          CRAS: this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          }),
          Internamento: this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          }),
          CAPS: this.fb.group({
            usou: '',
            qual: '',
            onde: ''
          })
        }),
        ondeBuscaAjuda: '',
        comoPodemosAjudar: ''

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
      historiaMorbidaPregressa: this.fb.group({
        HAS: this.fb.group({
          possui: false,
          duracao: ''
        }),
        AVC: this.fb.group({
          possui: false,
          duracao: ''
        }),
        DM: this.fb.group({
          possui: false,
          duracao: ''
        }),
        ICC: this.fb.group({
          possui: false,
          duracao: ''
        }),
        IAM: this.fb.group({
          possui: false,
          duracao: ''
        }),
        IRC: this.fb.group({
          possui: false,
          duracao: ''
        }),
        Hipotireoide: this.fb.group({
          possui: false,
          duracao: ''
        }),
        DPOC: this.fb.group({
          possui: false,
          duracao: ''
        }),
        Hepatite: this.fb.group({
          possui: false,
          duracao: ''
        }),
        HIV: this.fb.group({
          possui: false,
          duracao: ''
        }),
        TB: this.fb.group({
          possui: false,
          duracao: ''
        }),
        DST: this.fb.group({
          possui: false,
          duracao: ''
        }),
        Câncer: this.fb.group({
          possui: false,
          duracao: ''
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
          parceiroUnico: '',
        }),
        testeDst: ''
      }),
      historiaGinecologica: this.fb.group({
        ultimoExame: '',
        dum: '',
        fertilidade: '',
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
        Destro: [false],
        Hemograma: [false],
        'Parcial de Urina': [false],
        'Ureia + Creatina': [false],
        'TGO + TGP': [false],
        Bilirrubinas: [false],
        Lipidograma: [false],
        'Hb glicada': [false],
        Sífilis: [false],
        HIV: [false],
        'Hepatite B': [false],
        'Hepatite C': [false],
        Gravidez: [false],
        Outros: ''
      }),
      procedimentosEnfermagem: this.fb.group({
        'Soro': [false],
        'Seringa 20 ml': [false],
        Agulha: [false],
        Esponja: [false],
        'Kit curativo': [false],
        Gaze: [false],
        Cobertura: [false],
        Atadura: [false],
        Micropore: [false],
        Esparadrapo: [false],
        outros: '',
        informacoesAdicionais: this.fb.group({
          motivo: '',
          localizacao: '',
          descricao: '',
          responsavel: ''
        })
      }),
      medicacaoIntramuscular: this.fb.group({
        medicamentoEdose: '',
        local: '',
        lado: '',
        prescritor: '',
        responsavel: ''
      }),
      medicamentos: this.fb.group({
        sabiaDaPatologia: '',
        jaUsouMedicacao: '',
        houveNecessida: '',
        foiExplicadoUso: '',
        motivo: '',
        dispensado: '',
        medicacao: '',
        paAntesMedicacao: '',
        paDepoisMedicacao: ''
      }),
      encaminhamentosExternos: this.fb.group({
        encUPA: '',
        encUBS: '',
        encCAPS: '',
        outro: '',
        assPaciente: '',
        assAcademico: '',
        assCarimboMedico: '',
        assPacienteResp: ''
      })
    });

    if (this.form) {
      this.initializeFormValues();
    }
    if (this.onlyView) {
      this.anamneseForm.disable();
    }

  }

  initializeFormValues() {
    this.anamneseForm.patchValue(this.form);
    this.anamneseForm.get('paciente').get('nome').disable();
  }

  submitForm() {
    if (this.form) {
      this.anamneseForm.value.paciente = { ...this.anamneseForm.value.paciente, nome: this.form.paciente.nome };
      this.formService.updateForm('anamnese', this.anamneseForm.value, this.form._id).subscribe(
        data => {
          alert('Formulário atualizado com sucesso');
          this.router.navigate(['/app']);
        },
        error => alert('Ocorreu um erro ' + error)
      );
    } else {
      this.formService.saveForm('anamnese', this.anamneseForm.value).subscribe(
        data => {
          alert('Formulário salvo com sucesso');
          this.router.navigate(['/app']);
        },
        error => alert('Ocorreu um erro ' + error));
    }
  }

}
