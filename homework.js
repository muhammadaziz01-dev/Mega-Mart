//----------------------------HOMEWORk START---------------


// PRODUCTS:
//  - price bo'yicha o'sish kamayish 
// - brand bo'yicha filterlash 
// - category bo'yicha filterlash 
// - rating bo'yicha filterlash 
// - objectni o'zbek tiliga o'girish


///-----------------------------price bo'yicha o'sish kamayish -----------

//---price kamayish 1-misol

// function pradactPrice(data) {
//     return  data.sort((a,b) =>a.price - b.price)
// }

// let resalt = pradactPrice(product.products);
// console.log(resalt);

//---price o'sish 2-misol


// function pradactPrice(data) {
//     return  data.sort((a,b) =>b.price - a.price)
// }

// let resalt = pradactPrice(product.products);
// console.log(resalt);


//------------------------brand bo'yicha filterlash 

// function pradactBrand(data, brends) {
//     return data.filter((el)=> el.brand === brends );
//     // console.log(el);
// }

// let resalt = pradactBrand(product.products , "Apple");
// console.log(resalt);




//--------------------------category bo'yicha filterlash


// function pradactCategory(data , str) {
//     return data.filter((el) => el.category === str)
     
// }
 
//  let resalt = pradactCategory(product.products , "laptops" );
//  console.log(resalt);



//-----------------------------rating bo'yicha filterlash-------

//-------------rating osish--------

// function pradactReting(data) {
//     return  data.sort((a,b) =>b.rating - a.rating)
// }

// let resalt = pradactReting(product.products);
// console.log(resalt);

//------------------rating kamayish-------------

// function pradactReting(data) {
//     return  data.sort((a,b) =>a.rating - b.rating)
// }

// let resalt = pradactReting(product.products);
// console.log(resalt);


//------------------------------------------objectni o'zbek tiliga o'girish


// function praducrUzb(data) {
//     return data.map((el)=>{
//         return {id:`${el.id}`,
//         miqdori:`${el.quantity}`,
//         nomi:`${el.title}`,
//         tavsifi:`${el.description}`,
//         narx:`${el.price}`,
//         chegirmUlushi:`${el.discountPercentage}`,
//         rating:`${el.rating}`,
//         aksiya:`${el.stock}`,
//         brand:`${el.brand}`,
//         category:`${el.category}`,
//         eskiz:`${el.thumbnail}`,
//         rasimlar:[`${el.images[0]}`,`${el.images[1]}`,`${el.images[2]}`,`${el.images[3]}`]
//     }

//     })
// }

// let neuwData =praducrUzb(product.products);
// console.log(neuwData);


