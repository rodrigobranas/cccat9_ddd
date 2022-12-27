import Column from "./Column";

// AR - Entity
export default class Board {
	columnsId: number[];

	constructor (readonly name: string) {
		this.columnsId = [];
	}

	
}
