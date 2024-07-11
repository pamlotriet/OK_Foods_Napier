# OK Foods and Liquor Napier Specials

## Description
This Angular project is designed for OK Foods and Liquor Napier. It displays monthly specials, showcasing various products with promotional images managed using Azure Blob Storage. The application is user-friendly and aims to keep customers informed about the latest deals and discounts available at OK Foods and Liquor Napier.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Features
- Display monthly specials with images.
- Use Azure Blob Storage for efficient image management.
- Responsive design for optimal viewing on various devices.
- Easy navigation through different categories of specials.
- Styled using Tailwind CSS for modern UI design.
- Enhanced UI components with PrimeNG and icons with PrimeIcons.
- Code formatted with Prettier and linted with ESLint for consistency and quality.

## Installation

### Prerequisites
- Node.js (=18.x)
- Angular CLI (>=18.x)
- Azure account for Blob Storage

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/okfoods-liquor-napier-specials.git
2. Change directory
    ```bash
   cd ok-foods
4. Install node modules
   ```bash
   npm install
6. Start the application server
   ```bash
   ng serve

## Usage 

### Development Server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

### Azure Blob Storage Configuration
Ensure you have your Azure Blob Storage setup. Update the configuration settings in the environment.ts file with your Azure storage account details.

## Configuration

### Environment Variables
Set up the following environment variables in the src/environments/environment.ts file:
```bash
   export const environment = {
      foodSpecialsSas:'your-food-specials-image-container-sas',
      foodSpecialsUrl: 'your-food-specials-image-container-url',
      liquorSpecialsSas: 'your-liquor-specials-image-container-sas',
      liquorSpecialsUrl: 'your-liquor-specials-image-container-url',
      generalSas: 'your-general-image-container-sas',
      generalUrl: 'your-general-image-container-url',
      ownerName: 'your-owner-image-name',
      managerName: 'your-manager-image-name',
      foodImageName: 'your-food-card-image-name',
      liquorImageName: 'your-liquor-card-image-name',
      contactImageName: 'your-contact-card-image-name',
   };
```

### Prettier and ESLint
1. This project uses Prettier and ESLint for code formatting and linting. To use these tools:
2. Ensure you have the necessary configuration files (.prettierrc, .eslintrc.json, etc.) in the project directory.
3. Run Prettier to format your code: npm run prettier
4. Run ESLint to lint your code: ng lint
5. Prettier and ESLint will also run before committing to a repository

## Technologies Used
1. Angular
2. Tailwind CSS
3. PrimeNG
4. PrimeIcons
5. Azure Blob Storage
6. TypeScript
7. HTML5 & CSS3
8. Prettier
9. ESLint

## Contact
For any inquiries or feedback, please contact:

- Name: Pamela Lotriet
- Email: pamela.lotriet@gmail.com
- GitHub: pamlotriet


