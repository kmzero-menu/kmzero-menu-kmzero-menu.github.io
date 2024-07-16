# Restaurant Menu Application

This project is a React-based web application designed to display the menu of a restaurant. The application organizes the menu into categories and allows users to smoothly navigate through different sections. It also features a stylish navbar with social media integration.

## Live Demo
You can view the live version of the application at: [https://kmzero-menu.github.io/](https://kmzero-menu.github.io/)

## Project Structure

The project is organized into the following key components:

### Components

1. **App.js**
   - The main component that initializes the application.
   - Imports the menu data and defines the categories.
   - Renders the `Navbar` and `MenuSection` components.

2. **Navbar.js**
   - Renders the navigation bar with links to different menu categories.
   - Includes an Instagram icon with a link to the restaurant's Instagram page.

3. **MenuSection.js**
   - Renders a collapsible section for each menu category.
   - Uses FontAwesome icons to represent each category.

4. **MenuItem.js**
   - Renders individual menu items, displaying their name, price, and description.

### Styles

The project includes CSS files to style the various components:

- `index.css`
- `App.css`
- `Navbar.css`
- `MenuSection.css`
- `MenuItem.css`

### Data

The menu data is stored in JSON files, which are imported and used within the application:

- `sandwiches.json`
- `drinks.json`
- `fried.json`
- `beers.json`
- `dishes.json`

## How It Works

1. **Navbar Navigation**
   - The `Navbar` component receives the categories as props and generates links for each category.
   - Clicking on a category link scrolls the view to the corresponding section smoothly using the `scrollIntoView` method.

2. **Menu Sections**
   - The `MenuSection` component renders a section for each category.
   - Each section is collapsible, allowing users to toggle the visibility of the menu items within.

3. **Menu Items**
   - The `MenuItem` component renders the details of each menu item, including the name, price, and description.

## Deployment

- **Master Branch**: The `master` branch contains the deployed application, which is available via GitHub Pages.
- **Dev Branch**: The `dev` branch contains the development code, where new features and updates are implemented.

## Installation and Development

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kmzero-menu/kmzero-menu.github.io.git
   ```

2. Navigate to the project directory:
   ```bash
   cd kmzero-menu.github.io
   ```

3. Switch to the `dev` branch:
   ```bash
   git checkout dev
   ```

4. Install the dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

For any questions or contributions, feel free to open an issue or submit a pull request. Enjoy browsing the restaurant menu!