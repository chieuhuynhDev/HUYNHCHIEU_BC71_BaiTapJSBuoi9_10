// tạo DSNV

var DSNV = [];

// lấy dữ liệu từ local storage khi load lại trang
var data = localStorage.getItem("DSNV_JSON");
//convet JSON trở lại aray gốc
DSNV = JSON.parse(data);

renderDSNV();
// hàm render dsnv

function renderDSNV() {
  var contentHTML = "";
  for (let i = 0; i < DSNV.length; i++) {
    var nv = DSNV[i];
    var trString = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td> <button class="btn btn-danger" onclick="deleteEmp('${nv.taiKhoan}')" >Xóa</button>
      <button class="btn btn-warning" onclick="editEmp('${nv.taiKhoan}')">Sửa</button> </td>
        </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

//  hàm thêm nhân viên
function addEmployee() {
  var nv = getInfoFromForm();

  var isValid =
    kiemTraRong(nv.taiKhoan, "tbTKNV") &&
    kiemTraTrung(nv.taiKhoan, DSNV) &&
    kiemTraTen(nv.hoTen, "tbTen") &&
    kiemTraEmail(nv.email, "tbEmail") &&
    kiemTraMatKhau(nv.matKhau, "tbMatKhau") &&
    kiemTraDate(nv.ngayLam, "tbNgay") &&
    kiemTraLuong(nv.luongCB, "tbLuongCB") &&
    kiemTraChucVu(nv.chucVu, "tbChucVu") &&
    kiemTraGioLam(nv.gioLam, "tbGiolam");
  if (isValid) {
    // push nv vào array dsnv
    DSNV.push(nv);

    console.log("🚀 ~ addEmployee ~ DSNV:", DSNV);

    // convert array to string
    var jsonDSNV = JSON.stringify(DSNV);
    // lưu vào local stroage
    localStorage.setItem("DSNV_JSON", jsonDSNV);
    renderDSNV();
  }
}

// delete nhân viên
function deleteEmp(taiKhoanNV) {
  var viTri = -1;
  for (let i = 0; i < DSNV.length; i++) {
    if (DSNV[i].taiKhoan == taiKhoanNV) {
      viTri = i;
    }
  }

  if (viTri != -1) {
    DSNV.splice(viTri, 1);

    // convert array to string
    var jsonDSNV = JSON.stringify(DSNV);
    // lưu vào local stroage
    localStorage.setItem("DSNV_JSON", jsonDSNV);
    renderDSNV();
  }
}

// edit nhân viên
function editEmp(taiKhoanEmp) {
  var viTri = DSNV.findIndex(function (item) {
    return (item.taiKhoan = taiKhoanEmp);
  });

  if (viTri != -1) {
    var nv = DSNV[viTri];
    console.log("🚀 ~ editEmp ~ nv:", nv);
    // đưa data lên form
    document.getElementById("tknv").value = nv.taiKhoan;
    document.getElementById("name").value = nv.hoTen;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matKhau;
    document.getElementById("datepicker").value = nv.ngayLam;
    document.getElementById("luongCB").value = nv.luongCB;
    document.getElementById("chucvu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;

    document.getElementById("tknv").setAttribute("readonly", true);
  }
  $("#myModal").modal("show");
  renderDSNV();
}

// cập nhật NV
function updateEmp() {
  var nv = getInfoFromForm();

  var isValid =
    kiemTraTen(nv.hoTen, "tbTen") &&
    kiemTraEmail(nv.email, "tbEmail") &&
    kiemTraMatKhau(nv.matKhau, "tbMatKhau") &&
    kiemTraDate(nv.ngayLam, "tbNgay") &&
    kiemTraLuong(nv.luongCB, "tbLuongCB") &&
    kiemTraChucVu(nv.chucVu, "tbChucVu") &&
    kiemTraGioLam(nv.gioLam, "tbGiolam");
  if (isValid) {
    //lấy vị trí
    var viTri = DSNV.findIndex(function (item) {
      return (item.taiKhoan = nv.taiKhoan);
    });
    // cập nhật Emp
    DSNV[viTri] = nv;

    // convert array to string
    var jsonDSNV = JSON.stringify(DSNV);
    // lưu vào local stroage
    localStorage.setItem("DSNV_JSON", jsonDSNV);
    $("#myModal").modal("hide");
    renderDSNV();
  }
}
