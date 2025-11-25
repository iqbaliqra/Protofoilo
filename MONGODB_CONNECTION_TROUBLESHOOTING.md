# MongoDB Atlas Connection Troubleshooting

## Current Issue

You're experiencing a MongoDB Atlas connection timeout error:
```
Server selection timed out after 30000 ms
ReplicaSetNoPrimary
```

## Common Causes & Solutions

### 1. IP Address Not Whitelisted (Most Common)

MongoDB Atlas requires you to whitelist IP addresses that can connect to your cluster.

**Solution:**
1. Go to [MongoDB Atlas Dashboard](https://cloud.mongodb.com/)
2. Log in to your account
3. Click on your cluster → **Network Access** (left sidebar)
4. Click **"Add IP Address"**
5. You have two options:
   - **Option A (Development):** Add `0.0.0.0/0` (allows all IPs - use only for development)
   - **Option B (Production):** Add your specific IP address
6. Click **"Confirm"**
7. Wait 1-2 minutes for changes to take effect
8. Restart your backend server

### 2. Cluster is Paused

MongoDB Atlas free tier clusters can auto-pause after inactivity.

**Solution:**
1. Go to MongoDB Atlas Dashboard
2. Check if your cluster shows "Paused"
3. Click "Resume" if it's paused
4. Wait for the cluster to fully start (usually 1-2 minutes)

### 3. Wrong Connection String

Verify your connection string is correct.

**Check:**
1. Go to MongoDB Atlas Dashboard
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string
5. Compare it with your `backend/config/config.env` file
6. Make sure:
   - Username and password are correct
   - Database name is correct
   - No extra characters or spaces

### 4. Network/Firewall Issues

Your local network or firewall might be blocking the connection.

**Solutions:**
- Try from a different network
- Temporarily disable firewall/antivirus
- Check if your ISP blocks MongoDB ports

### 5. Incorrect Database Name in Connection String

The connection string already includes the database name, but we're also specifying it in code.

**Current setup:**
```
MONGO_URI=mongodb+srv://...@cluster.net/MERN_STACK_PERSONAL_PORTFOLIO?retryWrites=true&w=majority
```

This should work, but if issues persist, try removing the database name from the URI and let the code handle it.

## Quick Fix Steps

1. **Whitelist IP Address:**
   ```bash
   # Go to MongoDB Atlas → Network Access → Add IP Address
   # Add: 0.0.0.0/0 (for development)
   ```

2. **Verify Cluster is Running:**
   - Check MongoDB Atlas dashboard
   - Cluster should show "Active" (not "Paused")

3. **Verify Connection String:**
   - Copy fresh connection string from Atlas
   - Update `backend/config/config.env`

4. **Restart Backend:**
   ```bash
   cd backend
   npm run dev
   ```

## Testing Connection

After fixing, you should see:
```
✅ Connected to database!
```

If you still see errors, check the improved error messages for specific guidance.

## Alternative: Use Local MongoDB

If MongoDB Atlas continues to cause issues, you can use a local MongoDB installation:

1. **Install MongoDB locally** (if not installed)
2. **Update `backend/config/config.env`:**
   ```env
   MONGO_URI=mongodb://localhost:27017/MERN_STACK_PERSONAL_PORTFOLIO
   ```

3. **Start MongoDB service:**
   ```bash
   # Windows (if installed as service, it should auto-start)
   # Or manually:
   mongod
   ```

## Need Help?

If the issue persists:
1. Check MongoDB Atlas status page
2. Verify your account isn't suspended
3. Check Atlas logs for detailed errors
4. Try creating a new cluster

