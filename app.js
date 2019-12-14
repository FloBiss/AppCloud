const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const URL= 'mongodb+srv://FlorentBiss:Floby.hokcey1002@cluster0-nitmr.mongodb.net/test?retryWrites=true';
const DATABASE="Hepatitis";

var app=Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

var database,bios,indis,dispat;

app.listen(3000, () => {
	MongoClient.connect(URL, {useNewUrlParser: true}, (error,client) => {
		if(error){
			throw error;
		}
		database=client.db(DATABASE);
		bios=database.collection("Bios");
		indis=database.collection("Indis");
		dispat=database.collection("Dispat");
		console.log("Connected to`" + DATABASE + "`!");
	});
});

app.get("/hepatitis/exams", async(request, response) =>{
	try{
		var id = (request.query.id=== undefined ? "" : parseInt(request.query.id));
		indis.find({"m_id": id, "tbil":0}).toArray((error,result) => {
			if(error) {
				return response.status(500).send(error);
			}
			var ans = "False";
			if(result.length > 0){
				ans ="True";
			}
			response.send(ans);
			
		});
	}
	catch(e){
		console.error(e);
		process.exit(1);
	}
});

app.get("/hepatitis/type", async(request,response) =>{
	try{
		var id = (request.query.id=== undefined ? "" : parseInt(request.query.id));
		
		indis.find({"m_id" : id, "ztt":{$gt:0}, "ttt" : {$gt : 0}}).toArray((error,result) => {
		if(error) {
			return response.status(500).send(error);
		}
		var ans = "False";
		if(result.length > 0){
			ans = "True";
		}
		response.send(ans);
	});
	}
	catch(e){
		console.error(e);
		process.exit(1);
	}
});

app.get("/fibrose", async(request,response) =>{
	try{
		var id = (request.query.id=== undefined ? "" : parseInt(request.query.id));
		
		bios.find({"m_id" : id}).toArray((error,result) => {
		if(error) {
			return response.status(500).send(error);
		}
		
		response.send(result);
	});
	}
	catch(e){
		console.error(e);
		process.exit(1);
	}
});

