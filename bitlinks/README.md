# Url-Shortener
This project is a simple and modern URL shortener application built using Next.js 13 (App Router), MongoDB, and Tailwind CSS. It allows users to shorten long URLs using custom aliases. The application features a clean, responsive design and a fully functional backend using serverless API routes.

The frontend is developed with React via the Next.js App Router system and styled using Tailwind CSS for fast and responsive UI development. The backend uses Next.js API routes to handle URL shortening, storing data securely in a MongoDB database. When a short URL is accessed, it automatically redirects the user to the original long URL.

The project is organized into pages for generating short URLs and a dynamic route for handling redirections. The MongoDB connection logic is maintained separately in the lib/mongodb.js file for clean structure and reusability.

To set up the project, clone the repository and run npm install to install dependencies. Then, create a .env.local file containing your MongoDB connection string and host URL (e.g., http://localhost:3000). You can start the development server using npm run dev.

The core API endpoint /api/generate is responsible for generating and storing the short URL. This project serves as a practical example of full-stack development using modern tools like Next.js and MongoDB.