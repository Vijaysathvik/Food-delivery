# 🍽️ Food Delivery – Full Stack App

## 📖 About

This repository includes the full-stack implementation of a food delivery platform, including:

- **Backend API** (Node.js + Express + MongoDB)
- **Frontend** (React app for users to browse and order)
- **Admin Dashboard** (React + Vite app to manage food items, orders, etc.)

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, JWT, Stripe
- **Frontend:** React.js, Axios, React Router, Context API
- **Admin:** React + Vite, Axios
- **Styling:** CSS Modules, Plain CSS

---

## 🔐 Environment Variables

### Backend (`/backend/.env`)
| Variable              | Description                        |
|-----------------------|------------------------------------|
| `PORT`                | Server port                        |
| `MONGO_URI`           | MongoDB connection string          |
| `JWT_SECRET`          | Secret for JWT token signing       |
| `STRIPE_SECRET_KEY`   | Stripe secret for payment gateway  |

### Frontend (`/frontend/.env`)
| Variable                        | Description                      |
|---------------------------------|----------------------------------|
| `REACT_APP_STRIPE_PUBLIC_KEY`   | Stripe public key for checkout   |

### Admin (`/admin/.env`)
| Variable           | Description                         |
|--------------------|-------------------------------------|
| (If needed)        | Add any admin env variables here     |

---

## 📡 API Routes

### 🔐 Auth (`/api/user`)
| Method | Route         | Description              |
|--------|---------------|--------------------------|
| POST   | `/register`   | Register a new user      |
| POST   | `/login`      | User login               |
| GET    | `/profile`    | Get user profile         |

### 🍕 Food (`/api/food`)
| Method | Route         | Description              |
|--------|---------------|--------------------------|
| GET    | `/`           | Get all food items       |
| POST   | `/add`        | Add a new food item      |
| PUT    | `/edit/:id`   | Edit a food item         |
| DELETE | `/delete/:id` | Delete a food item       |

### 🛒 Cart (`/api/cart`)
| Method | Route         | Description              |
|--------|---------------|--------------------------|
| POST   | `/add`        | Add item to cart         |
| GET    | `/`           | Get user cart            |
| DELETE | `/remove/:id` | Remove item from cart    |

### 📦 Order (`/api/order`)
| Method | Route          | Description              |
|--------|----------------|--------------------------|
| POST   | `/place`       | Place a new order        |
| GET    | `/myorders`    | Get current user orders  |
| PUT    | `/update/:id`  | Update order status      |

---

## 🌐 Frontend Routes (`/frontend`)

| Path              | Description                        |
|-------------------|------------------------------------|
| `/`               | Home page showing all food items   |
| `/cart`           | User cart page                     |
| `/login`          | Login form                         |
| `/register`       | User registration form             |
| `/placeorder`     | Checkout and address input         |
| `/myorders`       | View previous orders               |

---

## 🛠 Admin Routes (`/admin`)

| Path               | Description                             |
|--------------------|-----------------------------------------|
| `/`                | Admin dashboard home                    |
| `/orders`          | View and update customer orders         |
| `/add`             | Add new food item                       |
| `/list`            | List/edit/delete existing food items    |

---

Backend
cd backend
npm install

Create a .env file in the backend/ folder and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Then start the server:

npm start

Frontend (User App)
cd frontend
npm install

Create a .env file in the frontend/ folder and add the following:

REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key

Then start the frontend server:

npm start

Admin Dashboard
cd admin
npm install

If your admin panel needs any environment variables, create a .env file in the admin/ folder.

Then run:

npm run dev

Stripe Test Card (Optional)
Use the following card for test payments:

Card Number: 4242 4242 4242 4242
Expiry Date: Any future date
CVC: Any 3 digits
ZIP: Any 5-digit number

