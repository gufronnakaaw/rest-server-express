const express = require('express')
const app = express()
const port = 3000
const StudentsRoute = require('./component/StudentsRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: 'this is homepage'
    })
})


app.use('/api/v1', StudentsRoute)

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})