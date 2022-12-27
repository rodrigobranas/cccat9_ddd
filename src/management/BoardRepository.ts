import Board from "./Board";
import Card from "./Card";
import Column from "./Column";
import Connection from "./Connection";

export default class BoardRepository {
	
	constructor (readonly connection: Connection) {
	}

	async getBoard (idBoard: number) {
		const [boardData] = await this.connection.query("select * from cccat9.board where id_board = $1", [idBoard]);
		const board = new Board(boardData.name);
		const columnsData = await this.connection.query("select * from cccat9.column where id_board = $1", [idBoard]);
		for (const columnData of columnsData) {
			const column = new Column(columnData.name);
			board.addColumn(columnData.name);
			const cardsData = await this.connection.query("select id_card from cccat9.card where id_column = $1", [columnData.id_column]);
			for (const cardData of cardsData) {
				column.addCard(cardData.id_card);
			}
		}
		return board;
	}

	async updateBoard (board: Board) {
	}
}
