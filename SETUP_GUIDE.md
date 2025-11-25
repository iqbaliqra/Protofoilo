# MERN Stack Portfolio Setup Guide

This guide will help you set up and run the complete MERN Stack Portfolio application with Backend, Dashboard, and Portfolio frontend.

## Prerequisites

Before starting, make sure you have installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)
- Git

## Project Structure

```
MERN_STACK_PORTFOLIO_WITH_ADMIN_PANEL/
├── backend/          # Node.js/Express backend
├── dashboard/        # React admin dashboard (Vite)
└── portfolio/        # React portfolio frontend (Vite)
```

## Setup Instructions

### 1. Backend Setup

#### Step 1.1: Install Dependencies
```bash
cd backend
npm install
```

#### Step 1.2: Configure Environment Variables

1. Create a `config` directory in the `backend` folder if it doesn't exist:
```bash
mkdir config
```

2. Create `config/config.env` file:
```bash
cp backend/config/config.env.example backend/config/config.env
```

3. Edit `backend/config/config.env` with your actual values:

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/MERN_STACK_PERSONAL_PORTFOLIO
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/MERN_STACK_PERSONAL_PORTFOLIO

# Server Configuration
PORT=4000

# JWT Configuration
JWT_SECRET_KEY=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRES=7d
COOKIE_EXPIRE=7

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Service Configuration (SMTP)
SMPT_HOST=smtp.gmail.com
SMPT_PORT=587
SMPT_SERVICE=gmail
SMPT_MAIL=your_email@gmail.com
SMPT_PASSWORD=your_app_specific_password

# Frontend URLs (for CORS)
PORTFOLIO_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174
```

**Important Notes:**
- **MongoDB**: Use your local MongoDB URI or create a free MongoDB Atlas cluster
- **Cloudinary**: Sign up at [cloudinary.com](https://cloudinary.com) for free image hosting
- **Email (SMTP)**: For Gmail, you need to:
  1. Enable 2-Factor Authentication
  2. Generate an "App Password" (not your regular password)
  3. Use that app password in `SMPT_PASSWORD`
- **JWT_SECRET_KEY**: Generate a strong random string (you can use: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

#### Step 1.3: Run the Backend

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The backend will run on `http://localhost:4000` (or your configured PORT)

---

### 2. Dashboard Setup (Admin Panel)

#### Step 2.1: Install Dependencies
```bash
cd dashboard
npm install
```

#### Step 2.2: Configure Environment Variables

1. Create `.env` file in the `dashboard` folder:
```bash
# In the dashboard directory
touch .env
```

2. Add the following to `dashboard/.env`:
```env
VITE_API_URL=http://localhost:4000
```

**Note:** Change this to your backend URL if running on a different port or domain.

#### Step 2.3: Run the Dashboard

Development mode:
```bash
npm run dev
```

The dashboard will run on `http://localhost:5174`

**Note:** The default Vite port is 5173, but since the portfolio uses that, the dashboard will automatically use 5174. If you need a specific port, add `--port 5174` to the dev script in `package.json`.

---

### 3. Portfolio Setup (Frontend)

#### Step 3.1: Install Dependencies
```bash
cd portfolio
npm install
```

#### Step 3.2: Configure Environment Variables

1. Create `.env` file in the `portfolio` folder:
```bash
# In the portfolio directory
touch .env
```

2. Add the following to `portfolio/.env`:
```env
VITE_API_URL=http://localhost:4000
```

**Note:** Change this to your backend URL if running on a different port or domain.

#### Step 3.3: Run the Portfolio

Development mode:
```bash
npm run dev
```

The portfolio will run on `http://localhost:5173`

---

## Running All Services

### Option 1: Run in Separate Terminals

Open three terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Dashboard:**
```bash
cd dashboard
npm run dev
```

**Terminal 3 - Portfolio:**
```bash
cd portfolio
npm run dev
```

