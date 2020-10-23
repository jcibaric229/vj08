const mongoose = require('mongoose')

const password = 'bazapodataka'
const dbname = 'poruke-api'
const url = `mongodb+srv://oarwa-gz:${password}@cluster0.l0kev.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const porukaSchema = new mongoose.Schema({
  sadrzaj: String,
  datum: Date,
  vazno: Boolean
})

const Poruka = mongoose.model('Poruka', porukaSchema, 'poruke')

/* const novaPoruka = new Poruka({
  sadrzaj: 'Mongo je jednostavan uz Mongoose',
  datum: new Date(),
  vazno: true
})

novaPoruka.save()
  .then(result => {
    console.log('Poruka spremljena')
    console.log(result);
    mongoose.connection.close()
  }) */

Poruka.find({ vazno: true })
  .then(result => {
    result.forEach(poruka => {
      console.log(poruka)
    })
    mongoose.connection.close()
  })