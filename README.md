# 🦐 Salty Shore - Full-Stack Seafood Restaurant Application

A modern, full-stack web application for a seafood restaurant with online ordering, cart management, and admin dashboard.

![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Admin Dashboard](#admin-dashboard)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### Customer Features
- 🏠 **Home Page** - Welcome page with restaurant overview
- 🍽️ **Menu Page** - Browse seafood categories (Shrimp, Lobster, Crab, Fish, etc.)
- 📖 **Seafood Detail Page** - Detailed view of dishes with descriptions and prices
- 🛒 **Shopping Cart** - Add/remove items, update quantities
- 💾 **Persistent Cart** - Cart data saved in localStorage
- 📦 **Order Placement** - Complete checkout with delivery details
- 🎨 **Responsive Design** - Works on desktop, tablet, and mobile

### Admin Features
- 🔐 **Secure Login** - Password-protected admin access
- 📊 **Order Management** - View all customer orders
- ✅ **Order Status Updates** - Update order status (Pending → Confirmed → Preparing → Delivered)
- 👤 **Customer Details** - View customer information and delivery address
- 🔄 **Real-time Updates** - Orders sync with MongoDB database

## 🛠️ Tech Stack

### Frontend
- **React** 18.x - UI library
- **React Router** 6.x - Client-side routing
- **Context API** - State management
- **CSS3** - Styling with animations and gradients
- **LocalStorage** - Cart persistence

### Backend
- **Node.js** 22.x - Runtime environment
- **Express.js** 5.x - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** 8.x - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

```
Salty_Shore/
├── backend/
│   ├── models/
│   │   ├── Item.js          # Menu item schema
│   │   └── Order.js         # Order schema
│   ├── routes/
│   │   ├── items.js         # Menu items API routes
│   │   └── orders.js        # Orders API routes
│   ├── .env                 # Environment variables
│   ├── db.js                # MongoDB connection
│   ├── server.js            # Express server
│   └── package.json         # Backend dependencies
│
├── public/
│   ├── images/              # Seafood images
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js        # Navigation bar
│   │   └── ScrollToTop.js   # Scroll utility
│   ├── context/
│   │   └── CartContext.js   # Cart state management
│   ├── pages/
│   │   ├── HomePage.js      # Landing page
│   │   ├── MenuPage.js      # Seafood categories
│   │   ├── SeafoodDetail.js # Dish details
│   │   ├── DeliveryPage.js  # Order to home page
│   │   ├── CartPage.js      # Shopping cart
│   │   ├── AdminLogin.js    # Admin authentication
│   │   └── AdminOrders.js   # Order management
│   ├── services/
│   │   ├── itemsService.js  # Items API service
│   │   └── ordersService.js # Orders API service
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   └── index.js             # React entry point
│
└── package.json             # Frontend dependencies
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas/register)
- **Git** (optional) - [Download](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
cd C:\Users\franc\Downloads\fullstack
# Your project is already here: Salty_Shore/
```

### 2. Install Backend Dependencies

```bash
cd Salty_Shore/backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ..
npm install
```

## ⚙️ Configuration

### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (if not already created)
3. Click **"Database Access"** → Create a database user
   - Username: `saltyshore_user`
   - Password: `Salty`
   - Role: **Atlas admin**

4. Click **"Network Access"** → Add IP Address
   - Add your current IP or use `0.0.0.0/0` (allow from anywhere) for development

5. Get your connection string:
   - Click **"Connect"** on your cluster
   - Choose **"Connect your application"**
   - Copy the connection string

### 2. Backend Environment Variables

Create/update `.env` file in the `backend/` folder:

```env
PORT=5000
MONGODB_URI=mongodb+srv://saltyshore_user:Salty@cluster0.7nwa8in.mongodb.net/saltyshore?retryWrites=true&w=majority
```

**Important**: Replace the cluster address with your actual MongoDB Atlas cluster address.

### 3. DNS Configuration (If Connection Fails)

If you get DNS resolution errors, change your DNS to Google DNS:

1. Open **Network Settings**
2. Change DNS to:
   - Primary: `8.8.8.8`
   - Secondary: `8.8.4.4`
3. Restart your computer

## 🏃‍♂️ Running the Application

### Start Backend Server

Open Terminal 1 (PowerShell):

```powershell
cd C:\Users\franc\Downloads\fullstack\Salty_Shore\backend
node server.js
```

You should see:
```
🚀 Server running on http://localhost:5000
✅ MongoDB Connected Successfully!
```

### Start Frontend Development Server

Open Terminal 2 (new PowerShell window):

```powershell
cd C:\Users\franc\Downloads\fullstack\Salty_Shore
npm start
```

The React app will automatically open at: **http://localhost:3000**

### Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Menu Items API**: http://localhost:5000/api/items
- **Orders API**: http://localhost:5000/api/orders
- **Admin Dashboard**: http://localhost:3000/admin/login

## 📡 API Endpoints

### Menu Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all menu items |
| GET | `/api/items/:id` | Get single item by ID |
| POST | `/api/items` | Create new menu item |
| PUT | `/api/items/:id` | Update menu item |
| DELETE | `/api/items/:id` | Delete menu item |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get single order by ID |
| POST | `/api/orders` | Create new order |
| PATCH | `/api/orders/:id/status` | Update order status |
| DELETE | `/api/orders/:id` | Delete order |

### Example API Calls

**Create Order:**
```javascript
POST http://localhost:5000/api/orders
Content-Type: application/json

{
  "customerName": "John Doe",
  "phone": "1234567890",
  "address": "123 Main St, City",
  "pincode": "123456",
  "items": [
    {
      "name": "Spicy Lobster Curry",
      "price": 530,
      "quantity": 2,
      "img": "/images/lobster-curry.jpeg"
    }
  ],
  "totalAmount": 1060
}
```

**Update Order Status:**
```javascript
PATCH http://localhost:5000/api/orders/:orderId/status
Content-Type: application/json

{
  "status": "confirmed"
}
```

## 🔐 Admin Dashboard

### Access Admin Panel

1. Click **"👤 Admin"** in the navigation bar
2. Navigate to: **http://localhost:3000/admin/login**
3. Enter password: **`1234`**
4. Click **"Login"**

### Admin Features

- **View All Orders** - See complete order history
- **Customer Details** - Name, phone, address, pincode
- **Order Items** - View all items in each order
- **Total Amount** - See order totals
- **Status Management** - Update order status:
  - 🟡 **Pending** - New order
  - 🔵 **Confirmed** - Order accepted
  - 🟣 **Preparing** - Being prepared
  - 🟢 **Delivered** - Order completed
- **Logout** - Secure logout from admin panel

### Security Note

⚠️ **For Production**: Replace the hardcoded password with proper authentication:
- Use JWT tokens
- Implement user sessions
- Hash passwords with bcrypt
- Add role-based access control

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error

**Error**: `Could not connect to any servers in your MongoDB Atlas cluster`

**Solutions**:
- Check if your IP is whitelisted in MongoDB Atlas Network Access
- Use `0.0.0.0/0` to allow all IPs (development only)
- Verify your connection string in `.env`
- Change DNS to Google DNS (`8.8.8.8`)
- Wait 2-3 minutes after adding IP to whitelist

#### 2. DNS Resolution Failed

**Error**: `Name resolution of cluster0.7nwa8in.mongodb.net failed`

**Solution**:
```powershell
# Change DNS to Google DNS
# Windows: Network Settings → Properties → IPv4 → DNS
Primary: 8.8.8.8
Secondary: 8.8.4.4

# Flush DNS cache
ipconfig /flushdns
ipconfig /registerdns
Restart-Service Dnscache
```

#### 3. Port Already in Use

**Error**: `Port 5000 is already in use`

**Solutions**:
```powershell
# Find and kill the process
netstat -ano | findstr :5000
taskkill /PID <process_id> /F

# Or change the port in backend/.env
PORT=5001
```

#### 4. Cart Items Not Showing

**Solution**:
```javascript
// Open browser console (F12) and run:
localStorage.clear()
// Then refresh the page (Ctrl + Shift + R)
```

#### 5. React Scripts Not Found

**Error**: `'react-scripts' is not recognized`

**Solution**:
```powershell
cd Salty_Shore
npm install
npm start
```

#### 6. Deprecated MongoDB Driver Warnings

**Warning**: `useNewUrlParser is a deprecated option`

**Solution**: Update `backend/db.js` to remove deprecated options:
```javascript
await mongoose.connect(process.env.MONGODB_URI);
```

### Debug Mode

Enable detailed logging by checking browser console (F12):
- Cart operations are logged
- API responses are logged
- Error messages are displayed

## 🔄 Database Schema

### Order Schema

```javascript
{
  customerName: String (required),
  phone: String (required),
  address: String (required),
  pincode: String (required),
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      img: String,
      desc: String
    }
  ],
  totalAmount: Number (required),
  status: String (default: "pending"),
  createdAt: Date (default: Date.now)
}
```

### Item Schema

```javascript
{
  name: String (required),
  desc: String (required),
  price: Number (required),
  img: String (required),
  category: String (required),
  createdAt: Date (default: Date.now)
}
```

## 🚀 Future Enhancements

### Planned Features

- [ ] **User Authentication** - Customer login/signup
- [ ] **Order Tracking** - Real-time order status updates
- [ ] **Payment Integration** - Razorpay/Stripe payment gateway
- [ ] **Email Notifications** - Order confirmations via email
- [ ] **Admin Analytics** - Sales reports and charts
- [ ] **Review System** - Customer ratings and reviews
- [ ] **Search & Filter** - Enhanced menu search
- [ ] **Favorites** - Save favorite dishes
- [ ] **Promo Codes** - Discount and coupon system
- [ ] **Multi-language Support** - i18n implementation

## 📝 License

This project is created for educational purposes.

## 👥 Contact

For questions or support, please reach out through the repository.

---

## 🎉 Credits

Built with ❤️ using React, Node.js, Express, and MongoDB Atlas.

**Salty Shore** - Bringing the ocean's bounty to your table! 🦐🦞🦀🐟

---

### Quick Start Commands

```powershell
# Terminal 1 - Backend
cd C:\Users\franc\Downloads\fullstack\Salty_Shore\backend
node server.js

# Terminal 2 - Frontend  
cd C:\Users\franc\Downloads\fullstack\Salty_Shore
npm start

# Admin Access
# URL: http://localhost:3000/admin/login
# Password: 1234
```

### Testing Order Flow

1. **Add Items to Cart**
   - Browse menu or delivery page
   - Click "Add to Cart" on items
   
2. **Place Order**
   - Go to Cart page
   - Fill in delivery details
   - Click "Place Order"
   
3. **View as Admin**
   - Click "👤 Admin" in navbar
   - Login with password: `1234`
   - View and manage orders

---

**Status**: ✅ Backend Running | ✅ Frontend Running | ✅ Database Connected | ✅ Admin Dashboard Active
