var User = require('../../models/user');


module.exports = {
	anyname: function(req, res) {
		res.render('signup');
	},

	post: function(req, res) {
		var data = req.body;	
	//res.json(data);

	var user = new User(data);
		console.log(user);
	user.save(function(err,result){
		if(err)
			{
				return res.json({error:true,reason:err});
			}
		return res.json({error:false});
	}); 
	}
};
