
var mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tag_mean', function(err){
	if(err){
		console.log('failed connecting to MogoDB' + err)
	} else {
		console.log('Succesfully connected to MongoDB')
	}
})