module.exports = {
	anyname: function(req, res) {
		res.render('view', {name: req.session.name, email: req.session.email});
	},
	post: function(req,res){
		req.session.destroy();
		return res.json('kiran');
	}
};