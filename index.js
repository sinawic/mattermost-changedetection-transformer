require("dotenv").config()
const bodyParser = require('body-parser')
const fs = require('fs')
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000


const { NOTIFICATION_URL } = process.env

app.use(bodyParser({limit: '50mb'}))
app.use(express.json())

app.post('/', (req, res) => {
  const {type, message, title} = req.body

  console.log('=> received req:', type, title)

  notify({
    text: type,
    attachments: [{
      fallback: `changes in ${title} detected!`,
      color: '#00f',
      pretext: `changes in ${title} detected!`,
      text: message,
      title: 'visit webpage',
      title_link: title
    }]
  })

  fs.writeFileSync('file.json', JSON.stringify(req.body))
  res.send('success')
})

app.listen(port, () => {
  console.log('Mattermost Sentry API transformer')
  console.log(`app listening on port ${port}`)
})


const notify = async (data) => {
  const result = await axios.post(NOTIFICATION_URL, data)
}

