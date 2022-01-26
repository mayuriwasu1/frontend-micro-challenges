
// animated slider


function brandSlidera() {
    var slideList = document.querySelector(".slider_div2");
  
    var count = 1;
    var click = 2;
    var size = document.querySelector(".slider_div2").offsetWidth;
    if (size < 900) {
      click = 6;
    }
    if (count == 1) {
      document.getElementById("leftSwipea").style.opacity = 0.5;
      document.getElementById("leftSwipea").style.display = "hidden";
    }
    console.log(size);
    function stepBacka() {
      if (count == 2) {
        document.getElementById("leftSwipea").style.opacity = 0.5;
      }
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("rightSwipea").style.opacity = 1;
  
        count++;
      } else {
        document.getElementById("leftSwipea").style.opacity = 0.5;
        document.getElementById("leftSwipea").style.display = "hidden";
      }
    }
    function stepForwarda() {
      if (count == click - 1) {
        document.getElementById("rightSwipea").style.opacity = 0.5;
        document.getElementById("rightSwipea").style.display = "hidden";
      }
      if (count < click) {
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("leftSwipea").style.opacity = 1;
        count++;
      } else {
        document.getElementById("rightSwipea").style.opacity = 0.5;
        document.getElementById("rightSwipea").style.display = "hidden";
      }
    }
    document
      .getElementById("leftSwipea")
      .addEventListener("click", stepBacka);
    document
      .getElementById("rightSwipea")
      .addEventListener("click", stepForwarda);
  }
  
  brandSlidera();
  
  //the other slider with info

  
function productSliders() {
    var slideList = document.querySelector(".sliderP")
  
    var count = 1
    var click = 2
    var size = document.querySelector(".sliderP").offsetWidth
    if (size < 800) {
      click = 4
    }
    if (count == 1) {
      document.getElementById("swipe_L").style.opacity = 0.5
      document.getElementById("swipe_L").style.display = "hidden"
    }
    console.log(size)
    function moveToright() {
      if (count == 2) {
        document.getElementById("swipe_L").style.opacity = 0.5
      }
      if (count > 1) {
        count = count - 2
        slideList.style.left = "-" + count * 31 + "rem"
  
        document.getElementById("swipe_R").style.opacity = 1
  
        count++
      } else {
        document.getElementById("swipe_L").style.opacity = 0.5
        document.getElementById("swipe_L").style.display = "hidden"
      }
    }
    function moveToleft() {
      if (count == click - 1) {
        document.getElementById("swipe_R").style.opacity = 0.5
        document.getElementById("swipe_R").style.display = "hidden"
      }
      if (count < click) {
        slideList.style.left = "-" + count * 31 + "rem"
  
        document.getElementById("swipe_L").style.opacity = 1
        count++
      } else {
        document.getElementById("swipe_R").style.opacity = 0.5
        document.getElementById("swipe_R").style.display = "hidden"
      }
    }
    document.getElementById("swipe_L").addEventListener("click", moveToright)
    document.getElementById("swipe_R").addEventListener("click", moveToleft)
  }
  
  productSliders()