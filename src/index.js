//Thêm từ tiếng anh và nghĩa tiếng việt
const tudien = [];

function add() {
  let engl = prompt("Nhập từ tiếng anh: ");
  let vietn = prompt("Nhập nghĩa tiếng việt: ");
  if (engl != null && vietn != null) {
    tudien.push({
      english: engl,
      vietnamese: vietn,
    });
  }
}
function hienthi() {
  tudien.forEach((value) => {
    console.log("English: ", value.english);
    console.log("Vietnamese: ", value.vietnamese);
  });
}
function dich() {
  let tu_dich = prompt("Nhập từ cần dịch: ");
  let tim = tudien.find((value) => {
    return value.english == tu_dich;
  });
  console.log(tim.vietnamese);
}

function menu() {
  do {
    var luachon = prompt(`== TỪ ĐIỂN ANH VIỆT ==
    1. Nhập dữ liệu
    2. Hiển thị dữ liệu
    3. Dịch từ
    4.Thoát `);
    luachon = Number(luachon);
    switch (luachon) {
      case 1:
        add();
        break;
      case 2:
        hienthi();
        break;
      case 3:
        dich();
        break;
      case 4:
        console.log("Bạn đã chọn thoát!");
        break;
      default:
        break;
    }
  } while (luachon == 1 || luachon == 2 || luachon == 3 || luachon == 4);
}
menu();
