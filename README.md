# api-node


## Para rodar o projeto será necessário

1. Criar um arquivo chamado .env no diretório principal com seguinte conteúdo
PORT="5001"

2.  Para instalar as as bibliotecas:

```shell
   $ npm install
```

3. Para rodar o ambiente localmente, você precisa já estar com o env de DEV configurado rode o diretório do projeto, execute:

```shell
   $ npm start
```

4. Ter o mysql instalado na máquina e algum programa para gerencimento como DBeaver, MysqlWorkBench

5. SCRIPT PARA CRIAÇÃO DA TABELA DE BANCO DE DADOS

```
CREATE DATABASE test_db;
```

```
CREATE TABLE `Users` (
  `id` int NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
```

```
INSERT INTO `Users` VALUES (1,'Cesar Peres','xxx@gmail.com','123456','2022-04-22 00:00:00'),(2,'Cesar Martins','xxxx@gmail.com','123456','2022-04-22 00:00:00');
```