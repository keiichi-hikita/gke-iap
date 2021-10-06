import express from 'express'

const app = express()

const sample = (req, res) => {
	const userEmail = req.header('X-Goog-Authenticated-User-Email')
	const userID = req.header('X-Goog-Authenticated-User-Id')
	res.send(`userEmail: ${userEmail}, userID: ${userID}`)
}

app.get('/headercheck', sample)
export default app
