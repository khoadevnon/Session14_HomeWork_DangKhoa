/* [Bài tập] Quản lý hóa đơn
1. Mục tiêu
Thực hành tổng hợp các kiến thức về function, object, và array
Nắm vững việc nhập xuất dữ liệu trên trình duyệt


2. Mô tả
Tạo đối tượng Hóa Đơn (orders):
Tạo một object đại diện cho một hóa đơn với các thuộc tính như số hóa đơn, ngày tạo, và tổng giá trị.
Quản Lý Danh Sách Hóa Đơn:
Tạo một danh sách hóa đơn (mảng các objects).
Viết hàm để thêm hóa đơn mới vào danh sách.
Viết hàm để hiển thị thông tin đầy đủ của tất cả các hóa đơn.
Tính Tổng Giá Trị Hóa Đơn:
Viết hàm tính tổng giá trị của tất cả hóa đơn trong danh sách.
Xây dựng chương trình với các lựa chọn:
Nếu chọn 1: Yêu cầu người dùng nhập dữ liệu cho đối tượng Hóa đơn
Nếu chọn 2: Hiển thị danh sách hóa đơn
Nếu chọn 3: Tính tổng giá trị của tất cả hóa đơn và hiển thị ra ngoài màn hình
Nếu chọn 4: Thoát chương trình
 */

// B1: tạo một đối tượng hóa đơn
let orders = [];
// B2: viết hàm thêm hóa đơn mới vào danh sách
function addOrder() {
  let order = {
    orderNumber: prompt("Enter the order number: "),
    orderDate: prompt("Enter the order date: "),
    orderValue: prompt("Enter the order value: "),
  };
  orders.push(order);
}

// B3: viết hàm hiển thị thông tin đầy đủ của tất cả các hóa đơn
function showOrders() {
  orders.forEach(function (order) {
    console.log("Order Number: ", order.orderNumber);
    console.log("Order Date: ", order.orderDate);
    console.log("Order Value: ", order.orderValue);
    console.log("====================================");
  });
}

// B4: viết hàm tính tổng giá trị của tất cả hóa đơn trong danh sách
function totalOrderValue() {
  let total = 0;
  orders.forEach(function (order) {
    total += parseInt(order.orderValue);
  });
  console.log("Total Order Value: ", total);
}

// B5: xây dựng chương trình với các lựa chọn
let choice = prompt("Enter your choice: ");
while (choice != 4) {
  switch (choice) {
    case "1":
      addOrder();
      break;
    case "2":
      showOrders();
      break;
    case "3":
      totalOrderValue();
      break;
    default:
      console.log("Invalid choice");
  }
  choice = prompt("Enter your choice: ");
}
console.log("Goodbye!");
