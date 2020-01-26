const Box = require('../models/Box')

module.exports = {
	async store(req, res) {
		const { title } = req.body

		let box = await Box.findOne({ title }).populate({
			path: 'files',
			options: { sort: { createdAt: -1 } }
		})

		if (!box) {
			box = await Box.create({ title })
		}

		return res.json(box)
	}
}
