/* [Bài tập] Quản lý tổng hợp

1. Mục tiêu
Thực hành tổng hợp các kiến thức về function, object, và array
Nắm vững việc nhập xuất dữ liệu trên trình duyệt


2. Mô tả
Quản Lý Doanh Nghiệp:
Kết hợp quản lý nhân viên (gồm các trường: id, tên, tuổi, phòng ban) và hóa đơn (gồm các trường: id, tên hóa đơn, số dư, ngày tạo) để tạo một ứng dụng quản lý doanh nghiệp.
Viết hàm để hiển thị thông tin tổng quan về doanh nghiệp bao gồm số lượng nhân viên và giá trị hóa đơn.
Tìm Kiếm và Lọc:
Viết hàm tìm kiếm nhân viên và hóa đơn hóa đơn theo id và hiển thị thông tin tìm được ra ngoài màn hình
Báo Cáo Thống Kê:
Viết hàm để tạo báo cáo thống kê, chẳng hạn như số lượng nhân viên theo từng phòng ban, Số lượng phòng ban và Tổng hóa đơn
 */

// B1: tạo một đối tượng nhân viên
let employees = [];
// B2: viết hàm thêm nhân viên mới vào danh sách
function addEmployee() {
  let employee = {
    id: employees.length + 1,
    name: prompt("Enter the employee name: "),
    age: prompt("Enter the employee age: "),
    department: prompt("Enter the employee department: "),
  };
  employees.push(employee);
}

// B3: viết hàm hiển thị thông tin đầy đủ của tất cả nhân viên
function showEmployees() {
  employees.forEach(function (employee) {
    console.log("Management Employees");
    console.log("Employee ID: ", employee.id);
    console.log("Employee Name: ", employee.name);
    console.log("Employee Age: ", employee.age);
    console.log("Employee Department: ", employee.department);
    console.log("====================================");
  });
}

// B4: tạo một đối tượng hóa đơn
let orders = [];
// B5: viết hàm thêm hóa đơn mới vào danh sách
function addOrder() {
  let order = {
    id: orders.length + 1,
    orderName: prompt("Enter the order name: "),
    orderValue: prompt("Enter the order value: "),
    orderDate: prompt("Enter the order date: "),
  };
  orders.push(order);
}

// B6: viết hàm hiển thị thông tin đầy đủ của tất cả hóa đơn
function showOrders() {
  orders.forEach(function (order) {
    console.log("Management Orders");
    console.log("Order ID: ", order.id);
    console.log("Order Name: ", order.orderName);
    console.log("Order Value: ", order.orderValue);
    console.log("Order Date: ", order.orderDate);
    console.log("====================================");
  });
}

// B7: viết hàm hiển thị thông tin tổng quan về doanh nghiệp
function showBusiness() {
  console.log("Management Business");
  console.log("Total Employees: ", employees.length);
  let totalOrderValue = 0;
  orders.forEach(function (order) {
    totalOrderValue += parseInt(order.orderValue);
  });
  console.log("Total Order Value: ", totalOrderValue);
}

// B8: viết hàm tìm kiếm nhân viên theo id
function searchEmployee() {
  let id = prompt("Enter the employee id you want to search: ");
  let employee = employees.find(function (employee) {
    return employee.id == id;
  });
  if (employee) {
    console.log("Management Employees");
    console.log("Employee ID: ", employee.id);
    console.log("Employee Name: ", employee.name);
    console.log("Employee Age: ", employee.age);
    console.log("Employee Department: ", employee.department);
  } else {
    console.log("Management Employees");
    console.log("Not found");
  }
}

// B9: viết hàm tìm kiếm hóa đơn theo id
function searchOrder() {
  let id = prompt("Enter the order id you want to search: ");
  let order = orders.find(function (order) {
    return order.id == id;
  });
  if (order) {
    console.log("Management Orders");
    console.log("Order ID: ", order.id);
    console.log("Order Name: ", order.orderName);
    console.log("Order Value: ", order.orderValue);
    console.log("Order Date: ", order.orderDate);
  } else {
    console.log("Management Orders");
    console.log("Not found");
  }
}

// B10: viết hàm tạo báo cáo thống kê
function statisticalReport() {
  let department = {};
  employees.forEach(function (employee) {
    if (department[employee.department]) {
      department[employee.department]++;
    } else {
      department[employee.department] = 1;
    }
  });
  console.log("Management Statistical Report");
  console.log("Number of Employees by Department: ", department);
  console.log("Number of Departments: ", Object.keys(department).length);
  let totalOrderValue = 0;
  orders.forEach(function (order) {
    totalOrderValue += parseInt(order.orderValue);
  });
  console.log("Management Statistical Report");
  console.log("Total Order Value: ", totalOrderValue);
}

// B11: tạo ra lựa chọn
let choice = prompt(
  "Enter your choice (1-9): \n 1. Add Employee \n 2. Show Employees \n 3. Add Order \n 4. Show Orders \n 5. Show Business \n 6. Search Employee \n 7. Search Order \n 8. Statistical Report \n 9. Exit"
);
while (choice != 9) {
  switch (choice) {
    case "1":
      addEmployee();
      break;
    case "2":
      showEmployees();
      break;
    case "3":
      addOrder();
      break;
    case "4":
      showOrders();
      break;
    case "5":
      showBusiness();
      break;
    case "6":
      searchEmployee();
      break;
    case "7":
      searchOrder();
      break;
    case "8":
      statisticalReport();
      break;
    default:
      console.log("Invalid choice");
  }
  choice = prompt("Enter your choice: ");
}

console.log("Goodbye!");
