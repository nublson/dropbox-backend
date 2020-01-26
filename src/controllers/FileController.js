const Box = require('../models/Box')
const File = require('../models/File')

module.exports = {
	async store(req, res) {
		const { id: box_id } = req.params
		const { originalname, key } = req.file

		const box = await Box.findById(box_id)

		if (!box) {
			return res.status(404).send('Please, provide a valid box id.')
		}

		const file = await File.create({
			title: originalname,
			path: key
		})

		await box.files.push(file)

		await box.save()

		req.io.sockets.in(box._id).emit(('file', file))

		return res.json(file)
	}
}
