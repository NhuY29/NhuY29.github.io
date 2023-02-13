// khai báo biến
var fullName = 'Nguyen Thi Nhu Y';
console.log(fullName);
//-------------------------------
// Kiểm tra độ dài chuỗi 
console.log(fullName.length);
//-------------------------------
// để ghi dấu '' vào chuỗi
var chuoi= 'Nhu Y la \'sieu nhan \'';
console.log(chuoi);
//------------------------------
// để ghi dấu \ vào chuỗi 
var dau = 'Nhu Y \\ Y nhu';
console.log(dau);
// chú ý độ dài khi viết code
var fullName = ' Mình la Nhu Y de thương nhat tren doi luon. '
+ 'Xin chao moi nguoi nam nay minh 20 tuoi. '
+'Còn bạn thì sao ?'
console.log(fullName);
// Một số hàm built-in--
// alert('Hi Javascript');
// console.log('hello'); 
// console.warn('Cảnh báo nguy hiểm');
// console.error('Đã có lỗi xãy ra, vui lòng thử lại!');
// confirm('Đảm bảo bạn đã đủ 18 tuổi'); // hàm xác nhận (Ok, Cancel)
// prompt('Nhập độ tuổi chính xác của bạn'); // Nhập câu trả lời 
// đoạn code sẽ được thực thi sau 1 khoảng tg
// setTimeout( function thongBao () {
//     confirm('Bạn có muốn tìm hiểu nhiều thông tin về trang này hơn! ')
// },2000);
// đoạn code sẽ được thực thi sau 1 khoảng tg (lặp lại liên tục)
// setInterval( function thongBao () {
//     confirm('Đăng kí trang tại đây! ')
// },7000);
// Làm quen với toán tử số học
// var a = 1;
// var b = 2;
// var result = b ** a ;
// console.log(result);
// Tiền tố & hậu tố
var a = 6;
var result= ++a - a-- + ++a *2; 
// ++a là lấy a + 1 = 7 --> nhưng là tiền tố nên a lúc này là 7
// a-- là lấy a - 1 = 6 --> nhưng là hậu tố nên a lúc này là 7
// ++a là lấy a + 1 = 7 --> nhưng là tiền tố nên a lúc này là 7
// 7 - 7 + 7 * 2 = 14
console.log(result); 
// Toán tử gán =,+=,-=.*=,/=,**=
// var a= 1;
// a **=2;
// console.log(a);
//  Toán tử chuỗi 
 var firstName = 'Nguyen';
 var lastName = "Y";
 console.log('Tôi là ' +firstName + ' ' + lastName); // cách 1
console.log(`Tôi là ${firstName} ${lastName}`); // cách 2

// Toán tử so sánh ==, !=, >, <, >=, <=, 
// var a = 5;
// var b = 8;
// if(a == '5')
// {
//     console.log('Điều kiện đúng');
// }
// else {
//     console.log('Điều kiện sai');
// }
// so sánh cả kiểu dữ liệu  === , !== 
// var a = 5;
// var b = 8;
// if(a === '5')
// {
//     console.log('Điều kiện đúng');
// }
// else {
//     console.log('Điều kiện sai');
// }
//Toán tử logical (&&, ||, !)
// var a = 3; var b = 10;
// if( a > 0 && b > 5 ) {
//     console.log('Điều kiện đúng');
// } else console.log('Điều kiện sai');
//---------------------------------
// Toán tử && lấy từ trái sang, nếu thấy khác 6 gt sai thì lấy VP gán cho VT, nếu trùng 6 gt sai thì lấy nó
// var a = 8 && 10 && 22 && 9;
// console.log(a);
// var b = 8 && 9 && NaN && 9 && null;
// console.log(b);
// Toán tử || đọc từ trái sang, nếu khác 6 gt sai thì lấy
// var c = null || undefined || 9 || 0 || 8;
// console.log(c);
// var d = NaN || null || '' || false || 0;
// console.log(d);

// Kiểu dữ liệu boolean (Có 6 giá trị luôn sai: false, 0, null, NaN, undefined,'')
// var a = 0;
// var b= 1;
// var result = a>b;
// console.log(result);
// if(a== false)
// {
//     console.log('Điều kiện sai');
// }
// else {
//     console.log('Điều kiện đúng');
// }
// Làm việc với chuỗi 
var firstName = 'Vui học JS! Học JS tại F8   '
// Length (Kiểm tra độ dài chuỗi)
console.log(firstName.length);
//find index (Tìm vị trí của 1 kí tự trong chuỗi)
console.log(firstName.indexOf('H'));
console.log(firstName.indexOf('ABC')); // không tìm thấy sẽ hiện -1
console.log(firstName.lastIndexOf('JS')); // vì lastIndexOf nên k tìm cái JS đầu mà tìm cái JS cuối cùng
// Cut string
console.log(firstName.slice(19));
console.log(firstName.slice(16,18));
// replace
// console.log(firstName.replace('JS', 'Javascript')); // thay thế cho 1 chỗ
console.log(firstName);
console.log(firstName.replace(/JS/g, 'Javascript')); // thay thế cho nhiều chỗ
// convert to uper case (chuyển thành in hoa)
console.log(firstName.toLocaleUpperCase());
// convert to lower case (chuyển thành chữ thường)
console.log(firstName.toLocaleLowerCase());
//Trim (loại bỏ khoảng trắng thừa ở 2 đầu)
console.log(firstName.trim());
// split (cắt 1 chuỗi thành array)
var languages = 'PHP, java, JS, Ruby '; // đây là chuỗi
console.log(languages.split(',')); // tìm ra điểm chung để cắt
// get a character by index (lấy 1 kí tự bởi index cho trước)
console.log(firstName.charAt(8))
// SỐ VÀ LÀM VIỆC VỚI SỐ
var age = 20; var age2 = 18
//chuyển số sang chuỗi
console.log(age.toString()+ age2.toString());
// làm tròn số To Fixed
var Pi = 3.1456 ;
console.log(Pi.toFixed(2));
// Mảng và làm việc với mảng
// chuyển mảng sang chuỗi
var languages= ['JS', 'Ruby', 'HPH']
// console.log(languages.toString()); // cách 1
// console.log(languages.join('-')); // cách 2
// // POP xóa phần tử cuối mảng --> trả về pt đã xóa 
// console.log(languages.pop());
// // Push thêm 1 hay nhiều pt cuối mảng --> trả về độ dài
// console.log(languages.push('java','python'));
// // shift xóa phần tử đầu mảng --> trả pt xóa
// console.log(languages.shift());
// //unshift thêm 1 hay nhiều pt đầu mảng --> trả về độ dài
// console.log(languages.unshift('assembly'));
// splicing xóa, cắt, chèn phần tử mới vào mảng
languages.splice(1,1)
console.log(languages); // xóa
languages.splice(1,0,'Dart')
console.log(languages);
// concat nối mảng
var firstName = 'Nhu Y';
var lastName = 'de thuong';
console.log(firstName.concat(lastName));
// Định nghĩa và gọi hàm
function thongbao() {
    console.log('Đăng nhập tại đây');
}
thongbao();
// tham số trong hàm
function cong(a,b) {
    var result = a + b;
    console.log(result);
}
cong(6,7);
// arguments 
function bongHoa() {
    console.log(arguments);
}
bongHoa('Lan','Diep','Hong');
// Vòng lặp for of 
function writeLog() {
    for(var i of arguments) {
        console.log(i);
    }
}
writeLog('log 1', 'log 2', 'log 3');
// return trong hàm
function tru(a,b) {
    return a + b;
}
var result = tru(6 , 9 );
console.log(result);



