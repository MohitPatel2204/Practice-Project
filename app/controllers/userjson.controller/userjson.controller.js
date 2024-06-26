const addUser = require("../../../services/userjson/addUser");
const getData = require("../../../services/userjson/getData");
const getUser = require("../../../services/userjson/getUser");
const isEmpty = require("../../../services/userjson/isEmpty");

const userjson = ((req, res)=>{
	try
	{
		let users = getData();
		delete users.index;
		res.render("userjson/displayAllUser", {"users" : users});
	}
	catch(error)
	{
		res.send(error);
	}
})

const userjsonDisplay = ((req, res)=>{
	if(req.query["sbt"] == "view" && req.query["userid"]>=0)
	{
		try
		{
			let result = getUser(req.query["userid"])
			res.render("userjson/displayUser", {"user" : result})
		}
		catch(error)
		{
			res.send(error);
		}
	}
	else
	{
		res.send("Request is invalid")
	}
})

const userAddGet = ((req, res)=>{
	res.render("userjson/adduser", {msg: ""})
	res.end();
})

const userAddPost = ((req, res)=>{
	let error = isEmpty(req.body)
	if(error==true)
	{
		try{
			if(addUser(req.body))
			{
				req.method = "GET";
				res.redirect("/userjson");
			}
		}
		catch(error)
		{
			res.end(error);
		}
	}
	else
	{
		res.render('userjson/adduser', {msg: "Data is not valid"})
	}
})


module.exports = {
	userjson,
	userjsonDisplay,
	userAddGet,
	userAddPost,
};