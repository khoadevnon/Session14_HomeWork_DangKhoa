/* [Bài tập] Quản lý cửa hàng

1. Mục tiêu
Thực hành tổng hợp các kiến thức về function, object, và array
Nắm vững việc nhập xuất dữ liệu trên trình duyệt


2. Mô tả
Tạo các đối tượng sau đây:
Sản Phẩm (product):
Mỗi sản phẩm có các trường thông tin: id,  name, và price.
Tạo đối tượng sản phẩm và thêm vào danh sách sản phẩm của cửa hàng.
Nhân Viên (employee):
Mỗi nhân viên có các trường thông tin: id, name, và age.
Tạo đối tượng nhân viên và thêm vào danh sách nhân viên của cửa hàng.
Hóa Đơn (invoice):
Mỗi hóa đơn có thể chứa thông tin về sản phẩm được bán, số lượng, và giá trị.
Tạo đối tượng hóa đơn và thêm vào danh sách hóa đơn của cửa hàng.
Hiển Thị Thông Tin Tổng Quan:
Hiển Thị Tổng Quan:
Viết hàm để hiển thị thông tin tổng quan về cửa hàng, bao gồm số lượng sản phẩm, nhân viên, và doanh thu.
Tính tổng giá trị của tất cả các hóa đơn để có doanh thu.
Kiểm Tra Hạn Sử Dụng:
Thêm thuộc tính "hạn sử dụng" cho mỗi sản phẩm trong danh sách sản phẩm.
Hạn sử dụng có thể được biểu diễn dưới dạng chuỗi dd/mm/yyyy(ví dụ: "21/01/2024).
Kiểm Tra Sản Phẩm Sắp Hết Hạn Sử Dụng:
Viết hàm để kiểm tra xem có sản phẩm nào sắp hết hạn sử dụng trong kho hàng không.
Hàm sẽ trả về danh sách các sản phẩm sắp hết hạn sử dụng và thông báo cần lưu ý.
 */

// B1: tạo một đối tượng sản phẩm
let products = [];
// B2: viết hàm thêm sản phẩm mới vào danh sách
function addProduct() {
  let product = {
    id: products.length + 1,
    name: prompt("Enter the product name: "),
    price: prompt("Enter the product price: "),
  };
  products.push(product);
}

// B3: viết hàm hiển thị thông tin đầy đủ của tất cả sản phẩm
function showProducts() {
  products.forEach(function (product) {
    console.log("Product ID: ", product.id);
    console.log("Product Name: ", product.name);
    console.log("Product Price: ", product.price);
    console.log("====================================");
  });
}

// B4: tạo một đối tượng nhân viên
let employees = [];
// B5: viết hàm thêm nhân viên mới vào danh sách
function addEmployee() {
  let employee = {
    id: employees.length + 1,
    name: prompt("Enter the employee name: "),
    age: prompt("Enter the employee age: "),
  };
  employees.push(employee);
}

// B6: viết hàm hiển thị thông tin đầy đủ của tất cả nhân viên
function showEmployees() {
  employees.forEach(function (employee) {
    console.log("Employee ID: ", employee.id);
    console.log("Employee Name: ", employee.name);
    console.log("Employee Age: ", employee.age);
    console.log("====================================");
  });
}

// B7: tạo một đối tượng hóa đơn
let invoices = [];
// B8: viết hàm thêm hóa đơn mới vào danh sách
function addInvoice() {
  let invoice = {
    id: invoices.length + 1,
    productName: prompt("Enter the product name: "),
    quantity: prompt("Enter the quantity: "),
    value: prompt("Enter the value: "),
  };
  invoices.push(invoice);
}

// B9: viết hàm hiển thị thông tin đầy đủ của tất cả hóa đơn
function showInvoices() {
  invoices.forEach(function (invoice) {
    console.log("Invoice ID: ", invoice.id);
    console.log("Product Name: ", invoice.productName);
    console.log("Quantity: ", invoice.quantity);
    console.log("Value: ", invoice.value);
    console.log("====================================");
  });
}

// B10: viết hàm hiển thị thông tin tổng quan về cửa hàng
function showStore() {
  console.log("Store Information");
  console.log("Total Products: ", products.length);
  console.log("Total Employees: ", employees.length);
  let totalValue = 0;
  invoices.forEach(function (invoice) {
    totalValue += parseInt(invoice.value);
  });
  console.log("Total Value: ", totalValue);
}

// B11: tạo ra lựa chọn
let choice = prompt(
  "Enter your choice (1-8): \n 1. Add Product \n 2. Show Products \n 3. Add Employee \n 4. Show Employees \n 5. Add Invoice \n 6. Show Invoices \n 7. Show Store \n 8. Exit"
);
while (choice != 8) {
  switch (choice) {
    case "1":
      addProduct();
      break;
    case "2":
      showProducts();
      break;
    case "3":
      addEmployee();
      break;
    case "4":
      showEmployees();
      break;
    case "5":
      addInvoice();
      break;
    case "6":
      showInvoices();
      break;
    case "7":
      showStore();
      break;
    default:
      console.log("Invalid choice");
  }

  choice = prompt("Enter your choice: ");
}
// B12: thoát chương trình
console.log("Exit the program");
