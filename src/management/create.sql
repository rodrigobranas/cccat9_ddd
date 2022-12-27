drop table cccat9.card;
drop table cccat9.column;
drop table cccat9.board;

create table cccat9.board (
	id_board serial primary key,
	name text
);

create table cccat9.column (
	id_column serial primary key,
	id_board integer references cccat9.board (id_board),
	name text
);

create table cccat9.card (
	id_card serial primary key,
	id_column integer references cccat9.column (id_column),
	title text,
	description text
);


insert into cccat9.board (id_board, name) values (1, 'Gerador de Relatórios');
insert into cccat9.column (id_column, id_board, name) values (1, 1, 'Todo');
insert into cccat9.column (id_column, id_board, name) values (2, 1, 'Doing');
insert into cccat9.column (id_column, id_board, name) values (3, 1, 'Done');
insert into cccat9.card (id_card, id_column, title, description) values (1, 1, 'Criar relatório de matrícula', '...');