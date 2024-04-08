/* [Bài tập] Quản lý Danh sách công việc
1. Mục tiêu
Thực hành tổng hợp các kiến thức về object
Nắm được các kiến thức về vòng lặp


2. Mô tả
Tạo một mảng jobs chứa danh sách công việc
Tạo một đối tượng job với các thuộc tính như: id (id của công việc), title (tiêu đề công việc), description (mô tả công việc), và completed (trạng thái hoàn thành).
Viết chương trình với các lựa chọn sau:
Lựa chọn 1: Viết một phương thức thêm mới công việc vào trong mảng (Dữ liệu lấy từ bàn phím thông qua hàm prompt())
Lựa chọn 2: Viết phương thức để in ra danh sách công việc
Lựa chọn 3: Tìm kiếm công việc theo id
Nhập id từ bàn phím, tìm kiếm công việc theo id đó trong mảng và hiển thị ra ngoài màn hình. Nếu không tìm thấy thì thông báo “Không tìm thấy”
Lựa chọn 4: Thoát chương trình
 */
// B1: tạo một mảng jobs chứa danh sách công việc
let jobs = [];
let job = {
  id: 1,
  title: "Learn JavaScript",
  description: "Learn JavaScript basic",
  completed: false,
};

// B2: viết phương thức thêm mới công việc vào trong mảng
function addJob() {
  let title = prompt("Enter the title of the job: ");
  let description = prompt("Enter the description of the job: ");
  let completed = prompt("Enter the completed of the job: ");
  let job = {
    id: jobs.length + 1,
    title: title,
    description: description,
    completed: completed,
  };
  jobs.push(job);
}

// B3: viết phương thức in ra danh sách công việc
function showJobs() {
  jobs.forEach(function (job) {
    console.log("ID: ", job.id);
    console.log("Title: ", job.title);
    console.log("Description: ", job.description);
    console.log("Completed: ", job.completed);
    console.log("====================================");
  });
}

// B4: viết phương thức tìm kiếm công việc theo id
function searchJob() {
  let id = prompt("Enter the id of the job you want to search: ");
  let job = jobs.find(function (job) {
    return job.id == id;
  });
  if (job) {
    console.log("ID: ", job.id);
    console.log("Title: ", job.title);
    console.log("Description: ", job.description);
    console.log("Completed: ", job.completed);
  } else {
    console.log("Not found");
  }
}

// B5: viết chương trình với các lựa chọn
let option = prompt("Enter the option you want to choose: ");
while (option != 4) {
  switch (option) {
    case "1":
      addJob();
      break;
    case "2":
      showJobs();
      break;
    case "3":
      searchJob();
      break;
    default:
      console.log("Invalid option");
  }
  option = prompt("Enter the option you want to choose: ");
}
// B6: thoát chương trình
console.log("Goodbye!");
