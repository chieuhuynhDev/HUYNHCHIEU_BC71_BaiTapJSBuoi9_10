// hàm tính tổng lương
function tinhTongLuong(luongCB, chucVu) {
  tongLuong = 0;
  if (chucVu == "Giám đốc") {
    tongLuong = luongCB * 3;
  } else if (chucVu == "Trưởng phòng") {
    tongLuong = luongCB * 2;
  } else if (chucVu == "Nhân viên") {
    tongLuong = luongCB;
  }
  return new Intl.NumberFormat().format(tongLuong);
}

// hàm xếp loại nv
function xepLoaiNV(gioLam) {
  if (gioLam >= 192) {
    return "xuất sắc";
  } else if (gioLam >= 176) {
    return "giỏi";
  } else if (gioLam >= 160) {
    return "khá";
  } else {
    return "trung bình";
  }
}

//  kiểm tra rỗng
function kiemTraRong(value, idErr) {
  if (value.length < 4 || value.length > 6) {
    document.getElementById(idErr).innerHTML = "Tài khoản phải có 4-6 ký số.";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
}

// kiểm tra trùng
function kiemTraTrung(value, nvArr) {
  var viTri = nvArr.findIndex(function (item) {
    return item.taiKhoan == value;
  });

  if (viTri != -1) {
    document.getElementById("tbTKNV").innerHTML = "Tài khoản bị trùng";
    return false;
  }
  document.getElementById("tbTKNV").innerHTML = "";
  return true;
}

// kiểm tra tên
function kiemTraTen(value, idErr) {
  const regexName = /^[\p{L}\s'-]+$/u;
  var isValid = regexName.test(value);
  if (isValid) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  document.getElementById(idErr).innerHTML = "Họ tên không hợp lệ";
  return false;
}

// kiểm tra email
function kiemTraEmail(value, idErr) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isValid = regexEmail.test(value);
  if (isValid) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  document.getElementById(idErr).innerHTML = "Email không hợp lệ";
  return false;
}

// kiểm tra mật khẩu
function kiemTraMatKhau(value, idErr) {
  const regexMatKhau = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
  var isValid = regexMatKhau.test(value);
  if (isValid) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  document.getElementById(idErr).innerHTML =
    "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
  return false;
}

// kiểm tra ngày tháng năm
function kiemTraDate(value, idErr) {
  var regexDate =
    /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
  var isValid = regexDate.test(value);
  if (isValid) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  document.getElementById(idErr).innerHTML = "Ngày không hợp lệ";
  return false;
}

// kiểm tra lương
function kiemTraLuong(value, idErr) {
  if (!isNaN(value) && value >= 1000000 && value <= 20000000) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(idErr).innerHTML = "Lương không hợp lệ";
    return false;
  }
}

// kiểm tra chúc vụ
function kiemTraChucVu(value, idErr) {
  // Danh sách các chức vụ hợp lệ
  const list = ["Giám đốc", "Trưởng phòng", "Nhân viên"];
  var isValid = list.includes(value);
  // Kiểm tra nếu chức vụ đã chọn có nằm trong danh sách hợp lệ hay không

  if (isValid) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  document.getElementById(idErr).innerHTML = "Chưa chọn chức vụ";
  return false;
}

// kiểm tra giờ làm
function kiemTraGioLam(value, idErr) {
  if (!isNaN(value) && value >= 80 && value <= 200) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(idErr).innerHTML = "Giờ làm từ 80 - 200 giờ";
    return false;
  }
}
