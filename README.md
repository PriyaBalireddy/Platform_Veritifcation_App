# 🌐 Platform Verification App

A simple Node.js + Express application that verifies platforms by checking SSL certificates.  
The app validates SSL certificate details such as issuer, organization name, expiry date, and decides whether a platform is **real or fake**.

---

## 🚀 Features
- ✅ Check SSL certificate validity  
- ✅ Display certificate issuer (if present)  
- ✅ Show expiry date in `DD-MM-YYYY` format  
- ✅ Simple and clean UI (served via Express)  
- ✅ Runs entirely in a single `server.js` file  

---

## 📂 Project Structure
platform-verification-app/

│── node_modules/ # Ignored by git

│── .gitignore # Prevents node_modules and env files from being pushed

│── package.json # Dependencies and scripts

│── server.js # Main application file

│── README.md # Project documentation


---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/platform-verification-app.git
   cd platform-verification-app
2.**Install dependencies**
   ```bash
    npm install
3. **Run the app**
   ```bash
   node server.js

## 🛑 .gitignore (Important!)

   Make sure you have a .gitignore file in your project root with:

   ```bash
   node_modules
   .env
