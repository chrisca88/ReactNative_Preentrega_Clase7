# Ecommerce App Readme

Welcome to the Ecommerce App! This application provides a platform for users to shop for various items across different categories. Below, you'll find an overview of its features and the dependencies used in the project.

## Features

### Authentication
- **Login**: Users can log in with their username and password.
- **Registration**: New users can register for an account.

### Main Dashboard
- **Categories**: Displays different product categories.
- **Header**: Contains options for signing out and returning to the previous screen.
- **Market**: Shows available items for purchase.
- **Shopping Cart**: Displays the user's current shopping cart.
- **Order List**: Lists the user's previous orders.
- **User Profile**: Provides information about the logged-in user.

### Product Listing
- **Category Selection**: Users can view items within a specific category.
- **Item Details**: Clicking on an item reveals its photos, including a primary image and secondary thumbnails.
- **Description and Price**: Shows item details, including description and price.
- **Add to Cart**: Allows users to add items to their shopping cart.

### Shopping Cart
- **Cart Contents**: Displays the products added to the cart.
- **Remove Items**: Users can remove items from the cart.
- **Checkout**: Allows users to confirm their cart items, completing the purchase.

### Order History
- **Order List**: Lists all previous orders.
- **Order Details**: Shows products within an order, individual prices, and the total amount.

### User Profile
- **Profile Image**: Displays the user's profile image.
- **Upload Image**: Lets users add a new profile picture.
- **Set Location**: Allows users to update their location.

## Dependencies

The Ecommerce App uses the following dependencies:

```json
"dependencies": {
    "@expo/webpack-config": "^18.0.1",
    "@react-navigation/bottom-tabs": "^6.5.8",
    "@react-navigation/native": "^6.1.7",
    "@react-navigation/native-stack": "^6.9.13",
    "@reduxjs/toolkit": "^1.9.5",
    "@types/react-native": "^0.72.2",
    "expo": "~48.0.18",
    "expo-font": "~11.1.1",
    "expo-image-picker": "~14.1.1",
    "expo-location": "~15.1.1",
    "expo-media-library": "~15.2.3",
    "expo-sqlite": "~11.1.1",
    "expo-status-bar": "~1.4.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.71.8",
    "react-native-material-cards": "^1.0.16",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "react-native-web": "~0.18.10",
    "react-query": "^3.39.3",
    "react-redux": "^8.1.1"
  }

  These dependencies are crucial for the functionality and user experience of the app. Be sure to have them installed and properly configured to run the application successfully.

Feel free to explore the codebase and enhance the app further as needed. Happy shopping! 🛒🛍️