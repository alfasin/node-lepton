var lepton = require('./index.js');

lepton.compress('./profile_pic.jpeg', './profile_pic.lep', null, function(err, data){
	if(err) throw err;
	
	console.log(data);
});
