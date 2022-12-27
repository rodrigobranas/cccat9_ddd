export default class Code {
	value: string;

	constructor (sequence: number, date: Date) {
		const year = date.getFullYear();
		this.value = `${year}${new String(sequence)}`;
	}
}
