<h1 align="center" id="top">Case 1 - Projeto Dog Hero (API): <img src="https://www.pngkey.com/png/full/67-675394_dog-walking-png-dog-walking.png" width="50"></h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#documentacao">Documentação</a> &#xa0; | &#xa0;
  <a href="#heroku">Deploy</a> &#xa0; | &#xa0;
  <a href="#desenvolvedor">Desenvolvedor</a> | &#xa0;
<a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
<a href="#testes">Testes</a> &#xa0; | &#xa0;
<a href="#comousar">Como Testar esta API</a>

</p>
<h2 id="sobre"> Sobre </h2>
- Case de back-End


 Projeto Dog Hero é uma API para agendamento de passeios para cachorros. 

<h2 id="documentacao"> Documentação API: </h2>

 ## Acesse a documentação aqui 👉 [ <img src="https://i.pinimg.com/originals/c1/ea/7e/c1ea7efd4baf038c15ed7c02d280d603.gif" width="70" align="center"> ](https://documenter.getpostman.com/view/18385085/UVsTr2vB)


<h2 id="heroku"> Deploy (Heroku): </h2>
[https://doghero-carver-case1.herokuapp.com/] 


<h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>

<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2>Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>


<h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>

- Typescript
- Node
- SQL
- MySQL
- Express
- Cors
- Dotenv
- Knex
- React
- Axios
- UUID
- Bcrypt
- Hash
- json
- jest


<h2 id="funcionalidades"> Funcionalidades:

* Cadastrar passeio;
* Iniciar passeio;
* Finalizar passeio;
* Mostrar tempo real do passeio;
* Retornar todos passeios com ou sem paginação;

<h2 id="testes"> Testes:

### Testes de creat (Cadastrar passeio)
 
    √ Erro que deve retornar quando um ou mais valores estã o vazios 
    √ Erro que deve retornar quando ano é anterior ao atual 
    √ Erro que deve retornar quando mês é anterior ao atual 
    √ Erro que deve retornar quando mês é anterior ao atual 
    √ Erro que deve retornar quando horário é diferente da duração 
    √ Certo quando todos parametros estão corretos 

###  Teste de show (Mostrar tempo real do passeio)
    √ Erro que deve retornar quando id está vazio 
    √ Erro que deve retornar quando id for invalido 
    √ Erro quando status PENDENTE 
    √ Erro quando status PASSEANDO 
    √ Certo quando todos parametros estão corretos 

###  Teste de startWalk (Iniciar passeio)
    √ Erro que deve retornar quando um ou mais valores estão vazios 
    √ Erro que deve retornar quando passeio ja tiver sido finalizado 
    √ Erro que deve retornar quando passeio ja tiver sido iniciado 
    √ Erro que deve retornar quando id for invalido 
    √ Certo quando todos parametros estão corretos 

###  Teste de finishWalk (Finalizar passeio)
    √ Erro que deve retornar quando um ou mais valores estão vazios 
    √ Erro que deve retornar quando passeio ja tiver sido finalizado 
    √ Erro que deve retornar quando passeio ainda não tiver sido iniciado 
    √ Erro que deve retornar quando id for invalido 
    √ Erro que deve retornar quando hora final for menor que inicial 
    √ Erro que deve retornar quando hora for igual, mas minuto final for menor ou igual que inicial 
    √ Certo quando todos parametros estão corretos 

###  Teste de walks (Retornar todos passeios com ou sem paginação)
    √ Erro que deve retornar quando for enviado paginação e número da página for zero 
    √ Erro que deve retornar quando for enviado quantidade de itens por pagina e número da página for vaziu 
    √ Erro que deve retornar quando for enviado numero de pagina e itens por página for vaziu 
    √ Certo quando todos parametros são enviados para paginação
    √ Certo quando nenhum parametro e enviado trazendo todos passeios

<h2 id="comousar"> Como usar </h2>

Teste o código pelo postman ou ferramenta de sua preferencia, seguindo a documentação <a href="#documentacao">AQUI</a> ou pelo seu computador assim:
- Clone o código para seu computador.
-  Junto dos arquivos clonados crie outro arquivo com nome .env (para acessar seu banco de dados).
  
   Ex.: 
   
        DB_USER = seu_usuario
  
        DB_PASSWORD = sua_senha
  
        DB_HOST = seu_host
  
        DB_PORT = sua_posrt
  
        DB_DATABASE_NAME = nome_database
  
- Dentro da pasta clonada, execute no terminal os comandos:
->  ```npm install``` (para instalar as dependencias).
->  ```npm migrations``` (para criar a polular tabela).
->  ```npm run test``` (para rodar os tests dos enpoints).
-> ```npm run dev```  ou ```npm run start``` (para rodar o servidor e utilizar os endpoints).

- Utilize o arquivo request.rest para testar as funcionalidades ou pelo postman trocando o link pelo seu localhost mantendo os endpoints, seguindo  documentação do postman <a href="#documentacao">AQUI</a>.
- Exemplo:
de: https://doghero-carver-case1.herokuapp.com/dogwalker/creat
para: http://localhost:3003/dogwalker/creat


 <div align="center"><a href="#top">Voltar para o topo</a></div>

   
