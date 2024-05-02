window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementById("StillnavBar").style.position = 'fixed'
    document.getElementById("StillnavBar").style.top = "0px";
    document.getElementById("StillnavBar2").style.position = 'fixed'
    document.getElementById("StillnavBar2").style.top = "0";
    document.getElementById("gToTop").style.position = 'fixed'
    document.getElementById("gToTop").style.right = "30px";

  } else {
    document.getElementById("StillnavBar").style.position = ''
    document.getElementById("StillnavBar").style.top = "-80px";
    document.getElementById("StillnavBar2").style.position = ''
    document.getElementById("StillnavBar2").style.top = "-80px";
    document.getElementById("gToTop").style.position = ''
    document.getElementById("gToTop").style.right = "-100px";
  }
}



// Select all list items under the popup menu
const listItems = listUnderPopup.querySelectorAll('li');
// addibng onHover menu Lists catagories
const categoriesBtn = document.querySelectorAll('.categories-btns');
const dropdownContent = document.getElementById('dropdown-content');
const imgDivInPopup = document.getElementById("extra-content")

// Timer variable to store the setTimeout instance
let timer;

// Function to show dropdown
function showDropdown() {
  clearTimeout(timer); // Clear any existing timer
  dropdownContent.style.display = 'block';
}

// Function to hide dropdown after a delay
function hideDropdown() {
  // Set a timer to hide the dropdown after 200 milliseconds
  timer = setTimeout(() => {
    dropdownContent.style.display = 'none';
  }, 100);
}

//  event listeners to buttons and dropdown
categoriesBtn.forEach(btn => {
  btn.addEventListener('mouseenter', showDropdown);
  btn.addEventListener('mouseleave', hideDropdown);
});

//  event listener to dropdown to keep it open when hovered over
dropdownContent.addEventListener('mouseenter', showDropdown);

//  event listener to clear the timer when the mouse enters the dropdown
dropdownContent.addEventListener('mouseenter', () => {
  clearTimeout(timer);
});

//  event listener to hide dropdown when the mouse leaves the dropdown
dropdownContent.addEventListener('mouseleave', hideDropdown);

