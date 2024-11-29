const express = require('express');
const path = require('path'); // Import the path module

const app = express();
app.use(express.static('public'));
// Define a route for the homepage
app.get('/', (req, res) => {
  // Sử dụng path.join để kết hợp đường dẫn của thư mục hiện tại và tên file HTML
  res.sendFile(path.join(__dirname, 'test.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
