

var btnContainer = document.getElementById("navbar");

// lấy element có id là navbar 
// lấy element có class là navbar__item

var btns = btnContainer.getElementsByClassName("navbar__item");

///chạy vòng lặp từ element đầu tiên đến cuối cùng
// nếu được click thì kích hoạt trạng thái active

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    //thay thế element có class active vào element khác
    
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}