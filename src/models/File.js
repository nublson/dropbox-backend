const { Schema, model } = require('mongoose')
require('dotenv/config')

const FileSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: false
		},
		path: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true }
	}
)

FileSchema.virtual('url').get(function() {
	const url = process.env.PORT || 'http://localhost:3333'

	return `${url}/files/${encodeURIComponent(this.path)}`
})

module.exports = model('File', FileSchema)
