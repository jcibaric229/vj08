require('dotenv').config()

const PORT = process.env.PORT

// Baza podataka
const password = process.env.ATLAS_PASS
const dbname = 'poruke-api'
const DB_URI = `mongodb+srv://oarwa-jc:${password}@cluster0.sqcnk.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}