// **************************************************************************************************
const categories = {
  furniture: [
    {
      category: 'Living Room Furniture',
      subcategories: ['Sofas', 'Sectionals', 'TV Stands & Entertainment Centers', 'Coffee Tables', 'End & Side Tables', 'Chairs & Seating', 'Living Room Sets', 'Living Room Furniture Sale']
    },
    {
      category: 'Office Furniture',
      subcategories: ['Desks', 'Bookcases', 'Office Chairs', 'Filing Cabinets', 'Office Furniture Sale']
    },
    {
      category: 'Bedroom Furniture',
      subcategories: ['Beds', 'Dressers & Chests', 'Nightstands', 'Armoires & Wardrobes', 'Mattresses & Foundations', 'Bedroom Sets', 'Bedroom Furniture Sale']
    },
    {
      category: 'Entry & Mudroom Furniture',
      subcategories: ['Console Tables', 'Cabinets & Chests', 'Shoe Storage', 'Shoe Racks & Cubbies', 'Hall Trees', 'Entry & Mudroom Furniture Sale']
    },
    {
      category: 'Kitchen & Dining Frniture',
      subcategories: ['Dining Tables & Seating',
        'Sideboards & Buffets',
        'Kitchen Islands & Carts',
        'Display & China Cabinets',
        'Bar Stools & Counter Stools',
        'Bar Furniture',
        'Kitchen & Dining Furniture Sale']
    },
    {
      category: 'Game Room Furniture',
      subcategories: ['Gaming Chairs',
        'Gaming Desks',
        'Games & Game Tables',
        'Bean Bag Chairs',
        'Game Room Furniture Sale']
    },
    {
      category: 'Bedroom Furniture',
      subcategories: ['Beds', 'Dressers & Chests', 'Nightstands', 'Armoires & Wardrobes', 'Mattresses & Foundations', 'Bedroom Sets', 'Bedroom Furniture Sale']
    },
    {
      category: 'Entry & Mudroom Furniture',
      subcategories: ['Console Tables', 'Cabinets & Chests', 'Shoe Storage', 'Shoe Racks & Cubbies', 'Hall Trees', 'Entry & Mudroom Furniture Sale']
    }

    // Add more categories as needed
  ],
  outdoor: [
    {
      category: 'Living Room Furniture',
      subcategories: ['Sofas', 'Sectionals', 'TV Stands & Entertainment Centers', 'Coffee Tables', 'End & Side Tables', 'Chairs & Seating', 'Living Room Sets', 'Living Room Furniture Sale']
    }

  ]
}
// const furniture = [
//     {
//         category: 'Living Room Furniture',
//         subcategories: ['Sofas', 'Sectionals', 'TV Stands & Entertainment Centers', 'Coffee Tables', 'End & Side Tables', 'Chairs & Seating', 'Living Room Sets', 'Living Room Furniture Sale']
//     },
//     {
//         category: 'Office Furniture',
//         subcategories: ['Desks', 'Bookcases', 'Office Chairs', 'Filing Cabinets', 'Office Furniture Sale']
//     },
//     {
//         category: 'Bedroom Furniture',
//         subcategories: ['Beds', 'Dressers & Chests', 'Nightstands', 'Armoires & Wardrobes', 'Mattresses & Foundations', 'Bedroom Sets', 'Bedroom Furniture Sale']
//     },
//     {
//         category: 'Entry & Mudroom Furniture',
//         subcategories: ['Console Tables', 'Cabinets & Chests', 'Shoe Storage', 'Shoe Racks & Cubbies', 'Hall Trees', 'Entry & Mudroom Furniture Sale']
//     },
//     {
//         category: 'Kitchen & Dining Frniture',
//         subcategories: ['Dining Tables & Seating',
//         'Sideboards & Buffets',
//         'Kitchen Islands & Carts',
//         'Display & China Cabinets',
//         'Bar Stools & Counter Stools',
//         'Bar Furniture',
//         'Kitchen & Dining Furniture Sale']
//     },
//     {
//         category: 'Game Room Furniture',
//         subcategories: ['Gaming Chairs',
//         'Gaming Desks',
//         'Games & Game Tables',
//         'Bean Bag Chairs',
//         'Game Room Furniture Sale']
//     },
//     {
//         category: 'Bedroom Furniture',
//         subcategories: ['Beds', 'Dressers & Chests', 'Nightstands', 'Armoires & Wardrobes', 'Mattresses & Foundations', 'Bedroom Sets', 'Bedroom Furniture Sale']
//     },
//     {
//         category: 'Entry & Mudroom Furniture',
//         subcategories: ['Console Tables', 'Cabinets & Chests', 'Shoe Storage', 'Shoe Racks & Cubbies', 'Hall Trees', 'Entry & Mudroom Furniture Sale']
//     }   

//     // Add more categories as needed
// ];

// // Function to generate the category list dynamically
function generateCategoryList(categories) {
  dropdownContent.innerHTML = ''; // Clear existing dropdown content

  const columnCount = 4;
  const categoriesPerColumn = Math.ceil(categories.furniture.length / columnCount);

  let categoryIndex = 0;
  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement('div');
    column.classList.add('column');

    for (let j = 0; j < categoriesPerColumn && categoryIndex < categories.furniture.length; j++) {
      const categoryObj = categories.furniture[categoryIndex++];
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = categoryObj.category;
      column.appendChild(categoryTitle);

      const subcategoriesList = document.createElement('ul');
      categoryObj.subcategories.forEach(subcategory => {
        const subcategoryItem = document.createElement('li');
        const subcategorylink = document.createElement('a');
        subcategorylink.setAttribute = ("src", "#home")
        subcategorylink.textContent = subcategory;
        subcategoryItem.appendChild(subcategorylink);
        subcategoriesList.appendChild(subcategoryItem);
      });

      column.appendChild(subcategoriesList);
    }

    dropdownContent.appendChild(column);
    dropdownContent.appendChild(imgDivInPopup);
  }
}

// Call the function to generate the category list
generateCategoryList(categories);

const popupMenuSignIn = document.getElementById('popupmenuSignIn');
const signInBtns = document.querySelectorAll('.signInBn'); // Use plural for clarity

// Function to show the popup menu
function showPopupMenu() {
  popupMenuSignIn.style.display = 'block';
}

// Function to hide the popup menu
function hidePopupMenu() {
  popupMenuSignIn.style.display = 'none';
}

