import Card from "./Card";

// AR - Entity
export default class Column {
	cardsId: number[]; // na ordem que eles aparecem na tela

	constructor (readonly name: string) {
		this.cardsId = [];
	}

	addCard (cardId: number) {
		this.cardsId.push(cardId);
	}
}
