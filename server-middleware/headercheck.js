import express from 'express'

const app = express()

const sample = (req, res) => {
	const userEmail = req.header('X-Goog-Authenticated-User-Email')
	const userID = req.header('X-Goog-Authenticated-User-Id')
	const jwt = req.header('x-goog-iap-jwt-assertion')
	res.send(`userEmail: ${userEmail}, userID: ${userID}, jwt: ${jwt}`)
}

app.get('/headercheck', sample)
export default app
