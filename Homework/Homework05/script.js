/* [Bài tập] Quản lý Thư viện Sách với Mượn/Trả
1. Mục tiêu
Thực hành tổng hợp các kiến thức về object
Nắm được các kiến thức về vòng lặp


2. Mô tả
Tạo đối tượng sách:
Tạo một đối tượng sách với các thuộc tính như title (tiêu đề), author (tác giả), và publishedYear (năm xuất bản) và isAvailable (trạng thái đã trả sách)
Quản lý Mượn/Trả sách:
Thêm hai phương thức mới cho đối tượng sách: borrow() để đánh dấu sách là đã được mượn và returnBook() để đánh dấu sách là đã được trả.
Mở rộng đối tượng thư viện:
Thêm một phương thức isBookAvailable()  cho đối tượng thư viện để kiểm tra xem một cuốn sách cụ thể có sẵn để mượn hay không.
Kiểm tra Mượn/Trả sách trong ứng dụng:
Tạo một số đối tượng sách và thêm chúng vào thư viện.
Gọi phương thức để mượn một cuốn sách, trả cuốn sách và kiểm tra xem cuốn sách có sẵn để mượn hay không.
 */
// B1: tạo một đối tượng sách
let book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  publishedYear: 1997,
  isAvailable: true,
};

// B2: thêm phương thức hiển thị thông tin của sách
book.showInfo = function () {
  console.log("Title: ", this.title);
  console.log("Author: ", this.author);
  console.log("Published Year: ", this.publishedYear);
  console.log("Is Available: ", this.isAvailable);
  console.log("====================================");
};

// B3: thêm phương thức mượn sách
book.borrow = function () {
  this.isAvailable = false;
};

// B4: thêm phương thức trả sách
book.returnBook = function () {
  this.isAvailable = true;
};

// B5: tạo một đối tượng thư viện
let library = {
  books: [],
};

// B6: thêm phương thức thêm sách vào thư viện
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
    isAvailable: true,
  };
  library.books.push(book);
}

// B7: thêm phương thức kiểm tra sách có sẵn để mượn hay không
library.isBookAvailable = function (title) {
  let isAvailable = false;
  this.books.forEach(function (book) {
    if (book.title === title) {
      isAvailable = book.isAvailable;
    }
  });
  return isAvailable;
};

// B8: mượn sách
let title = prompt("Enter the title of the book you want to borrow: ");
if (library.isBookAvailable(title)) {
  library.books.forEach(function (book) {
    if (book.title === title) {
      book.borrow();
    }
  });
  console.log("You have borrowed the book successfully.");
}

// B9: trả sách
title = prompt("Enter the title of the book you want to return: ");
library.books.forEach(function (book) {
  if (book.title === title) {
    book.returnBook();
  }
});
console.log("You have returned the book successfully.");

// B10: kiểm tra sách có sẵn để mượn hay không
title = prompt("Enter the title of the book you want to check: ");
if (library.isBookAvailable(title)) {
  console.log("The book is available for borrowing.");
} else {
  console.log("The book is not available for borrowing.");
}

// B11: hiển thị thông tin của sách trong thư viện
for (let i = 0; i < library.books.length; i++) {
  console.log("Title: ", library.books[i].title);
  console.log("Author: ", library.books[i].author);
  console.log("Published Year: ", library.books[i].publishedYear);
  console.log("Is Available: ", library.books[i].isAvailable);
  console.log("====================================");
}
