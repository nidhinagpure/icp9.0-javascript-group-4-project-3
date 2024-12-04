
function MoveImage(num){
    const mainImage = document.getElementById('main');
      if(num == 1){
        mainImage.src = "../../images/mobile/motorola/motorola(1).jpeg";
      }
      else if(num == 2){
        mainImage.src = "../../images/mobile/motorola/motorola(2).jpeg";
      }
      else if(num == 3){
        mainImage.src = "../../images/mobile/motorola/motorola(3).jpeg";
      }
      
    }
    
    const quantElement = document.getElementById('quantity'); 
    
    function incre(){
      let quantity = parseInt(quantElement.innerText);
      quantElement.innerText = ++quantity;
    }
    function dece(){
        let quantity = parseInt(quantElement.innerText);
        if(quantity>1){
            quantElement.innerText = --quantity;
        }
    }

    function order(){
      alert('Your order is confirmed...');
         }


  const stars = document.querySelectorAll(".stars i");
   stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
    
      stars.forEach((star,index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
   });

   function changeImage(fileName){
    let img = document.querySelector("#bannerImage");
    img.setAttribute("src",fileName)
  }

   function randomImage(fileName){
    let img = document.querySelector("#shoesImage");
    img.setAttribute("src",fileName)
  }

  function sadiImage(fileName){
    let img = document.querySelector("#newSadi");
    img.setAttribute("src",fileName)
  }

  function clickImage(fileName){
    let img = document.querySelector("#rounded");
    img.setAttribute("src",fileName)
  }
   

  let images = ["../images/fashion-page/SSB2.jpg",
     "../images/fashion-page/SSB7.jpg", 
     "../images/fashion-page/SSB4.jpg",
      "../images/fashion-page/SSB5.jpg",
    ];
let index = 0;
const slide = document.getElementById('slider');


function forward() {
    if (index < images.length - 1) {
        index++;
    }
    else {
        index = 0;
    }

    slide.src = images[index]
}

function backward() {
    if (index > 0) {
        index--;
    }
    else {
        index = images.length - 1;
    }
    slide.src = images[index]
}



