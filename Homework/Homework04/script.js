/* [Bài tập] Quản lý Thư viện sách
1. Mục tiêu
Thực hành tổng hợp các kiến thức về object
Nắm được các kiến thức về vòng lặp


2. Mô tả
Tạo đối tượng sách:
Tạo một đối tượng sách với các thuộc tính như title (tiêu đề), author (tác giả), và publishedYear (năm xuất bản).
Hiển thị thông tin sách:
Viết một phương thức cho đối tượng sách để hiển thị đầy đủ thông tin về sách.
Quản lý Thư viện Sách:
Tạo một đối tượng library để lưu trữ nhiều sách.
Thêm một phương thức cho đối tượng thư viện để thêm một sách mới vào thư viện.
Hiển thị danh sách sách trong thư viện:
Thêm một phương thức cho đối tượng thư viện để hiển thị danh sách đầy đủ thông tin của tất cả sách trong thư viện.
Thêm sách vào thư viện và hiển thị danh sách:
Tạo một số đối tượng sách và thêm chúng vào thư viện.
Gọi phương thức để hiển thị danh sách đầy đủ thông tin của tất cả sách trong thư viện.
 */

// B1: tạo một đối tượng sách
let book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  publusgedYear: 1997,
};

// B2: thêm phương thức hiển thị thông tin của sách
book.showInfo = function () {
  console.log("Title: ", this.title);
  console.log("Author: ", this.author);
  console.log("Published Year: ", this.publishedYear);
  console.log("====================================");
};

// B3: tạo một đối tượng thư viện
let library = {
  books: [],
};

// B4: thêm phương thức thêm sách vào thư viện
let addBook = prompt(
  "Enter the number of books you want to add to the library: "
);
for (let i = 0; i < addBook; i++) {
  let title = prompt("Enter the title of the book: ");
  let author = prompt("Enter the author of the book: ");
  let publishedYear = prompt("Enter the published year of the book: ");
  let book = {
    title: title,
    author: author,
    publishedYear: publishedYear,
  };
  library.books.push(book);
}

// B5: thêm phương thức hiển thị thông tin của sách trong thư viện
library.showBooks = function () {
  this.books.forEach(function (book) {
    book.showInfo();
  });
};

// B6: hiển thị tất cả danh sách sách trong thư viện
library.showBooks();

// B7: hiển thị thông tin của sách trong thư viện
for (let i = 0; i < library.books.length; i++) {
  console.log("Title: ", library.books[i].title);
  console.log("Author: ", library.books[i].author);
  console.log("Published Year: ", library.books[i].publishedYear);
  console.log("====================================");
}
