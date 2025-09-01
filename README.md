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

├── public/

│ └── index.html # Frontend (UI)

├── server.js # Backend (Express server)

├── package.json # Project metadata & dependencies

├── .gitignore # Ignored files/folders

└── README.md # Project documentation

---
## 🚀 Getting Started 
### 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/platform-verification-app.git
   cd platform-verification-app
2. **Install Dependencies**
   ```bash
   npm install
3. **Run the app**
   
   By default, the app will run at:
   👉 http://localhost:3000
   ```bash
   node server.js

**🔴 .gitignore (Important!)**

  Make sure you have a .gitignore file in your project root with:
   ```bash
   node_modules
   .env

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express  
- **Frontend:** HTML, CSS, JavaScript (inside `public/`)  
- **Security Check:** TLS/SSL validation  

---

## 📸 Screenshots
- **Homepage**  
- **Verification Result**  

*(Add your own screenshots in a `screenshots/` folder and update paths here.)*  

---

## 🙌 Contributing
Pull requests are welcome.  
For major changes, please open an issue first to discuss what you would like to change.  

---

## 📜 License
This project is licensed under the **MIT License**.  
Feel free to use and modify it for your own projects! 🚀
