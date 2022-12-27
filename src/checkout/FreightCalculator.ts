import Item from "./Item";

export default class FreightCalculator {
	static calculate (items: Item[]) {
		let total = 0;
		for (const item of items) {
			total += item.quantity * 10;
		}
		return total;
	}
}
