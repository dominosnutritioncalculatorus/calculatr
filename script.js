// Domino's Nutrition Data
const nutritionData = {
    pizzas: {
        "Hand Tossed - Cheese Pizza": {
            small: { calories: 190, fat: 7, carbs: 25, protein: 8, serving: "1/8 of pizza" },
            medium: { calories: 210, fat: 8, carbs: 27, protein: 9, serving: "1/8 of pizza" },
            large: { calories: 230, fat: 9, carbs: 29, protein: 10, serving: "1/8 of pizza" }
        },
        "Hand Tossed - Pepperoni Pizza": {
            small: { calories: 220, fat: 10, carbs: 26, protein: 9, serving: "1/8 of pizza" },
            medium: { calories: 240, fat: 11, carbs: 28, protein: 10, serving: "1/8 of pizza" },
            large: { calories: 260, fat: 12, carbs: 30, protein: 11, serving: "1/8 of pizza" }
        },
        "Hand Tossed - Sausage Pizza": {
            small: { calories: 230, fat: 11, carbs: 26, protein: 9, serving: "1/8 of pizza" },
            medium: { calories: 250, fat: 12, carbs: 28, protein: 10, serving: "1/8 of pizza" },
            large: { calories: 270, fat: 13, carbs: 30, protein: 11, serving: "1/8 of pizza" }
        },
        "Hand Tossed - Veggie Pizza": {
            small: { calories: 200, fat: 8, carbs: 26, protein: 8, serving: "1/8 of pizza" },
            medium: { calories: 220, fat: 9, carbs: 28, protein: 9, serving: "1/8 of pizza" },
            large: { calories: 240, fat: 10, carbs: 30, protein: 10, serving: "1/8 of pizza" }
        },
        "Hand Tossed - Hawaiian Pizza": {
            small: { calories: 210, fat: 8, carbs: 26, protein: 9, serving: "1/8 of pizza" },
            medium: { calories: 230, fat: 9, carbs: 28, protein: 10, serving: "1/8 of pizza" },
            large: { calories: 250, fat: 10, carbs: 30, protein: 11, serving: "1/8 of pizza" }
        },
        "Hand Tossed - Meat Lovers Pizza": {
            small: { calories: 270, fat: 15, carbs: 26, protein: 12, serving: "1/8 of pizza" },
            medium: { calories: 290, fat: 16, carbs: 28, protein: 13, serving: "1/8 of pizza" },
            large: { calories: 310, fat: 17, carbs: 30, protein: 14, serving: "1/8 of pizza" }
        },
        "Brooklyn Style - Cheese": {
            small: { calories: 180, fat: 6, carbs: 24, protein: 7, serving: "1/6 of pizza" },
            medium: { calories: 200, fat: 7, carbs: 26, protein: 8, serving: "1/6 of pizza" },
            large: { calories: 220, fat: 8, carbs: 28, protein: 9, serving: "1/6 of pizza" }
        },
        "Thin Crust - Cheese": {
            small: { calories: 170, fat: 6, carbs: 22, protein: 7, serving: "1/8 of pizza" },
            medium: { calories: 190, fat: 7, carbs: 24, protein: 8, serving: "1/8 of pizza" },
            large: { calories: 210, fat: 8, carbs: 26, protein: 9, serving: "1/8 of pizza" }
        }
    },
    sides: {
        "Breadsticks": {
            small: { calories: 120, fat: 4, carbs: 18, protein: 3, serving: "1 stick" },
            medium: { calories: 120, fat: 4, carbs: 18, protein: 3, serving: "1 stick" },
            large: { calories: 120, fat: 4, carbs: 18, protein: 3, serving: "1 stick" }
        },
        "Parmesan Bread Bites": {
            small: { calories: 90, fat: 3, carbs: 13, protein: 2, serving: "4 pieces" },
            medium: { calories: 90, fat: 3, carbs: 13, protein: 2, serving: "4 pieces" },
            large: { calories: 90, fat: 3, carbs: 13, protein: 2, serving: "4 pieces" }
        },
        "Stuffed Cheesy Bread": {
            small: { calories: 140, fat: 6, carbs: 17, protein: 5, serving: "1 piece" },
            medium: { calories: 140, fat: 6, carbs: 17, protein: 5, serving: "1 piece" },
            large: { calories: 140, fat: 6, carbs: 17, protein: 5, serving: "1 piece" }
        },
        "Chicken Wings": {
            small: { calories: 80, fat: 5, carbs: 1, protein: 7, serving: "1 wing" },
            medium: { calories: 80, fat: 5, carbs: 1, protein: 7, serving: "1 wing" },
            large: { calories: 80, fat: 5, carbs: 1, protein: 7, serving: "1 wing" }
        },
        "Chicken Alfredo": {
            small: { calories: 320, fat: 12, carbs: 35, protein: 16, serving: "1/2 bowl" },
            medium: { calories: 640, fat: 24, carbs: 70, protein: 32, serving: "1 bowl" },
            large: { calories: 960, fat: 36, carbs: 105, protein: 48, serving: "1.5 bowls" }
        },
        "Pasta Primavera": {
            small: { calories: 280, fat: 8, carbs: 42, protein: 12, serving: "1/2 bowl" },
            medium: { calories: 560, fat: 16, carbs: 84, protein: 24, serving: "1 bowl" },
            large: { calories: 840, fat: 24, carbs: 126, protein: 36, serving: "1.5 bowls" }
        }
    },
    desserts: {
        "Chocolate Lava Crunch Cake": {
            small: { calories: 350, fat: 18, carbs: 45, protein: 4, serving: "1 cake" },
            medium: { calories: 350, fat: 18, carbs: 45, protein: 4, serving: "1 cake" },
            large: { calories: 350, fat: 18, carbs: 45, protein: 4, serving: "1 cake" }
        },
        "Marbled Cookie Brownie": {
            small: { calories: 190, fat: 9, carbs: 26, protein: 2, serving: "1 brownie" },
            medium: { calories: 190, fat: 9, carbs: 26, protein: 2, serving: "1 brownie" },
            large: { calories: 190, fat: 9, carbs: 26, protein: 2, serving: "1 brownie" }
        },
        "Cinnamon Bread Twists": {
            small: { calories: 160, fat: 6, carbs: 24, protein: 3, serving: "1 twist" },
            medium: { calories: 160, fat: 6, carbs: 24, protein: 3, serving: "1 twist" },
            large: { calories: 160, fat: 6, carbs: 24, protein: 3, serving: "1 twist" }
        },
        "Dessert Shots": {
            small: { calories: 120, fat: 5, carbs: 18, protein: 1, serving: "1 shot" },
            medium: { calories: 120, fat: 5, carbs: 18, protein: 1, serving: "1 shot" },
            large: { calories: 120, fat: 5, carbs: 18, protein: 1, serving: "1 shot" }
        }
    },
    drinks: {
        "Coca-Cola": {
            small: { calories: 140, fat: 0, carbs: 39, protein: 0, serving: "20 oz" },
            medium: { calories: 210, fat: 0, carbs: 58, protein: 0, serving: "30 oz" },
            large: { calories: 280, fat: 0, carbs: 77, protein: 0, serving: "40 oz" }
        },
        "Diet Coke": {
            small: { calories: 0, fat: 0, carbs: 0, protein: 0, serving: "20 oz" },
            medium: { calories: 0, fat: 0, carbs: 0, protein: 0, serving: "30 oz" },
            large: { calories: 0, fat: 0, carbs: 0, protein: 0, serving: "40 oz" }
        },
        "Sprite": {
            small: { calories: 140, fat: 0, carbs: 38, protein: 0, serving: "20 oz" },
            medium: { calories: 210, fat: 0, carbs: 57, protein: 0, serving: "30 oz" },
            large: { calories: 280, fat: 0, carbs: 76, protein: 0, serving: "40 oz" }
        },
        "Fanta Orange": {
            small: { calories: 150, fat: 0, carbs: 41, protein: 0, serving: "20 oz" },
            medium: { calories: 220, fat: 0, carbs: 62, protein: 0, serving: "30 oz" },
            large: { calories: 290, fat: 0, carbs: 83, protein: 0, serving: "40 oz" }
        },
        "Lemonade": {
            small: { calories: 120, fat: 0, carbs: 32, protein: 0, serving: "20 oz" },
            medium: { calories: 180, fat: 0, carbs: 48, protein: 0, serving: "30 oz" },
            large: { calories: 240, fat: 0, carbs: 64, protein: 0, serving: "40 oz" }
        },
        "Water": {
            small: { calories: 0, fat: 0, carbs: 0, protein: 0, serving: "20 oz" },
            medium: { calories: 0, fat: 0, carbs: 0, protein: 0, serving: "30 oz" },
            large: { calories: 0, fat: 0, carbs: 0, protein: 0, serving: "40 oz" }
        }
    }
};

