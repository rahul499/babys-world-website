

const productList=[
  {
     id: 1,
     name: 'Premium Stroller',
     image: 'https://images-na.ssl-images-amazon.com/images/I/61NtDf0iHaL._SL1500_.jpg',
     price: 'Rs. 1500.00',
     category: 'Stroller'
  },
  {
    id: 2,
    name: 'Panda School Bag',
    image: 'https://n4.sdlcdn.com/imgs/j/n/t/New-silverfox-Panda-School-Bag-SDL075094817-1-915aa.jpeg',
    price: 'Rs. 800.00',
    category: 'Bags'

  },
  {
    id: 3,
    name: 'Kids Ride-On Suitcase',
    image: 'https://n1.sdlcdn.com/imgs/j/e/b/Trunki-Original-Kids-Ride-On-SDL110348018-1-ccd87.jpg',
    price: 'Rs. 1300.00',
    category: 'Bags'
  },
  {
    id: 4,
    name: 'Piano Keyboard Toy',
    image: 'https://n1.sdlcdn.com/imgs/a/b/c/sdtv/SDL933762640_creative_Content.jpg',
    price: 'Rs. 900.00',
    category: 'Toys'
  },
  {
    id: 5,
    name: 'Robot Races Car Toy ',
    image: 'https://n2.sdlcdn.com/imgs/j/h/n/Robot-Races-Car-Toy-Battery-SDL933966283-2-efda7.jpeg',
    price: 'Rs. 1500.00',
    category: 'Toys'
  },
  {
    id: 6,
    name: '3.5 feet teddy bear',
    image: 'https://n4.sdlcdn.com/imgs/i/i/u/3-5-feet-teddy-bear-SDL260348972-1-9ce60.jpg',
    price: 'Rs. 750.00',
    category: 'Toys'
  },
  {
    id: 7,
    name: 'Digimart Red Dress',
    image: 'https://n1.sdlcdn.com/imgs/j/d/p/REDCAP-SDL482335477-1-5154b.jpeg',
    price: 'Rs. 1800.00',
    category: 'Clothes'
  },
  {
    id:8,
    name: 'Aarika Girl Casual Wear',
    image: 'https://n3.sdlcdn.com/imgs/j/o/0/Aarika-Girl-s-Casual-Wear-SDL289148478-1-00cea.jpeg',
    price: 'Rs. 950.00',
    category: 'Clothes'
  },
  {
    id:9,
    name: 'Partywear Kurta Pajama',
    image: 'https://n4.sdlcdn.com/imgs/j/b/p/GENERATION-NEXT-BLUE-MODI-SET-SDL752218597-1-28ce0.jpeg',
    price: 'Rs. 1900.00',
    category: 'Clothes'
  },
  {
    id:10,
    name: 'Full Sleeve Tshirt',
    image: 'https://n2.sdlcdn.com/imgs/j/k/r/Pack-of-2-Raglan-Full-SDL649244083-1-95527.jpg',
    price: 'Rs. 850.00',
    category: 'Clothes'
  },
  {
    id:11,
    name: 'Creative Kids Bag',
    image: 'https://n2.sdlcdn.com/imgs/i/l/m/Creative-Kids-Soft-Plush-Red-SDL804006994-1-f2dde.jpeg',
    price: 'Rs. 600.00',
    category: 'Bags'
  }
];

let productAll2 = JSON.parse(localStorage.getItem('allproducts'));
const setProducts = () => {
    if(!productAll2) {
       localStorage.setItem('allproducts', JSON.stringify(productList));
    }
}
setProducts();



const display = () => {
    let html='';
    let html2='';

    for(let i=0;i<=2;i++) {
        html +=
        `
        <div class="col-4 editbutton" >
          <img src="${productAll2[i].image}" alt="">
          <span class="hidden-id">${productAll2[i].id}</span>
          <h4>${productAll2[i].name}</h4>
          <div class="rating">
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star-o"></i>
          </div>
          <p>${productAll2[i].price} - <span>${productAll2[i].category}</span></p>
          <center>
          <button class="btn-2">Add to Cart</button>
          </center>
        </div>
        `;
    }

    for(let i=3;i<productAll2.length;i++) {
        html2 +=
        `
        <div class="col-4 editbutton" >
          <img src="${productAll2[i].image}" alt="">
          <span class="hidden-id">${productAll2[i].id}</span>
            <h4>${productAll2[i].name}</h4>
          <div class="rating">
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star"></i>
             <i class="fa fa-star-o"></i>
          </div>
          <p><span>${productAll2[i].price}  -</span> <span>${productAll2[i].category}</span></p>
          <center>
          <button class="btn-2">Add to Cart</button>
          </center>
        </div>
        `;
    }
    document.querySelector('#liner1').innerHTML += html;
    document.querySelector('#liner2').innerHTML += html2;
};

display();


const numberOfCartItem = () => {
  let cartt = JSON.parse(localStorage.getItem('productInCart'));
  var numm=0;
  cartt.forEach(item => {
      numm = item.quantity + numm;
  });
  document.querySelector('#numm').innerHTML = numm;
}
numberOfCartItem();
