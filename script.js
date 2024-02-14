//------------------O'zgaruvchilar--------------------
let  caruselImge = $('.carusel__imge'),
btn1 = $(".btn1"),
btn2 = $(".btn2"),
img = $$(".carusel__imge img"),
cardWrapper =$(".section3__cards"),
cardWrapper2 =$(".section4__cards"),
cardWrapper3 =$(".section6__cards"),
brandOption =$("#select1"),
saralshOption =$("#select2"),
narhOption =$("#select3");





let indx = 0;

let brand =[];







//-----------CARUSEL ____________________________

// let caruselImge = document.querySelector('.carusel__imge')
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let img = document.querySelectorAll('.carusel__imge img');


// console.log(img);   

function cecBtn1() {
    indx ++ ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1240}px)`;
}

function cecBtn2() {
    indx -- ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1240}px)`;
}

//------------------------------------DINAMIC CARDS _______________________

// let cardWrapper = document.querySelector(".section3__cards");

// let data = product.products;

function rederPradacts(data=[]) {
  cardWrapper.innerHTML="";
    if(data.length>0){
      data.forEach((el)=>{
        let {thumbnail, price, title, discountPercentage} = el ;
        //  console.log(el);
          let card = render("div", "section3__cards--card", `
          
          <div class="section3__cards--card--img">
             <img src="${thumbnail}" alt="img">
          </div>
          <div class="section3__cards--card--titil">
            <p class="section3__cards--card--titil--pi1">
              ${title.slice(0,24)}
            </p>
            <p class="section3__cards--card--titil--pi2">
              ₹${price}
              <span>₹${Math.floor(price * 1.4)}</span>
            </p>
            <p class="section3__cards--card--titil--pi3">
              Save - ₹${price}
            </p>
          </div>
          <p class="section3__cards--card-p">${Math.floor(discountPercentage)}% OFF</p>
        
          `)
      
         cardWrapper.appendChild(card);
      });
    }else{
      cardWrapper.innerHTML=`<h2> Ma'lumot topilmadi</2>`;
    }
}
rederPradacts(product.products);

//----------------------DINAMIC CARD2_______________________________

// let cardWrapper2 = document.querySelector(".section4__cards");


data1.forEach((el)=>{
  let card = document.createElement("div");
  card.classList.add("section4__cards--card");
  card.innerHTML=`
    <div class="section4__cards--card--img">
       <img src="${el.img}" alt="smartfon">
    </div>
    <p>${el.name}</p>
  
  `
  cardWrapper2.appendChild(card);
});


//----------------------DINAMIC CARD3_______________________________

// let cardWrapper3 = document.querySelector(".section6__cards");

if(data2.length){

  data2.forEach((el)=>{

    let card = render("div", "section6__cards--card", `
    <div class="section6__cards--card--img">
      <img src="${el.img}" alt="image">
    </div>
    <div class="section6__cards--card--titil">
      <p>${el.name}</p>
      <h3>${el.discount}</h3>
    </div>
    `);

    cardWrapper3.appendChild(card);
  })
}else {
  cardWrapper3.innerHTML =`<h2> Malumot topilmadi </h2>`
};


//-------------------------BRENDLARNI CIQARISH---------------

function findBrand(data) {
   if(data.length>0){
      data.forEach((el)=> {
        if(! brand.includes(el.brand)){
          brand.push(el.brand)  // brend boshida pustoy[] ochilgan shunga qo'shiladi
        }
      })
    }
}

findBrand(product.products);//pradactni ichidagi {} 

//--------------------------BRANDLARNI DINAMOCLASH-----------------

function randerBrend(data) {
   data.forEach((el)=>{
      let  option = render("option", "option--class" , el); // render takrorlanuvchi funcsiyamiz utilis.js fayiklda vazifasi teg yasab berish
      option.value=el
      brandOption.appendChild(option);
   })
}

randerBrend(brand);// brend [] 


//---------------------------CARDLARNI BREND BO'YICHA SARALASH----------


function saralashBrend(brendName) {
  
  cardWrapper.innerHTML="";
  const filterBrand = product.products.filter((el)=>{
    return el.brand.toLowerCase() == brendName.toLowerCase();
  })
  
  rederPradacts(filterBrand);
  // console.log(filterBrand);
}

brandOption.addEventListener("change" , (el) => {
    // console.log(el.target.value);
      saralashBrend(el.target.value);
})


//----------------------------ALFABIT BO'EICHA SARALASH-------------------

let saralsh = $("#select2");

saralsh.addEventListener("change" , (el) => {
    let sortStr = el.target.value;

    if(sortStr=="Aa-Zz"){
      let sortPraduct = product.products.sort((a,b)=>{
        if(a.title.toLowerCase()<b.title.toLowerCase()){
          return -1;
        }
        return 0;
      })
      rederPradacts(sortPraduct);
    }else if(sortStr=="Zz-Aa"){
      let sortPraduct = product.products.sort((a,b)=>{
        if(a.title.toLowerCase()>b.title.toLowerCase()){
          return -1;
        }
        return 0;
      })
      rederPradacts(sortPraduct);
    }

})


//-----------------------NARH BO"YICHA SARALSH-------------------

let saralshNarh = $("#select3");

saralshNarh.addEventListener("change" , (el) =>{
  let sortNarh = el.target.value;

  if(sortNarh=="Arzon"){
    let narhPraduct = product.products.sort((a,b)=> a.price - b.price);
    rederPradacts(narhPraduct);
  }else if(sortNarh=="Qimmat"){
    let narhPraduct = product.products.sort((a,b)=> b.price - a.price);
    rederPradacts(narhPraduct);
  }

})
