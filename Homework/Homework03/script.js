/* [Bài tập] Thao tác với phương thức trong đối tượng
1. Mục tiêu
Thực hành tổng hợp các kiến thức về object
Nắm được các kiến thức về vòng lặp


2. Mô tả
Mở rộng đối tượng danh bạ từ bài tập trước (Bài tập 2) và thêm một phương thức mới cho để thực hiện thao tác hiển thị đầy đủ thông tin của mỗi liên lạc.
Gọi phương thức này cho mỗi liên lạc trong danh bạ và hiển thị đầy đủ thông tin ra ngoài màn hình
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

// B2: thêm phương thức hiển thị thông tin của mỗi liên lạc
phoneBook.forEach(function (contact) {
  contact.showInfo = function () {
    console.log("Name: ", this.name);
    console.log("Phone: ", this.phone);
    console.log("Email: ", this.email);
    console.log("====================================");
  };
});
