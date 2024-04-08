/* [Bài tập] Quản lý hóa đơn
1. Mục tiêu
Thực hành tổng hợp các kiến thức về object


2. Mô tả
Tạo một đối tượng con  người với các thuộc tính như tên, tuổi và địa chỉ.
Truy cập và hiển thị các thuộc tính của đối tượng.
Thêm một thuộc tính ngày sinh  vào đối tượng và sau đó xóa thuộc tính tuổi hiện có. Hiển thị đối tượng sau mỗi bước. */
// B1: tạo một đối tượng con người
let person = {
  name: "Nguyen Van A",
  age: 20,
  address: "Ha Noi",
};
console.log(person);
// B2: thêm thuộc tính ngày sinh vào đối tượng person
person.birthday = "01/01/2001";
console.log(person);
// B3: xóa thuộc tính tuổi trong đối tượng person
delete person.age;
console.log(person);
// B4: in ra thông tin của đối tượng person
console.log(person);
