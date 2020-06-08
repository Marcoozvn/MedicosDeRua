export default class Acao {
  titulo: string;
  dataInicio: Date;
  dataFinal: Date;

  constructor(titulo: string, dataInicio: Date, dataFinal: Date) {
    this.titulo = titulo;
    this.dataInicio = dataInicio;
    this.dataFinal = dataFinal;
  }
}