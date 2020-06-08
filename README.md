# MedicosDeRua

Aplicação desenvolvida para uma ONG de apoio a pessoas em situação de rua. A aplicação surgiu da necessidade de digitalização de formulários de Anamnese inicial e de retorno. Nela, o usuário pode cadastrar outros colaboradores com seu respectivo papel dentro da organização, cadastrar/visualizar formulários de Anamnese incial, cadastrar/visualizar formulários de retorno, cadastrar/visualizar ações criadas pelos Tutores.  
O Frontend da aplicação foi desenvolvido em angular, com uma API escrita em Nodejs e persistência em MongoDB.  

  
![GIF]('./../MedicosDeRua/flow.gif)


## Rodando a aplicação

Com o Docker instalado em sua máquina: https://www.docker.com/get-started

No diretório raiz do seu projeto, execute: 
* `docker-compose build`
* `docker-compose up`
  
Em seguida, basta acessar o `http://localhost:90`

Ps: Para mudar a porta em localhost conectada ao nginx da aplicação, basta mudar a linha 14 do arquivo `docker-compose.yml`:
* `<porta-desejada>:80`

A api estará disponível em `http://localhost:3333`. O Mongo estará disponível no endereço `http://localhost:27017`. Para visualizar o estado do banco, você pode utilizar uma UI como o MongoDB Compass Community ou Robo 3T apontando para o `localhost:27017` (porta padrão do MongoDB).

#### Logs

Para acessar os logs pelo Graylog, acesse: `http://localhost:9000`

## Desenvolvedores
* Marcos Cesar [Github](https://github.com/Marcoozvn)
* Jonathan Neves [Github](https://github.com/jenves)