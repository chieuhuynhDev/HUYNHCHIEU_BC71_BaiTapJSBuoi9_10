//  hàm lấy thông tin từ form

function getInfoFromForm() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;

  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );

  return nhanVien;
}
