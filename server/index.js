const path = require('path')
const dotenv = require('dotenv')

// get the path of .env
const envPath = path.join(__dirname, '../.env')

// tell dotenv node module where to find our .env file
dotenv.config({ path: envPath })

const server = require('./server')
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
