const multer = require('multer')
const { resolve } = require('path')
const crypto = require('crypto')

module.exports = {
	dest: resolve(__dirname, '..', '..', 'tmp'),
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, resolve(__dirname, '..', '..', 'tmp'))
		},
		filename: (req, file, cb) => {
			crypto.randomBytes(16, (err, hash) => {
				if (err) cb(err)

				file.key = `${hash.toString('hex')}-${file.originalname}`

				cb(null, file.key)
			})
		}
	})
}
