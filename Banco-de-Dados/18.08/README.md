### Comandos para bercario:

```
create database bercario;
use bercario;
```

```
create table cidade (
    cod_cidade int primary key auto_increment,
    nome_cidade varchar(30),
    uf char(2)
);
```

```
create table especialidade (
    cod_especialidade int primary key auto_increment,
    nome_especialidade varchar(30)
);
```

```
create table mae (
    cod_mae int primary key auto_increment,
    nome_mae varchar(30),
    rua varchar(30),
    telefone varchar(11),
    bairro varchar(30),
    dt_nascimento date,
    cod_cidade int,
    foreign key (cod_cidade) references cidade(cod_cidade)
);
```

```
create table medico (
    cod_medico int primary key auto_increment,
    nome_medico varchar(30),
    crm int(20),
    telefone int(11),
    cod_especialidade int,
    foreign key (cod_especialidade) references especialidade(cod_especialidade)
);
```

```
create table bebe (
    cod_bebe int primary key auto_increment,
    nome_bebe varchar(30),
    dt_nasc date,
    peso float,
    altura float,
    cod_medico int,
    cod_mae int,
    foreign key (cod_medico) references medico(cod_medico),
    foreign key (cod_mae) references mae(cod_mae)
);
```

```
MariaDB [bercario]> show tables;
+--------------------+
| Tables_in_bercario |
+--------------------+
| bebe               |
| cidade             |
| especialidade      |
| mae                |
| medico             |
+--------------------+
5 rows in set (0.001 sec)

MariaDB [bercario]> desc bebe;
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| cod_bebe   | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_bebe  | varchar(30) | YES  |     | NULL    |                |
| dt_nasc    | date        | YES  |     | NULL    |                |
| peso       | float       | YES  |     | NULL    |                |
| altura     | float       | YES  |     | NULL    |                |
| cod_medico | int(11)     | YES  | MUL | NULL    |                |
| cod_mae    | int(11)     | YES  | MUL | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
7 rows in set (0.017 sec)

MariaDB [bercario]> desc cidade;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| cod_cidade  | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_cidade | varchar(30) | YES  |     | NULL    |                |
| uf          | char(2)     | YES  |     | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+
3 rows in set (0.015 sec)

MariaDB [bercario]> desc especialidade;
+--------------------+-------------+------+-----+---------+----------------+
| Field              | Type        | Null | Key | Default | Extra          |
+--------------------+-------------+------+-----+---------+----------------+
| cod_especialidade  | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_especialidade | varchar(30) | YES  |     | NULL    |                |
+--------------------+-------------+------+-----+---------+----------------+
2 rows in set (0.014 sec)

MariaDB [bercario]> desc mae;
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| cod_mae       | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_mae      | varchar(30) | YES  |     | NULL    |                |
| rua           | varchar(30) | YES  |     | NULL    |                |
| telefone      | varchar(11) | YES  |     | NULL    |                |
| bairro        | varchar(30) | YES  |     | NULL    |                |
| dt_nascimento | date        | YES  |     | NULL    |                |
| cod_cidade    | int(11)     | YES  | MUL | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+
7 rows in set (0.016 sec)

MariaDB [bercario]> desc medico;
+-------------------+-------------+------+-----+---------+----------------+
| Field             | Type        | Null | Key | Default | Extra          |
+-------------------+-------------+------+-----+---------+----------------+
| cod_medico        | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_medico       | varchar(30) | YES  |     | NULL    |                |
| crm               | int(20)     | YES  |     | NULL    |                |
| telefone          | int(11)     | YES  |     | NULL    |                |
| cod_especialidade | int(11)     | YES  | MUL | NULL    |                |
+-------------------+-------------+------+-----+---------+----------------+
5 rows in set (0.015 sec)

MariaDB [bercario]>
```

---
### Comandos para livraria
```
create database livraria;

use livraria;
```

```
	create table cidade (
    cod_cidade int primary key auto_increment,
    nome_cidade varchar(30),
    uf char(2)
);
```

