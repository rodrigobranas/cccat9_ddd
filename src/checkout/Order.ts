import Code from "./Code";
import Cpf from "./Cpf";
import Freight from "./Freight";
import Item from "./Item";
import Product from "./Product";
import Status from "./Status";

// AR - Entity
export default class Order {
	code: Code;
	items: Item[];
	status: Status;
	cpf: Cpf;

	constructor (readonly sequence: number, readonly date: Date, cpf: string) {
		this.code = new Code(sequence, date);
		this.items = [];
		this.cpf = new Cpf(cpf);
		this.status = new Status();
	}

	addItem (product: Product, quantity: number) {
		this.items.push(new Item(product.idProduct, product.price, quantity));
	}

	cancel () {
		this.status.cancel();
	}

	getTotal () {
		let total = 0;
		for (const item of this.items) {
			total += item.price;
		}
		const freight = new Freight(this.items);
		total += freight.value;
		return total;
	}
}