### Option 2: Use a Process Manager (Recommended)

Install `concurrently` globally:
```bash
npm install -g concurrently
```

Create a script in the root `package.json`:
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix dashboard\" \"npm run dev --prefix portfolio\"",
    "install-all": "npm install && cd backend && npm install && cd ../dashboard && npm install && cd ../portfolio && npm install"
  }
}
```

Then run:
```bash
npm run dev
```

---

## Default Ports

- **Backend**: `http://localhost:4000`
- **Portfolio**: `http://localhost:5173`
- **Dashboard**: `http://localhost:5174`

---

## Getting Started After Setup

1. **Access the Portfolio**: Open `http://localhost:5173` in your browser
2. **Access the Dashboard**: Open `http://localhost:5174` in your browser
3. **Create Admin Account**: You'll need to create a user account through the backend API or directly in MongoDB
4. **Login to Dashboard**: Use your credentials to log in to the admin panel

---

## Troubleshooting

### Backend Issues

1. **MongoDB Connection Error**:
   - Check if MongoDB is running: `mongod` (for local) or verify Atlas connection string
   - Ensure the database name matches: `MERN_STACK_PERSONAL_PORTFOLIO`

2. **Port Already in Use**:
   - Change the `PORT` in `backend/config/config.env`
   - Or kill the process using the port: `lsof -ti:4000 | xargs kill`

3. **Cloudinary Errors**:
   - Verify your Cloudinary credentials
   - Check if images are being uploaded correctly

### Frontend Issues

1. **CORS Errors**:
   - Ensure backend `PORTFOLIO_URL` and `DASHBOARD_URL` in `config.env` match your frontend URLs
   - Check backend CORS configuration in `backend/app.js`

2. **API Connection Errors**:
   - Verify `VITE_API_URL` in frontend `.env` files
   - Ensure backend is running and accessible
   - Check browser console for detailed error messages

3. **Environment Variables Not Loading**:
   - Restart the development server after changing `.env` files
   - Ensure variables start with `VITE_` prefix for Vite projects
   - Clear browser cache if needed

---

## Production Deployment

### Backend
- Use environment variables provided by your hosting platform (Heroku, Railway, Render, etc.)
- Set `NODE_ENV=production`
- Update `PORTFOLIO_URL` and `DASHBOARD_URL` to your production URLs

### Frontend
- Build for production: `npm run build`
- Deploy `dist` folder to hosting service (Vercel, Netlify, etc.)
- Update `VITE_API_URL` to production backend URL
- Ensure CORS is configured to allow your production frontend URLs

---

## Environment Variables Summary

### Backend (`backend/config/config.env`)
- `MONGO_URI` - MongoDB connection string
- `PORT` - Backend server port
- `JWT_SECRET_KEY` - Secret key for JWT tokens
- `JWT_EXPIRES` - JWT expiration time (e.g., "7d")
- `COOKIE_EXPIRE` - Cookie expiration in days
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `SMPT_HOST` - SMTP server host
- `SMPT_PORT` - SMTP server port
- `SMPT_SERVICE` - SMTP service name
- `SMPT_MAIL` - Email address for sending emails
- `SMPT_PASSWORD` - Email app password
- `PORTFOLIO_URL` - Portfolio frontend URL
- `DASHBOARD_URL` - Dashboard frontend URL

### Dashboard (`dashboard/.env`)
- `VITE_API_URL` - Backend API URL

### Portfolio (`portfolio/.env`)
- `VITE_API_URL` - Backend API URL

---

## Additional Notes

- The backend uses cookie-based authentication, so make sure cookies are enabled in your browser
- For production, use HTTPS to ensure secure cookie transmission
- Regularly update your dependencies: `npm update`
- Keep your environment variables secure and never commit them to version control

---

## Support

If you encounter any issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Ensure all services are running on the correct ports
4. Check network connectivity between frontend and backend

Good luck with your portfolio! 🚀