// Application state
let selectedItems = [];
let isDarkMode = false;

// DOM elements
let themeToggle;
let resetBtn;
let copyResultsBtn;
let shareResultsBtn;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateMenuItems();
    setupEventListeners();
    updateNutritionSummary();
    loadThemePreference();
}

function populateMenuItems() {
    // Populate pizzas
    const pizzaContainer = document.getElementById('pizza-items');
    Object.keys(nutritionData.pizzas).forEach(pizzaName => {
        pizzaContainer.appendChild(createMenuItem(pizzaName, 'pizzas'));
    });

    // Populate sides
    const sidesContainer = document.getElementById('sides-items');
    Object.keys(nutritionData.sides).forEach(sideName => {
        sidesContainer.appendChild(createMenuItem(sideName, 'sides'));
    });

    // Populate desserts
    const dessertsContainer = document.getElementById('desserts-items');
    Object.keys(nutritionData.desserts).forEach(dessertName => {
        dessertsContainer.appendChild(createMenuItem(dessertName, 'desserts'));
    });

    // Populate drinks
    const drinksContainer = document.getElementById('drinks-items');
    Object.keys(nutritionData.drinks).forEach(drinkName => {
        drinksContainer.appendChild(createMenuItem(drinkName, 'drinks'));
    });
}

