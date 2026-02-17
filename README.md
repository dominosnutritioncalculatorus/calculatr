# Domino's Nutrition Calculator

A comprehensive, responsive web application that allows users to calculate nutritional information for Domino's Pizza menu items. Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and performance.

## 🍕 Features

### Core Functionality
- **Menu Selection**: Interactive checkboxes for pizzas, sides, desserts, and drinks
- **Portion Control**: Small, medium, and large size options for each item
- **Real-time Calculations**: Instant updates of calories, fat, carbohydrates, and protein
- **Running Total**: Live nutrition summary that updates as items are selected
- **Selected Items List**: Visual representation of all chosen items with portion sizes

### User Experience
- **Mobile-First Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Intuitive Interface**: Clean, modern design with visual feedback
- **Smooth Animations**: Subtle transitions and hover effects
- **Toast Notifications**: User-friendly feedback for actions

### Utility Features
- **Reset Function**: Clear all selections with one click
- **Copy Results**: Copy nutrition summary to clipboard
- **Share Results**: Share nutrition info via native sharing or copy fallback
- **Sticky Summary**: Nutrition summary stays visible while scrolling

### Data & Accuracy
- **Comprehensive Database**: 30+ menu items across 4 categories
- **Portion-Specific Data**: Accurate nutrition per serving size
- **Professional Source**: Data sourced from https://dominosnutritioncalculator.us/
- **Regular Updates**: Easy to extend with new menu items

## 🎯 How to Use

1. **Select Menu Items**: Check the boxes next to items you want to include
2. **Choose Portions**: Use dropdowns to select small, medium, or large sizes
3. **View Nutrition**: Watch the summary update in real-time
4. **Manage Results**: Use copy/share buttons to save or share your calculations
5. **Reset**: Click reset to clear all selections and start over

## 📊 Nutrition Tracking

The calculator tracks:
- **Calories**: Total energy content
- **Total Fat**: Including saturated and trans fats
- **Carbohydrates**: Including dietary fiber and sugars
- **Protein**: Essential amino acids

All values are displayed in grams or calories with appropriate rounding for readability.

## 🎨 Design Features

### Visual Design
- **Modern Color Scheme**: Professional blues and oranges
- **Icon Integration**: Font Awesome icons for visual clarity
- **Gradient Accents**: Subtle gradients for visual appeal
- **Card-Based Layout**: Clean separation of content sections

### Responsiveness
- **Desktop**: Two-column layout with sticky summary
- **Tablet**: Single column with maintained functionality
- **Mobile**: Touch-optimized interface with appropriate sizing

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Good color contrast ratios
- **Focus Indicators**: Clear focus states for interactive elements

## 🛠️ Technical Implementation

### Frontend Architecture
- **Vanilla JavaScript**: No framework dependencies
- **CSS Custom Properties**: Themeable design system
- **Grid & Flexbox**: Modern CSS layout techniques
- **CSS Transitions**: Smooth animations and state changes

### Data Structure
- **JSON Nutrition Database**: Structured nutrition data by category and portion
- **State Management**: Centralized application state
- **Real-time Updates**: Event-driven UI updates
- **Local Storage**: Theme preference persistence

### Performance Optimizations
- **Minimal Dependencies**: Only essential external resources (fonts, icons)
- **Efficient DOM Updates**: Targeted updates to minimize reflows
- **Lazy Loading**: Components load as needed
- **Optimized Images**: SVG icons and CSS gradients

## 📱 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Adding New Menu Items
1. Edit the `nutritionData` object in `script.js`
2. Add items to appropriate category (pizzas, sides, desserts, drinks)
3. Include nutrition data for small, medium, and large portions
4. The UI will automatically populate with new items

### Modifying Nutrition Data
- Update values in the `nutritionData` object
- Ensure all portions (small, medium, large) have complete data
- Include serving size information for user clarity

### Styling Changes
- Modify CSS custom properties in `:root` for global changes
- Update color schemes by changing variable values
- Adjust responsive breakpoints for different screen sizes

## 📈 Future Enhancements

Potential improvements:
- **Allergen Information**: Display common allergens for each item
- **Custom Recipes**: Allow users to create custom pizza combinations
- **Nutrition Goals**: Set and track daily nutrition targets
- **Export Functionality**: Download results as PDF or CSV
- **More Menu Categories**: Add specialty items, sauces, and toppings
- **Nutrition Comparison**: Side-by-side item comparison
- **Historical Tracking**: Save and track orders over time

## ⚖️ Legal & Disclaimer

This calculator is an independent tool and is not affiliated with Domino's Pizza. Nutritional information is estimated based on publicly available data and may vary from actual values. Users should verify information with official sources when making dietary decisions.

Data source: https://dominosnutritioncalculator.us/

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

**Live Demo**: Access the calculator at [your-domain.com]  
**GitHub**: [repository-url]  
**Issues**: Report bugs and request features via GitHub Issues