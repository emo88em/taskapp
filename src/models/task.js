const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
	description: {
		type: String,
		required: true,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false,
		required: false
    }
    
});

module.exports = Task;