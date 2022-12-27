export default class Status {
	value: string;

	constructor () {
		this.value = "waiting_payment";
	}

	cancel () {
		this.value = "cancelled";
	}
}
