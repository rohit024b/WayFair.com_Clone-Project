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


// addibng onHover menu Lists catagories

// **************************************************************************************************

const categories = [
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
    }   
    
    // Add more categories as needed
];

// // Function to generate the category list dynamically
function generateCategoryList(categories) {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.innerHTML = ''; // Clear existing dropdown content

    const columnCount = 5;
    const categoriesPerColumn = Math.ceil(categories.length / columnCount);

    let categoryIndex = 0;
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add('column');

        for (let j = 0; j < categoriesPerColumn && categoryIndex < categories.length; j++) {
            const categoryObj = categories[categoryIndex++];
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = categoryObj.category;
            column.appendChild(categoryTitle);

            const subcategoriesList = document.createElement('ul');
            categoryObj.subcategories.forEach(subcategory => {
                const subcategoryItem = document.createElement('li');
                subcategoryItem.textContent = subcategory;
                subcategoriesList.appendChild(subcategoryItem);
            });

            column.appendChild(subcategoriesList);
        }

        dropdownContent.appendChild(column);
    }
}

// Call the function to generate the category list
generateCategoryList(categories);