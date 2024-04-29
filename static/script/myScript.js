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
    furniture : [
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
    outdoor : [
        {
            category: 'Living Room Furniture',
            subcategories : ['Sofas', 'Sectionals', 'TV Stands & Entertainment Centers', 'Coffee Tables', 'End & Side Tables', 'Chairs & Seating', 'Living Room Sets', 'Living Room Furniture Sale']
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
                subcategorylink.setAttribute = ("src","#home")
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


// popup-menu-for SignIn btn 

// const signInBn = document.getElementById('signInBn');
// const popupMenuSignIn = document.getElementById('popupmenuSignIn');

// signInBn.addEventListener('mouseover',function(){
//     popupMenuSignIn.style.display= 'block'
// })
// signInBn.addEventListener('mouseleave',function(){
//     popupMenuSignIn.style.display= 'none'
// })

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
