const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

//lấy url param
const id = urlParams.get("id");
const brand = urlParams.get("brand");

console.log("id của sản phẩm cần lấy: " + id);

if (brand === "samsung") {
  document.getElementById("tenSanPham").innerHTML =
    "Samsung galaxy z fold " + id;
} else if (brand === "apple") {
  document.getElementById("tenSanPham").innerHTML = "Iphone " + id;
}
else{
  alert("Không tìm thấy thương hiệu !")
}
