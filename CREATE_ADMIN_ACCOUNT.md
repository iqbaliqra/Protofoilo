# Create Admin Account Guide

## Quick Setup

I've created a script to help you create your first admin account easily.

## Method 1: Using the Setup Script (Recommended)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Run the create-admin script:**
   ```bash
   npm run create-admin
   ```

3. **Follow the prompts:**
   - You can press Enter to use default values
   - Default email: `admin@example.com`
   - Default password: `admin1234`
   - You can provide your own values if you prefer

4. **Example:**
   ```
   📝 Creating Admin User

   You can use default values (just press Enter) or provide your own:

   Full Name [John Doe]: 
   Email [admin@example.com]: 
   Phone [1234567890]: 
   About Me [Full Stack Developer]: 
   Password (min 8 characters) [admin1234]: 
   Portfolio URL [http://localhost:5173]: 
   GitHub URL (optional): 
   LinkedIn URL (optional): 
   ...
   ```

5. **Login to Dashboard:**
   - Go to: `http://localhost:5174`
   - Use the email and password you created

## Method 2: Manual Creation via API (Alternative)

If you prefer to create a user via API, you can use tools like Postman or cURL.

**Note:** The register endpoint requires avatar and resume files to be uploaded to Cloudinary, so it's more complex than using the script.

## Important Notes

⚠️ **Change Default Password:**
- After first login, go to Account settings and change your password
- Don't use the default password in production

📝 **Update Profile:**
- After login, update your avatar and resume with real files
- Go to Account → Profile to upload your actual avatar and resume

🔒 **Security:**
- The script uses placeholder images for avatar and resume
- You can update these later through the dashboard

## Troubleshooting

**Error: "Admin user already exists"**
- A user with the email already exists
- Try logging in with that email, or use a different email

**Error: MongoDB connection failed**
- Make sure MongoDB is running (local) or your Atlas connection string is correct
- Check your `backend/config/config.env` file
- Verify `MONGO_URI` is set correctly

**Error: "Password must be at least 8 characters"**
- Ensure your password is 8+ characters long

## Next Steps

1. ✅ Create admin account using the script
2. ✅ Login to dashboard at `http://localhost:5174`
3. ✅ Update your profile with real avatar and resume
4. ✅ Change your password
5. ✅ Start managing your portfolio!

