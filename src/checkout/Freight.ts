import Item from "./Item";

export default class Freight {
	value = 0;

	constructor (readonly items: Item[]) {
		let value = 0;
		for (const item of items) {
			value += item.quantity * 10;
		}
	}
}