```
create table editora (
    cod_editora int primary key auto_increment,
    nome_editora varchar(30),
    cod_cidade int,
    foreign key (cod_cidade) references cidade(cod_cidade)
);
```

```
create table autores (
    cod_autores int primary key auto_increment,
    nome_autor varchar(30)
);
```

```
create table livros (
    cod_livros int primary key auto_increment,
    titulo varchar(30),
    isbn varchar(13),
    edicao int,
    cod_editora int,
    foreign key (cod_editora) references editora(cod_editora)
);
```


```
create table autoria (
    cod_autores int,
    cod_livros int,
    primary key (cod_autores, cod_livros),
    foreign key (cod_autores) references autores(cod_autores),
    foreign key (cod_livros) references livros(cod_livros)
);
```

```
create table usuario (
    cod_usuario int primary key auto_increment,
    nome_usuario varchar(30),
    telefone int(11),
    cpf char(11)
);
```

```
create table emprestimo (
    cod_emprestimo int auto_increment,
    cod_livro int,
    cod_usuario int,
    dt_emprestimo date,
    dt_prevista date,
    dt_devolucao date,
    status varchar(10),
    primary key (cod_emprestimo, cod_livro, cod_usuario),
    foreign key (cod_livro) references livros(cod_livros),
    foreign key (cod_usuario) references usuario(cod_usuario)
);
```

```
MariaDB [livraria]> show tables;
+--------------------+
| Tables_in_livraria |
+--------------------+
| autores            |
| autoria            |
| cidade             |
| editora            |
| emprestimo         |
| livros             |
| usuario            |
+--------------------+
7 rows in set (0.001 sec)

MariaDB [livraria]> desc autores;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| cod_autores | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_autor  | varchar(30) | YES  |     | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+
2 rows in set (0.017 sec)

MariaDB [livraria]> desc autoria;
+-------------+---------+------+-----+---------+-------+
| Field       | Type    | Null | Key | Default | Extra |
+-------------+---------+------+-----+---------+-------+
| cod_autores | int(11) | NO   | PRI | NULL    |       |
| cod_livros  | int(11) | NO   | PRI | NULL    |       |
+-------------+---------+------+-----+---------+-------+
2 rows in set (0.016 sec)

MariaDB [livraria]> desc cidade;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| cod_cidade  | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_cidade | varchar(30) | YES  |     | NULL    |                |
| uf          | char(2)     | YES  |     | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+
3 rows in set (0.017 sec)

MariaDB [livraria]> desc editora;
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| cod_editora  | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_editora | varchar(30) | YES  |     | NULL    |                |
| cod_cidade   | int(11)     | YES  | MUL | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
3 rows in set (0.015 sec)

MariaDB [livraria]> desc emprestimo;
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| cod_emprestimo | int(11)     | NO   | PRI | NULL    | auto_increment |
| cod_livro      | int(11)     | NO   | PRI | NULL    |                |
| cod_usuario    | int(11)     | NO   | PRI | NULL    |                |
| dt_emprestimo  | date        | YES  |     | NULL    |                |
| dt_prevista    | date        | YES  |     | NULL    |                |
| dt_devolucao   | date        | YES  |     | NULL    |                |
| status         | varchar(10) | YES  |     | NULL    |                |
+----------------+-------------+------+-----+---------+----------------+
7 rows in set (0.016 sec)

MariaDB [livraria]> desc livros;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| cod_livros  | int(11)     | NO   | PRI | NULL    | auto_increment |
| titulo      | varchar(30) | YES  |     | NULL    |                |
| isbn        | varchar(13) | YES  |     | NULL    |                |
| edicao      | int(11)     | YES  |     | NULL    |                |
| cod_editora | int(11)     | YES  | MUL | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+
5 rows in set (0.016 sec)

MariaDB [livraria]> desc usuario;
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| cod_usuario  | int(11)     | NO   | PRI | NULL    | auto_increment |
| nome_usuario | varchar(30) | YES  |     | NULL    |                |
| telefone     | int(11)     | YES  |     | NULL    |                |
| cpf          | char(11)    | YES  |     | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
4 rows in set (0.017 sec)
```