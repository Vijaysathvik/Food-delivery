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

Food-delivery
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── cartController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   ├── foodModel.js
│   │   ├── orderModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── cartRoute.js
│   │   ├── foodRoute.js
│   │   ├── orderRoute.js
│   │   └── userRoute.js
│   └── uploads
│
├── frontend
│   ├── public
│   └── src
│       ├── assets
│       ├── components
│       ├── Context
│       ├── pages
│       │   ├── Cart
│       │   ├── Home
│       │   ├── MyOrders
│       │   ├── PlaceOrder
│       │   │   ├── PlaceOrder.jsx
│       │   │   └── PlaceOrder.css
│       │   └── Verify
│       ├── index.css
│       └── main.jsx
│
├── admin
│   ├── public
│   └── src
│       ├── assets
│       ├── components
│       │   ├── Navbar
│       │   └── Sidebar
│       ├── pages
│       │   ├── Add
│       │   ├── List
│       │   └── Orders
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx



