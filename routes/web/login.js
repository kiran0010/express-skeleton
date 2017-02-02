var User = require('../../models/user');


module.exports = {
	anyname: function(req, res) {
		res.render('login');
	},

	post: function(req, res) {
		var data = req.body;	
	//res.json(data);
		console.log(data.password);
		 User.findOne({email : data.email})
  .exec(function (err,result){
  	if(result == null){
  			return res.json({err: true, result: 'wrong email'});

  		} else {

  	// console.log(result)
result.comparePassword(data.password, function(err, isMatch){
if(isMatch && !err){
	req.session.name = result.name.full;
	req.session.email = result.email;
	// req.session.loginTime = moment();

	return res.json('successful login');
} else{
	return res.json({err:true, result:'wrong password'});
}

})
}

  });


	// user.save(function(err,result){
	// 	if(err)
	// 		{
	// 			return res.json({error:true,reason:err});
	// 		}
	// 	return res.json({error:false});
	} 
}
