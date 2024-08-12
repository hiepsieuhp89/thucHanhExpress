const express = require('express')
const path = require('path');
const app = express();
// Đường dẫn đến thư mục chứa tệp HTML của bạn
const publicDirectory = path.join(__dirname, 'public');

// Sử dụng middleware static để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(publicDirectory));

app.get('/', (request, response) => {
  //
  const trangChu = path.join(publicDirectory, '/templates/trangChu.html')
  response.sendFile(trangChu);
})

app.get('/chi-tiet-san-pham', (request, response) => {
  //lấy sản phẩm có id = :id
  //
  const chiTietSanPham = path.join(publicDirectory, '/templates/chiTietSanPham.html')
  response.sendFile(chiTietSanPham);
})


app.listen(3000, () => {
  console.log('ỨNG DỤNG CHẠY TRÊN CỔNG 3000')
})

module.exports = app;
