const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')


const blogRoutes = require('./routes/blogRoutes')
// express app
const app = express();

const dbURI = 'mongodb+srv://todo_app:todo_app135@maxcluster20210505.stdvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connect = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(result => app.listen(3000))
  .catch(err => console.log(err))
  .then(res => console.log('listening to port 3000'))

// SANDBOX ROUTES
/*
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'Example 1',
    snippet: 'about example 1',
    body: 'body 1'
  })
  blog.save()
    .then(saveResult => res.send(saveResult))
    .catch(err => console.log(err))
})

app.get('/all-blogs', (req, res) => {
  Blog.find({})
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get('/single-blog', (req, res) => {
  Blog.findById('609543a47b74539ac9dbfe59')
    .then(result => res.send(result))
    .catch(err => console.log(err))
})
*/
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middleware for logging
app.use(morgan('dev'))

// middleware using static
app.use(express.static('./public'))
// parser of urlencoded data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
