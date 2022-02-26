# Tecnologias utilizadas

+ Java
+ Spring
+ JPA Repository
+ Swaggger
+ Heroku
+ MVC

## Casos de Uso

+ Autenticação é integrada com o Auth do Firebase.  
+ Um cliente só pode adicionar produtos a ele mesmo.
+ Quando um produto muda de preço também altera seu valor nos carrinhos.
+ Usuário admin pode remover qualquer produto deletando assim dos carrinhos.
+ Produtos que foram comprados pertencem inalterados.
+ Tratamento de erros.

## Documentação

Para ver detalhes de endpoints, rotas, parâmetrizações(Path, Body e Query) acesse a [Documentação](https://milk-holanda.herokuapp.com/swagger-ui.html#/) da aplicação feita com [Swagger](https://swagger.io/) para visualizar como foi feito o desenvolvimento.

![image](https://user-images.githubusercontent.com/63071007/155847272-263c9abc-55e8-427f-927e-a5e93fc21bff.png)

## Modelo Entidade Relacionamento (MER) 

Representação visual das tabelas gerada pelo ERD(entity relationship diagram) do Postgresql. 

![image](https://user-images.githubusercontent.com/63071007/155846734-4dd55f36-ae17-458a-bdda-5963a38fb418.png)

