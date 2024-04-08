/* [Bài tập] Quản lý nhân viên

1. Mục tiêu
Thực hành tổng hợp các kiến thức về function, object, và array
Nắm vững việc nhập xuất dữ liệu trên trình duyệt


2. Mô tả
Tạo đối tượng Nhân Viên (employees):
Tạo một object đại diện cho một nhân viên với các thuộc tính như tên, tuổi, mức lương.
Quản Lý Danh Sách Nhân Viên:
Tạo một danh sách nhân viên (mảng các objects).
Viết hàm để thêm nhân viên mới vào danh sách.
Viết hàm để hiển thị thông tin đầy đủ của tất cả nhân viên.
Sắp xếp tuổi:
Tạo hàm sắp xếp tuổi nhân viên theo thứ tự tăng dần và hiển thị danh sách nhân viên đã được sắp xếp ra ngoài màn hình
Tính Tổng Lương:
Viết hàm tính tổng lương của tất cả nhân viên trong danh sách
Tạo ra lựa chọn: 
Nếu chọn 1: Yêu cầu nhập thông tin của đối tượng Nhân viên
Nếu chọn 2: Hiển thị danh sách nhân viên
Nếu chọn 3: Sắp xếp danh sách nhân viên theo tuổi tăng dần
Nếu chọn 4: Hiển thị tổng lương của toàn bộ công ty
Nếu chọn 5: Thoát chương trình
 */
// B1: tạo một đối tượng nhân viên
let employees = [];
// B2: viết hàm thêm nhân viên mới vào danh sách
function addEmployee() {
  let employee = {
    name: prompt("Enter the employee name: "),
    age: prompt("Enter the employee age: "),
    salary: prompt("Enter the employee salary: "),
  };
  employees.push(employee);
}

// B3: viết hàm hiển thị thông tin đầy đủ của tất cả nhân viên

function showEmployees() {
  employees.forEach(function (employee) {
    console.log("Employee Name: ", employee.name);
    console.log("Employee Age: ", employee.age);
    console.log("Employee Salary: ", employee.salary);
    console.log("====================================");
  });
}

// B4: viết hàm sắp xếp tuổi nhân viên theo thứ tự tăng dần
function sortEmployees() {
  employees.sort(function (a, b) {
    return a.age - b.age;
  });
  showEmployees();
}

// B5: viết hàm tính tổng lương của tất cả nhân viên trong danh sách
function totalSalary() {
  let total = 0;
  employees.forEach(function (employee) {
    total += parseInt(employee.salary);
  });
  console.log("Total Salary: ", total);
}

// B6: tạo ra lựa chọn
let choice = prompt("Enter your choice: ");
while (choice != 5) {
  switch (choice) {
    case "1":
      addEmployee();
      break;
    case "2":
      showEmployees();
      break;
    case "3":
      sortEmployees();
      break;
    case "4":
      totalSalary();
      break;
  }
  choice = prompt("Enter your choice: ");
}

// B7: thoát chương trình
console.log("Goodbye!");
