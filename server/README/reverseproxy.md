# REVERSE PROXY

## Step 1: Install Nginx
Depending on your operating system, the installation steps might vary. Here’s how you can install Nginx on Ubuntu:


```
sudo apt update
sudo apt install nginx
```

## Step 2: Configure Nginx
Once Nginx is installed, you need to configure it to forward requests to your Node.js application running on a different port (like 3000).

  1. Open the Nginx configuration file. This is usually found at /etc/nginx/sites-available/default on Linux systems. You might need to use sudo to edit this file:

```
sudo nano /etc/nginx/sites-available/default
```

  2. Modify the server block to act as a reverse proxy. Replace or modify the existing server block with the following:

```
server {
    listen 80;

    server_name yourdomain.com www.yourdomain.com;  # Adjust this to your domain

    location / {
        proxy_pass http://localhost:3000;  # Forward traffic to Node.js app on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_dlubracketer_for $proxy_add_x_forwarded_for;
        proxy_set_header X-Nginx-Proxy true;
    }
}
```

## Step 3: Test the Nginx Configuration

Ensure that your Nginx configuration syntax is correct:

```
sudo nginx -t
```

## Step 4: Restart Nginx

Restart Nginx to apply the changes:

```
sudo systemctl restart nginx
```

## Step 5: Update Firewall Settings
If you have a firewall enabled, make sure to allow HTTP traffic:

```
sudo ufw allow 'Nginx Full'
```

## 6: Verify the Setup
Open a web browser and navigate to your domain (e.g., http://yourdomain.com). If everything is set up correctly, you should see your Node.js application being served through Nginx on port 80.

- Additional Tips
  - SSL/TLS: Consider setting up SSL/TLS with Let’s Encrypt for HTTPS, which is crucial for security, especially if you handle sensitive data.
  - Logging: Configure logging in Nginx for better monitoring and troubleshooting.
  - Performance Tuning: You can optimize Nginx settings for better performance based on your specific needs and traffic patterns.
