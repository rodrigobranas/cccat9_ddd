import express from "express";
import AddCard from "./AddCard";
import BoardRepository from "./BoardRepository";
const app = express();

app.post("/boards/:idBoard/columns/:columnName/cards", async function (req: any, res: any) {
	const boardRepository = new BoardRepository();
	const addCard = new AddCard(boardRepository);
	const input = {
		idBoard: req.params.idBoard,
		columnName: req.params.columnName,
		title: req.body.title
	}
	await addCard.execute(input);
	res.end();
});

app.listen(3000);