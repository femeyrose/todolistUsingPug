const mysql = require('mysql2');
const connectionStr = require('../config/dbConfig');


let todoModel = {};

todoModel.getAll = () => {
	// connection code to db
	return todoModel;
};


todoModel.addItem = (todoData) => {
	return new Promise(async (resolve, reject) => {
		// connection code to db
		const connection = mysql.createConnection(connectionStr);
    console.log(connectionStr);
    
		const queryStr = `INSERT INTO projectdb.todo (item) VALUES ('${todoData.item}');`;
		connection.query(queryStr, function (err, results, fields) {
			// console.log(`error:${err}`)
			// console.log(`results:${results}`)
			// console.log(`fields:${fields}`)
			if (err) {
				console.log(err)
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

todoModel.deleteItem=(todoData) => {
	return new Promise(async (resolve, reject) => {
		// connection code to db
		const connection = mysql.createConnection(connectionStr);
        console.log(connectionStr);
    
		const queryStr = `DELETE FROM projectdb.todo WHERE (id = ${todoData.id});;`
		
		connection.query(queryStr, function (err, results, fields) {
		if (err) {
				console.log(err)
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};


todoModel.getItems = () => {
	return new Promise((resolve, reject) => {
		// connection code to db
    const connection = mysql.createConnection(connectionStr);
    console.log(connectionStr);
    const queryStr = `SELECT item FROM projectdb.todo;`;
		connection.query(queryStr, function (err, results, fields) {
			// console.log(`error:${err}`)
			console.log(`results:${results}`)
			// console.log(`fields:${fields}`)
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
		
	});
};


module.exports = todoModel