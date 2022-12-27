import BoardRepository from "./BoardRepository";

export default class AddCard {

	constructor (readonly boardRepository: BoardRepository) {

	}

	async execute (input: Input) {
		const board = await this.boardRepository.getBoard(input.idBoard);
		board.addCardToColumn(input.columnName, input.title);
		await this.boardRepository.updateBoard(board);
	}
}

type Input = {
	idBoard: number,
	columnName: string,
	title: string
}