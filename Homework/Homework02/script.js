/* [Bài tập] Duyệt qua các thuộc tính của đối tượng
1. Mục tiêu
Thực hành tổng hợp các kiến thức về object
Nắm được các kiến thức về vòng lặp


2. Mô tả
Tạo một đối tượng đại diện cho một danh bạ điện thoại với các liên lạc. Mỗi liên lạc có thể có tên, số điện thoại, và địa chỉ email.
Sử dụng một vòng lặp để duyệt qua tất cả các liên lạc trong danh bạ và hiển thị thông tin của mỗi liên lạc.
 */
// B1: tạo một đối tượng danh bạ
let phoneBook = [
  {
    name: "Nguyen Van A",
    phone: "0123456789",
    email: "nguyenvana@gmail.com",
  },
  {
    name: "Nguyen Van B",
    phone: "0123456788",
    email: "nguyenvanb@gmail.com",
  },
  {
    name: "Nguyen Van C",
    phone: "0123456787",
    email: "nguyenvanc@gmail.com",
  },
];
// B2: duyệt qua tất cả các liên lạc trong danh bạ và hiển thị thông tin của mỗi liên lạc
for (let i = 0; i < phoneBook.length; i++) {
  console.log(phoneBook[i]);
}
// B3: hiển thị thông tin của mỗi liên lạc
for (let i = 0; i < phoneBook.length; i++) {
  console.log("Name: ", phoneBook[i].name);
  console.log("Phone: ", phoneBook[i].phone);
  console.log("Email: ", phoneBook[i].email);
  console.log("====================================");
}
// B4: hiển thị thông tin của mỗi liên lạc
for (let contact of phoneBook) {
  console.log("Name: ", contact.name);
  console.log("Phone: ", contact.phone);
  console.log("Email: ", contact.email);
  console.log("====================================");
}
// B5: hiển thị thông tin của mỗi liên lạc
phoneBook.forEach(function (contact) {
  console.log("Name: ", contact.name);
  console.log("Phone: ", contact.phone);
  console.log("Email: ", contact.email);
  console.log("====================================");
});
