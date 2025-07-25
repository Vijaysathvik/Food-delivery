# 🍽️ Full‑Stack Food Delivery App

This is a full‑stack food delivery application built using React (frontend), Node.js/Express (backend), MongoDB (database), and Stripe (payment). Users can browse restaurants, place orders, make payments, and track order status in real time.

---

## 🧩 Tech Stack

- **Frontend:** React.js (create‑react‑app), Axios
- **Backend:** Node.js, Express.js, REST APIs
- **Database:** MongoDB (Mongoose ODM)
- **Payments:** Stripe Integration
- **Authentication:** JWT‑based login/registration
- **Routing:** React Router

---

## ⚙️ Key Features

- Browse restaurants and menus
- Add items to cart and checkout
- Secure user authentication (signup/login)
- Stripe payment processing
- Real-time order status updates
- Admin dashboard for order and menu management

---

## 📁 Project Structure

Food-delivery/
│
├── backend/                          # Node.js + Express backend
│   ├── config/                       # DB config
│   │   └── db.js
│   ├── controllers/                 # Logic for handling requests
│   │   ├── cartController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/                  # Auth middleware
│   │   └── auth.js
│   ├── models/                      # Mongoose models
│   │   ├── foodModel.js
│   │   ├── orderModel.js
│   │   └── userModel.js
│   ├── routes/                      # Express routes
│   │   ├── cartRoute.js
│   │   ├── foodRoute.js
│   │   ├── orderRoute.js
│   │   └── userRoute.js
│   └── uploads/                     # Static folder for uploaded assets (e.g., images)
│
├── frontend/                         # React client app for customers
│   ├── public/
│   ├── src/
│   │   ├── assets/                  # Images, icons, etc.
│   │   ├── components/             # Reusable UI components
│   │   ├── Context/                # Global context providers (Auth, Cart)
│   │   ├── pages/                  # User-facing pages
│   │   │   ├── Cart/
│   │   │   ├── Home/
│   │   │   ├── MyOrders/
│   │   │   ├── PlaceOrder/         # Contains PlaceOrder.jsx, PlaceOrder.css
│   │   │   └── Verify/
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── index.html
│   ├── .gitignore
│   └── package.json
│
├── admin/                            # Admin dashboard in React + Vite
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   └── Sidebar/
│   │   ├── pages/
│   │   │   ├── Add/
│   │   │   ├── List/
│   │   │   └── Orders/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
