// Đây là module có sẵn dùng để tạo server node.js 
const http = require('http')

const PORT = 4000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(`{"message": "Hello World"}`) //response.end là trả về cái gì đấy
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})