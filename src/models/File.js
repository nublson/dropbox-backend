const { Schema, model } = require('mongoose')

const FileSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		path: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = model('File', FileSchema)