function createMenuItem(itemName, category) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'menu-item';
    
    itemDiv.innerHTML = `
        <div class="item-header">
            <input type="checkbox" id="${itemName.replace(/\s+/g, '-')}" data-item="${itemName}" data-category="${category}">
            <label for="${itemName.replace(/\s+/g, '-')}" class="item-label">${itemName}</label>
        </div>
        <div class="portion-selector">
            <select class="portion-select" data-item="${itemName}" data-category="${category}">
                <option value="small">Small</option>
                <option value="medium" selected>Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    `;
    
    return itemDiv;
}

function setupEventListeners() {
    // Theme toggle
    themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Reset button
    resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', resetCalculator);

    // Copy results
    copyResultsBtn = document.getElementById('copy-results');
    copyResultsBtn.addEventListener('click', copyResults);

    // Share results
    shareResultsBtn = document.getElementById('share-results');
    shareResultsBtn.addEventListener('click', shareResults);

    // Checkbox change events
    document.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox') {
            handleItemSelection(e.target);
        }
    });

    // Portion size change events
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('portion-select')) {
            handlePortionChange(e.target);
        }
    });
}

function handleItemSelection(checkbox) {
    const itemName = checkbox.dataset.item;
    const category = checkbox.dataset.category;
    const portionSelect = document.querySelector(`select[data-item="${itemName}"]`);
    const portion = portionSelect ? portionSelect.value : 'medium';

    if (checkbox.checked) {
        // Add item to selected items
        const nutritionInfo = nutritionData[category][itemName][portion];
        selectedItems.push({
            name: itemName,
            category: category,
            portion: portion,
            nutrition: nutritionInfo
        });
    } else {
        // Remove item from selected items
        selectedItems = selectedItems.filter(item => 
            !(item.name === itemName && item.category === category)
        );
    }

    updateNutritionSummary();
    updateSelectedItemsList();
}

