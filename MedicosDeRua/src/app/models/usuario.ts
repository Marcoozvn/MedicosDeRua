export default class Usuario {
  public nome: string;
  public login: string;
  public password: string;
  public papel: string;

  constructor(nome: string, login: string, password: string, papel: string) {
    this.nome = nome;
    this.login = login;
    this.password = password;
    this.papel = papel;
  }
}