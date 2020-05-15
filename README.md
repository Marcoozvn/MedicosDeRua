# MedicosDeRua

Aplicação desenvolvida para uma ONG de apoio a pessoas em situação de rua. A aplicação surgiu da necessidade de digitalização de formulários de Anamnese inicial e de retorno. Nela, o usuário pode cadastrar outros colaboradores com seu respectivo papel dentro da organização, cadastrar/visualizar formulários de Anamnese incial, cadastrar/visualizar formulários de retorno, cadastrar/visualizar ações criadas pelos Tutores.  
O Frontend da aplicação foi desenvolvido em angular, com uma API escrita em Nodejs e persistência em MongoDB.  

  
![GIF]('./../MedicosDeRua/flow.gif)


## Rodando o Frontend da aplicação

### Com Docker

Com o Docker instalado em sua máquina: https://www.docker.com/get-started

No mesmo diretório do arquivo Dockerfile, execute: 
* `docker build --rm -t medicos-de-rua:latest .`
* `docker run --rm -d -p 90:80/tcp medicos-de-rua:latest`
  
Em seguida, basta acessar o `http://localhost:90`

### Sem Docker

1. Cerfifique-se que sua máquina possui o Nodejs instalado e o MongoDB server rodando. 
2. No diretório do projeto, execute `npm i`
3. Em seguida, execute `ng serve`
4. Acesse a aplicação no endereço `http://localhost:4200`

## Desenvolvedores
* Marcos Cesar [Github](https://github.com/Marcoozvn)
* Jonathan Neves [Github](https://github.com/jenves)