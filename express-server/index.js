const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = 8000

// Import MongoDB Connection
const connectDB = require('./config/database')
connectDB()

const tasksRoutes = require('./routes/tasksRoutes')
const usersRoutes = require('./routes/userRoutes')

// middleware to parse JSON bodies
app.use(express.json())
// middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
// middleware for CORS - cross orgin resource sharing
// allows the server to accept requests from different origins
app.use(cors())
// middleware for logging requests
// development tool to log HTTP requests in the console
app.use(morgan('dev'))




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/tasks', (req, res) => {
  res.json([  
    { id: 1, task: 'Learn Express' },
    { id: 2, task: 'Build a REST API' },
    { id: 3, task: 'Deploy the application' }
  ])
})

// create routing for tasks
app.use('/api/v1/tasks', tasksRoutes)
app.use('/api/v1/users', usersRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}` )
})

// MVC Architecture
// Model: Represents the data and business logic
// View: Represents the UI components (React, Angular, etc.)
// Controller: Handles the request and response logic

// mongodb+srv://jemlaguda:jem12345@cluster0.yms4tgg.mongodb.net/