// Add event listeners to each sign-in button in the list
signInBtns.forEach(btn => {
  btn.addEventListener('mouseover', showPopupMenu);
  btn.addEventListener('mouseout', hidePopupMenu);
});

// Add event listeners to the popup menu
popupMenuSignIn.addEventListener('mouseover', showPopupMenu);
popupMenuSignIn.addEventListener('mouseout', hidePopupMenu);


const video = document.getElementById('videoPlayer');

// Add event listener to play the video when mouse enters
video.addEventListener('mouseenter', () => {
  video.play();
});

const furniture = [
  {
    "id": 1,
    "title": "Bedding Set 1",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/69649750/resize-h400-w400%5Ecompr-r85/2352/235233142/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Nazma Comfertor Set",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/29070776/resize-h400-w400%5Ecompr-r85/2904/29046453/default_name.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Bedding set 2",
    "price": 55.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/12590196/resize-h400-w400%5Ecompr-r85/2752/275241112/default_name.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Bedding set 3",
    "price": 15.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/14926287/resize-h400-w400%5Ecompr-r85/2296/229649758/default_name.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Bedding set 4",
    "price": 695,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/53813164/resize-h400-w400%5Ecompr-r85/6639/66397466/default_name.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Bedding set 5",
    "price": 168,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/27138708/resize-h400-w400%5Ecompr-r85/2549/254993258/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Bedding set 6",
    "price": 9.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/01363283/resize-h400-w400%5Ecompr-r85/2595/259510541/default_name.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Bedding set 7",
    "price": 10.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/50486137/resize-h400-w400%5Ecompr-r85/2476/247609082/default_name.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "Bedding set 8",
    "price": 64,
    "category": "electronics",
    "image": "https://assets.wfcdn.com/im/52152249/resize-h400-w400%5Ecompr-r85/2083/208304061/default_name.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "Bedding set 9",
    "price": 109,
    "category": "electronics",
    "image": "https://assets.wfcdn.com/im/24221020/resize-h400-w400%5Ecompr-r85/4911/49111667/default_name.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  }]
const furniture2 = [
  {
    "id": 1,
    "title": "Bedding Set 1",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/93947079/resize-h400-w400%5Ecompr-r85/1524/152433730/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Nazma Comfertor Set",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/45106286/resize-h400-w400%5Ecompr-r85/2611/261191188/default_name.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Bedding set 2",
    "price": 55.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/76165675/resize-h400-w400%5Ecompr-r85/1851/185183242/default_name.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Bedding set 3",
    "price": 15.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/60800135/resize-h400-w400%5Ecompr-r85/2320/232026001/default_name.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Bedding set 4",
    "price": 695,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/01820493/resize-h400-w400%5Ecompr-r85/2247/224728409/default_name.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Bedding set 5",
    "price": 168,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/80700836/resize-h400-w400%5Ecompr-r85/2610/261046143/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Bedding set 6",
    "price": 9.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/46320557/resize-h400-w400%5Ecompr-r85/2219/221941328/default_name.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  }]
const furniture3 = [
  {
    "id": 1,
    "title": "Bedding Set 1",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/03538509/resize-h400-w400%5Ecompr-r85/3178/31782038/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Nazma Comfertor Set",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/52118835/resize-h400-w400%5Ecompr-r85/2277/227745429/default_name.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Bedding set 2",
    "price": 55.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/79514320/resize-h400-w400%5Ecompr-r85/2679/267960876/default_name.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Bedding set 3",
    "price": 15.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/08276484/resize-h400-w400%5Ecompr-r85/2666/266674073/default_name.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Bedding set 4",
    "price": 695,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/87934408/resize-h400-w400%5Ecompr-r85/2609/260937330/default_name.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Bedding set 5",
    "price": 168,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/49821058/resize-h400-w400%5Ecompr-r85/1439/143963472/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Bedding set 6",
    "price": 9.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/00447342/resize-h400-w400%5Ecompr-r85/2775/277564956/default_name.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Bedding set 7",
    "price": 10.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/28351584/resize-h400-w400%5Ecompr-r85/2707/270759953/default_name.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "Bedding set 8",
    "price": 64,
    "category": "electronics",
    "image": "https://assets.wfcdn.com/im/39776034/resize-h400-w400%5Ecompr-r85/1616/161608403/default_name.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "Bedding set 9",
    "price": 109,
    "category": "electronics",
    "image": "https://assets.wfcdn.com/im/84048880/resize-h400-w400%5Ecompr-r85/2164/216469898/default_name.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  }];
const furniture4 = [
  {
    "id": 1,
    "title": "Bedding Set 1",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/02862627/resize-h400-w400%5Ecompr-r85/2617/261763760/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Nazma Comfertor Set",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/37750780/resize-h400-w400%5Ecompr-r85/2718/271836420/default_name.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Bedding set 2",
    "price": 55.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/40356350/resize-h400-w400%5Ecompr-r85/2545/254524391/default_name.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Bedding set 3",
    "price": 15.99,
    "category": "men's clothing",
    "image": "https://assets.wfcdn.com/im/82575083/resize-h400-w400%5Ecompr-r85/2384/238424308/default_name.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Bedding set 4",
    "price": 695,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/41699754/resize-h400-w400%5Ecompr-r85/1932/193238739/default_name.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Bedding set 5",
    "price": 168,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/22175644/resize-h400-w400%5Ecompr-r85/2436/243669050/default_name.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Bedding set 6",
    "price": 9.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/78784811/resize-h400-w400%5Ecompr-r85/2609/260994813/default_name.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Bedding set 7",
    "price": 10.99,
    "category": "jewelery",
    "image": "https://assets.wfcdn.com/im/98881713/resize-h400-w400%5Ecompr-r85/2697/269780970/default_name.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "Bedding set 8",
    "price": 64,
    "category": "electronics",
    "image": "https://assets.wfcdn.com/im/76642127/resize-h400-w400%5Ecompr-r85/2367/236778605/default_name.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "Bedding set 9",
    "price": 109,
    "category": "electronics",
    "image": "https://assets.wfcdn.com/im/85109630/resize-h400-w400%5Ecompr-r85/2414/241467241/default_name.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  }];

const cardsGrid = document.getElementById('cardsGrid');
const cardsGrid2 = document.getElementById('cardsGrid2');
const cardsGrid3 = document.getElementById('cardsGrid4');
const cardsGrid4 = document.getElementById('cardsGrid7');
const cardsGrid9 = document.getElementById('cardsGrid8');

function slideGrid(listOfData, gridcontainer) {
  listOfData.forEach(product => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgDiv");
    const img = document.createElement('img');
    img.setAttribute("id", "slideimg");
    img.src = product.image;
    img.alt = product.title;
    imgDiv.appendChild(img);

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('h3');
    productName.textContent = product.title;

    const price = document.createElement('h4');
    price.textContent = `Rs. ${product.price}`;

    const ratingsCount = document.createElement("p");
    ratingsCount.setAttribute("id", "rateCount");

    let ratingText = document.createTextNode(`${product.rating.rate}  `);

    let icon = document.createElement("i");
    icon.setAttribute("class", "bx bxs-star");
    icon.style.color = "#05b998";

    let countText = document.createTextNode(` | ${product.rating.count}k`);

    ratingsCount.appendChild(ratingText);
    ratingsCount.appendChild(icon);
    ratingsCount.appendChild(countText);

    productDetails.appendChild(productName);
    productDetails.appendChild(price);
    productDetails.appendChild(ratingsCount);

    cardContainer.appendChild(imgDiv);
    cardContainer.appendChild(productDetails);

    gridcontainer.appendChild(cardContainer);
  });

}
//here ({'slideGrid}) function taking the product list 1st and then the targeted html element from the body.
slideGrid(furniture, cardsGrid);
slideGrid(furniture2, cardsGrid2);
slideGrid(furniture3, cardsGrid3);
slideGrid(furniture4, cardsGrid4);

//slider button scrolling
const slideButtons = document.querySelectorAll('.slide-button')
const slideButtons2 = document.querySelectorAll('.slide-button2')
const slideButtons3 = document.querySelectorAll('.slide-button3')
const slideButtons4 = document.querySelectorAll('.slide-button4')
const slideButtons5 = document.querySelectorAll('.slide-button5')

function scrollForSliderBtn(cont, btnClass) {
  const slider = () => {
    btnClass.forEach(button => {
      button.addEventListener('click', () => {
        const direction = button.id === "prev-btn" ? -1 : 1;
        const scrollAmout = cont.clientWidth * direction;
        cont.scrollBy({ left: scrollAmout, behavior: "smooth" });
      })
    })
  }
  window.addEventListener('load', slider)
}

scrollForSliderBtn(cardsGrid, slideButtons)
scrollForSliderBtn(cardsGrid2, slideButtons2)
scrollForSliderBtn(cardsGrid3, slideButtons3)
scrollForSliderBtn(cardsGrid4, slideButtons4)
scrollForSliderBtn(cardsGrid9, slideButtons5)

// below function is for anotehr type of grid cards with some diffrent values than the above function for slider cards

//here ({'slideGrid2}) function taking (param) the product list 1st and then the targeted html element from the body.
const outdoor = [
  {
    title: "Seating groups from $200",
    info: "Metal, wood, and more durable materials →",
    image: "https://assets.wfcdn.com/im/43823191/scale-h448-w448%5Ecompr-r85/2723/272389616/default_name.jpg"
  },
  {
    title: "Lounge chairs under $600",
    info: "Chaises and more so you can really unwind →",
    image: "https://assets.wfcdn.com/im/55174104/scale-h448-w448%5Ecompr-r85/2723/272389617/default_name.jpg"
  },
  {
    title: "Sheds from $125",
    info: "Size options for every outdoor space →",
    image: "https://assets.wfcdn.com/im/94572431/scale-h448-w448%5Ecompr-r85/2723/272389630/default_name.jpg"
  },
  {
    title: "Garden statues under $100",
    info: "Gnomes are just the beginning →",
    image: "https://assets.wfcdn.com/im/97179408/scale-h448-w448%5Ecompr-r85/2723/272389598/default_name.jpg"
  }
];
const home = [
  {
    title: "Sconces",
    info: "Modern, eclectic, or traditional? It’s all here",
    image: "https://assets.wfcdn.com/im/68530951/scale-h448-w448%5Ecompr-r85/2759/275969077/default_name.jpg"
  },
  {
    title: "Flush-mount lighting",
    info: "From globe lights to natural textures →",
    image: "https://assets.wfcdn.com/im/79881864/scale-h448-w448%5Ecompr-r85/2759/275969078/default_name.jpg"
  },
  {
    title: "Peel & stick tile",
    info: "Easy install? Endless options? Check and check →",
    image: "https://assets.wfcdn.com/im/49676233/scale-h448-w448%5Ecompr-r85/2759/275969057/default_name.jpg"
  },
  {
    title: "Wallpaper",
    info: "Personalize your walls from top to bottom →",
    image: "https://assets.wfcdn.com/im/67836447/scale-h448-w448%5Ecompr-r85/2759/275969060/default_name.jpg"
  }
];
const outDoorKitchen = [
  {
    title: "Dining sets",
    info: "From dinner dates to backyard banquets →",
    image: "https://assets.wfcdn.com/im/74661848/scale-h448-w448%5Ecompr-r85/2741/274110028/default_name.jpg"
  },
  {
    title: "Grills",
    info: "The recipe for neighborhood BBQs →",
    image: "https://assets.wfcdn.com/im/70741804/scale-h448-w448%5Ecompr-r85/2741/274110024/default_name.jpg"
  },
  {
    title: "Outdoor tabletop",
    info: "Durable dinnerware in every style →",
    image: "https://assets.wfcdn.com/im/04794543/scale-h448-w448%5Ecompr-r85/2741/274110021/default_name.jpg"
  },
  {
    title: "Outdoor kitchens",
    info: "Your dream kitchen, no guesswork required →",
    image: "https://assets.wfcdn.com/im/16145456/scale-h448-w448%5Ecompr-r85/2741/274110020/default_name.jpg"
  }
];
const cardsGridtyp1 = document.getElementById('cardsGrid3');
const cardsGridtyp2 = document.getElementById('cardsGrid5');
const cardsGridtyp3 = document.getElementById('cardsGrid6');

function slideGrid2(listOfData, gridcontainer) {
  listOfData.forEach(product => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgDiv");

    const img = document.createElement('img');
    img.setAttribute("id", "slideimg");
    img.src = product.image;
    img.alt = product.title;
    imgDiv.appendChild(img);

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('h1');
    productName.textContent = product.title;
    productName.style.fontSize = '24px'
    const ratingsCount = document.createElement("p");
    ratingsCount.setAttribute("id", "rateCount");
    ratingsCount.textContent = product.info;
    ratingsCount.style.marginTop = '20px'


    productDetails.appendChild(productName);
    productDetails.appendChild(ratingsCount);

    cardContainer.appendChild(imgDiv);
    cardContainer.appendChild(productDetails);

    gridcontainer.appendChild(cardContainer);
    console.log(gridcontainer)

  });
}
// this is taking list of data 1st and then the ID of the html element(Parent element)
slideGrid2(outdoor, cardsGridtyp1)
slideGrid2(home, cardsGridtyp2)
slideGrid2(outDoorKitchen, cardsGridtyp3)




//type3 cards gird
const departments = [
  {
    id: 1,
    department: "Sale",
    image: "https://assets.wfcdn.com/im/05986081/timg-h241-w241%5Ecompr-r85/8535/85357250/default_name.jpg"
  },
  {
    id: 2,
    department: "Furniture",
    image: "https://assets.wfcdn.com/im/20374007/timg-h241-w241%5Ecompr-r85/9847/98477101/default_name.jpg"
  },
  {
    id: 3,
    department: "Outdoor",
    image: "https://assets.wfcdn.com/im/78973905/timg-h241-w241%5Ecompr-r85/9847/98477118/default_name.jpg"
  },
  {
    id: 4,
    department: "Bedding & Bath",
    image: "https://assets.wfcdn.com/im/11352763/timg-h241-w241%5Ecompr-r85/1323/132350539/default_name.jpg"
  },
  {
    id: 5,
    department: "Decor & Pillows",
    image: "https://assets.wfcdn.com/im/82372253/timg-h241-w241%5Ecompr-r85/9847/98477095/default_name.jpg"
  },
  {
    id: 6,
    department: "Rugs",
    image: "https://assets.wfcdn.com/im/1519289/timg-h241-w241%5Ecompr-r85/9847/98477121/default_name.jpg"
  },
  {
    id: 7,
    department: "Lighting",
    image: "https://assets.wfcdn.com/im/13026644/timg-h241-w241%5Ecompr-r85/9847/98477115/default_name.jpg"
  },
  {
    id: 8,
    department: "Home Improvement",
    image: "https://assets.wfcdn.com/im/59082384/timg-h241-w241%5Ecompr-r85/9847/98477108/default_name.jpg"
  },
  {
    id: 9,
    department: "Appliances",
    image: "https://assets.wfcdn.com/im/78368703/timg-h241-w241%5Ecompr-r85/9847/98477082/default_name.jpg"
  },
  {
    id: 10,
    department: "Kitchen",
    image: "https://assets.wfcdn.com/im/30854194/timg-h241-w241%5Ecompr-r85/2692/269209725/default_name.jpg"
  },
  {
    id: 11,
    department: "Baby & Kids",
    image: "https://assets.wfcdn.com/im/44333123/timg-h241-w241%5Ecompr-r85/9847/98477084/default_name.jpg"
  },
  {
    id: 12,
    department: "Organization",
    image: "https://assets.wfcdn.com/im/32533450/timg-h241-w241%5Ecompr-r85/9847/98477124/default_name.jpg"
  },
  {
    id: 13,
    department: "Custom Cabinetry",
    image: "https://assets.wfcdn.com/im/76680020/timg-h241-w241%5Ecompr-r85/2320/232096871/default_name.jpg"
  },
  {
    id: 14,
    department: "Pet",
    image: "https://assets.wfcdn.com/im/96777493/timg-h241-w241%5Ecompr-r85/1321/132124505/default_name.jpg"
  }
];

const cardsGridtyp4 = document.getElementById('cardsGrid8');

function slideGrid3(listOfData, gridcontainer) {
  listOfData.forEach(product => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgDiv");
    imgDiv.style.border = 'none'
    const img = document.createElement('img');
    img.setAttribute("id", "slideimg");
    img.src = product.image;
    img.alt = product.department;
    imgDiv.appendChild(img);

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    productDetails.style.display = 'flex'
    const productName = document.createElement('p');
    productName.textContent = product.department;
    productName.style.marginTop = '20px'


    productDetails.appendChild(productName);
    cardContainer.appendChild(imgDiv);
    cardContainer.appendChild(productDetails);

    gridcontainer.appendChild(cardContainer);
    console.log(gridcontainer)

  });
}
// this is taking list of data 1st and then the ID of the html element(Parent element)
slideGrid3(departments, cardsGridtyp4)