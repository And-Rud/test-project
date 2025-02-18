# Order Management System

A web application for managing orders built with React and Node.js.

## Description

This project is an order management system that allows users to:

- View orders in a table format
- Create new orders
- Track order history
- Manage products and quantities

## Technologies Used

### Frontend

- React.js
- CSS
- JavaScript
- Fetch API

### Backend

- Node.js
- Express.js
- MySQL
- Sequelize ORM

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/And-Rud/test-project.git
   cd test-project
   \`\`\`

2. Install dependencies:

For backend:
\`\`\`bash
cd api
npm install
\`\`\`

For frontend:
\`\`\`bash
cd client
npm install
\`\`\`

3. Set up environment variables:

Create \`.env\` file in api folder:
\`\`\`
DB_HOST=localhost
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
\`\`\`

Create \`.env\` file in client folder:
\`\`\`
NODE_OPTIONS=--openssl-legacy-provider
\`\`\`

4. Start the application:

Backend:
\`\`\`bash
cd api
npm start
\`\`\`

Frontend:
\`\`\`bash
cd client
npm start
\`\`\`

## Usage

- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:3001

## Project Structure

\`\`\`
project/
├── api/ # Backend
│ ├── controllers/  
│ ├── models/  
│ ├── routes/  
│ └── utils/  
└── client/ # Frontend
├── public/  
 └── src/  
 ├── components/
├── services/
└── styles/
\`\`\`

## Features

- Order table display
- Order creation
- Database integration
- RESTful API
- Responsive design

## API Endpoints

- GET /api/orders - Get all orders
- POST /api/orders - Create new order
- GET /api/orders/:id - Get specific order

## Author

Andrii Rudyk

## License

This project is licensed under the MIT License
