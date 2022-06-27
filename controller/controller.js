import Service from '../service/service.js';
import { v4 as uuidv4 } from 'uuid';
const addItem = async (req, res, next) => {
	const Item = {
		name: req.body.name,
		description: req.body.description,
		figure: req.body.figure,
	};
	const Photo = {
		name: req.file.originalname,
		SRC: req.file.path,
		size: req.file.size,
	}
	try {
			const dataItem = await Service.addItem(Item)
			const dataPhoto = await Service.addPhoto(Photo);
			res.send(`<h1>Данные успешно отправлены</h1><a href='/products.html'>Вернуться на страницу с продуктами</a>`);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getItems = async (req, res, next) => {
	try {
			const data = await Service.getItems();
			res.send(data)
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default {
	addItem,
	getItems
}
