const http = require('http')
const chalk = require('chalk')
const fs = require('fs/promises')
const path = require('path')

const basePath = path.join(__dirname, 'pages')

const port = 3000

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    const content = await fs.readFile(path.join(basePath, 'index.html'))
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200)
    res.end(content)
  }
})

server.listen(port, () => {
  console.log(chalk.green(`Server has been started on port ${port}!!!`))
})