function handlePortionChange(selectElement) {
    const itemName = selectElement.dataset.item;
    const category = selectElement.dataset.category;
    const newPortion = selectElement.value;

    // Find the item in selectedItems and update its portion
    const itemIndex = selectedItems.findIndex(item => 
        item.name === itemName && item.category === category
    );

    if (itemIndex !== -1) {
        // Update the nutrition info for the new portion
        const nutritionInfo = nutritionData[category][itemName][newPortion];
        selectedItems[itemIndex].portion = newPortion;
        selectedItems[itemIndex].nutrition = nutritionInfo;
        
        updateNutritionSummary();
        updateSelectedItemsList();
    }
}

function updateNutritionSummary() {
    const totals = selectedItems.reduce((acc, item) => {
        acc.calories += item.nutrition.calories;
        acc.fat += item.nutrition.fat;
        acc.carbs += item.nutrition.carbs;
        acc.protein += item.nutrition.protein;
        return acc;
    }, { calories: 0, fat: 0, carbs: 0, protein: 0 });

    document.getElementById('total-calories').textContent = Math.round(totals.calories);
    document.getElementById('total-fat').textContent = `${Math.round(totals.fat)}g`;
    document.getElementById('total-carbs').textContent = `${Math.round(totals.carbs)}g`;
    document.getElementById('total-protein').textContent = `${Math.round(totals.protein)}g`;
}

function updateSelectedItemsList() {
    const selectedItemsList = document.getElementById('selected-items-list');
    
    if (selectedItems.length === 0) {
        selectedItemsList.innerHTML = '<p class="no-items">No items selected</p>';
        return;
    }

    selectedItemsList.innerHTML = selectedItems.map(item => `
        <div class="selected-item">
            <div class="item-info">
                <span class="item-name">${item.name}</span>
                <span class="item-portion">${item.portion} - ${item.nutrition.serving}</span>
            </div>
            <div class="item-nutrition">
                <span class="item-calories">${item.nutrition.calories} cal</span>
            </div>
        </div>
    `).join('');
}

function resetCalculator() {
    selectedItems = [];
    
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset all portion selectors to medium
    document.querySelectorAll('.portion-select').forEach(select => {
        select.value = 'medium';
    });
    
    updateNutritionSummary();
    updateSelectedItemsList();
    showToast('Calculator reset successfully');
}

function copyResults() {
    if (selectedItems.length === 0) {
        showToast('No items to copy');
        return;
    }

    const totals = selectedItems.reduce((acc, item) => {
        acc.calories += item.nutrition.calories;
        acc.fat += item.nutrition.fat;
        acc.carbs += item.nutrition.carbs;
        acc.protein += item.nutrition.protein;
        return acc;
    }, { calories: 0, fat: 0, carbs: 0, protein: 0 });

    const text = `Domino's Nutrition Summary:
Total Calories: ${Math.round(totals.calories)}
Total Fat: ${Math.round(totals.fat)}g
Total Carbs: ${Math.round(totals.carbs)}g
Total Protein: ${Math.round(totals.protein)}g

Selected Items:
${selectedItems.map(item => `- ${item.name} (${item.portion}): ${item.nutrition.calories} cal`).join('\n')}`;

    navigator.clipboard.writeText(text).then(() => {
        showToast('Results copied to clipboard');
    }).catch(() => {
        showToast('Failed to copy results');
    });
}

function shareResults() {
    if (selectedItems.length === 0) {
        showToast('No items to share');
        return;
    }

    const totals = selectedItems.reduce((acc, item) => {
        acc.calories += item.nutrition.calories;
        acc.fat += item.nutrition.fat;
        acc.carbs += item.nutrition.carbs;
        acc.protein += item.nutrition.protein;
        return acc;
    }, { calories: 0, fat: 0, carbs: 0, protein: 0 });

    const shareText = `My Domino's order has ${Math.round(totals.calories)} calories, ${Math.round(totals.fat)}g fat, ${Math.round(totals.carbs)}g carbs, and ${Math.round(totals.protein)}g protein!`;

    if (navigator.share) {
        navigator.share({
            title: 'Domino\'s Nutrition Calculator',
            text: shareText,
            url: window.location.href
        }).catch(() => {
            copyResults();
        });
    } else {
        copyResults();
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const icon = themeToggle.querySelector('i');
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    
    localStorage.setItem('darkMode', isDarkMode);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}