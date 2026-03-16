# Recipe Sharing Platform

## 🔗 Live Demo

https://recipe-sharing-platform-gold.vercel.app/

## 📖 Description

The Recipe Sharing Platform is a **responsive web application** that allows users to easily discover, explore, and manage recipes. Users can search by recipe name, ingredients, or cuisine, and apply advanced filters such as cooking time, diet type, and difficulty level. Each recipe includes detailed step-by-step instructions, ingredients checklists, cooking timers, and ratings.  

**Logged-in users** can:  
- Add new recipes with images.  
- Edit or delete their own recipes.  
- Save favorite recipes for easy access.  
- Share recipes via WhatsApp, email, or other platforms.  
- Rate recipes and leave reviews.  

The platform also includes **modern, intelligent features**:  
- **Voice Search** using the Web Speech API.  
- **AI-powered recipe summaries** via the Gemini API.  
- **Print-friendly recipe layouts**.  
- Real-time **loading indicators** for better user experience.  

Built with **React.js, Tailwind CSS, MongoDB, JWT authentication, and bcrypt password hashing**, this app combines modern front-end technologies, secure authentication, cloud storage (Multer + Cloudinary), and AI integrations to provide a smooth, intuitive, and feature-rich cooking experience across all devices.

## ✨ Features

- **Recipe Cards:** Display recipes with images, titles, and average ratings.
- **Advanced Filtering:** Filter recipes by cuisine, diet type, cooking time, and difficulty level.
- **Search:** Search recipes by name, ingredients, or cuisine. Includes voice search using the Web Speech API.
- **Recipe Details:** View detailed recipe pages with ingredients and step-by-step cooking instructions.
- **Cooking Timer:** Built-in timer to assist users while cooking.
- **Ingredient Checklist:** Interactive checklist to keep track of ingredients during cooking.
- **Add Recipe:** Only registered and logged-in users can add new recipes.
- **Edit & Delete Recipes:** Recipes can be edited or deleted only by the author.
- **Favorites:** Logged-in users can save recipes to their favorites list and view them anytime.
- **Review & Rating:** Logged-in users can submit ratings and reviews for recipes. Average rating is automatically calculated.
- **Share Recipe:** Share recipes easily via WhatsApp, email, and other supported platforms using the Web Share API.
- **Print Recipe:** Print-friendly recipe layout for easy offline cooking.
- **Authentication:** Secure user authentication using JWT.
- **Password Security:** User passwords are securely hashed using bcrypt.
- **Protected Routes:** Certain features like adding recipes, favorites, and reviews are accessible only to authenticated users.
- **Loaders:** Loading indicators improve user experience during API requests.
- **Firebase Integration:** Firebase used for authentication during early development.
- **MongoDB Integration:** MongoDB used for storing user data, recipes, favorites, and reviews.
- **Responsive Design:** Fully responsive design optimized for mobile, tablet, and desktop devices.
- **AI Integration:** Web Speech API for voice search and Gemini API for recipe summarization.


## 🎯 Project Goals

The goal of this project was to build a full-featured recipe management application while enhancing my front-end development skills and gaining hands-on experience with real-world integrations.

Through this project, I learned how to:

- Build **reusable and responsive UI components** using React.
- Implement **responsive web design** to ensure a seamless experience across mobile, tablet, and desktop devices.
- Set up **secure authentication and authorization** using JWT and Firebase.
- Manage user-specific data, including **favorites**, and enforce **author-based access control** for recipes.
- Integrate third-party APIs, such as the **Web Speech API** for voice search and the **Gemini API** for AI-powered recipe summarization.
- Implement advanced features like **multi-level filtering**, search, cooking timers, print-friendly layouts, and recipe sharing.
- Handle **CRUD operations** effectively with proper data validation and access restrictions.
- Upload and manage files/images using **Multer** and **Cloudinary**.
- Optimize **application performance, usability, and overall user experience**.

This project simulates a real-world web application by combining modern front-end technologies, cloud services, and AI-powered features into a scalable and user-friendly solution.


## 🛠️ Technologies Used

- **Frontend:** React.js
- **Styling:** CSS3 / Tailwind CSS
- **Backend / Database:** Node.js, Express.js, MongoDB
- **Authentication & Security:** JWT (JSON Web Tokens), bcrypt (password hashing)
- **APIs:** dummyjson, JSONPlaceholder
- **Libraries:** React-Router-Dom, React-Redux, react-spinners, react-timer-hook, react-to-print, multer, cloudinary, react-toastify, Web Share API (navigator.share())
- **AI Tools:** Web Speech API, Gemini API
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 🤖 AI Integration (Optional)

- **Web Speech API:**  
  Enables voice-based recipe search, allowing users to search hands-free by speaking ingredients, recipe names, or cuisines. This improves accessibility and provides a faster, more interactive user experience.

- **Gemini API:**  
  Used to generate concise recipe summaries at the click of a button, helping users quickly understand the recipe without reading long instructions.

### 🚀 How It Enhances User Experience
- **Voice Search:** Makes finding recipes faster and more accessible using voice input via the Web Speech API.  
- **AI Summaries:** Saves time by providing concise, AI-generated recipe summaries with the Gemini API.  
- **Smart Features:** Adds modern, intelligent functionality—like timers, ingredient checklists, and share/print options—that improve usability and engagement.  

## 🚀 Setup Instructions
### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps
1️⃣ Clone the repository
```bash
git clone https://github.com/Shabnapm99/RecipeSharingPlatform.git
Navigate to project directory cd your-repo-name
2️⃣ Install Dependencies
- Backend
cd server
npm install

- Frontend
cd client
npm install

3️⃣ Configure Environment Variables

Create a .env file inside the server folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
JWT_EXPIRESIN = "expiry-time"
CLOUDINARY_CLOUD_NAME="cloudinary-name"
CLOUDINARY_API_KEY="cloudinary-api-key"
CLOUDINARY_API_SECRET="cloudinary-api-secret"
NODE_ENV="local"
FRONTEND_URL='http://localhost:5173'


Create a .env file inside the client folder and add:

VITE_GEMINI_API_KEY=gemini-api-key
VITE_BASE_URL="http://localhost:4000/api/"

4️⃣ Run the Application
- Start Backend
cd server
npm run dev

- Start Frontend
cd client
npm run dev

🌍 Access the Application

Frontend → http://localhost:5173

Backend → http://localhost:4000

# 🔐 API Endpoints

## Authentication

- POST /api/register – Register user
- POST /api/login – Login user
- POST /api/logout – Logout user

## Recipes

- GET /api/recipes – Get all tasks
- POST /api/recipes – Create new task
- PUT /api/recipes/:id – Update task
- DELETE /api/recipes/:id – Delete task

## 🧪 Testing

- API tested using Postman
- Frontend tested manually through browser

## 🌍 Deployment

🚀 Deployment (Vercel)

This project is configured for easy deployment on Vercel.

1️⃣ Push to GitHub

Push your complete project (both client and server folders) to a GitHub repository.

2️⃣ Deploy the Backend

- Go to Vercel Dashboard → Click Add New Project
- Import your GitHub repository
- Set the Root Directory to: server
- Add the following Environment Variables in Vercel:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
JWT_EXPIRESIN = "expiry-time"
CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
NODE_ENV="local"
FRONTEND_URL='deployed-link'


- Click Deploy
- Vercel will automatically detect the configuration and use the vercel.json file (if provided).
- After deployment, you will get a backend URL like: https://your-backend-name.vercel.app

3️⃣ Deploy the Frontend

- Create another New Project in Vercel
- Import the same GitHub repository
- Set the Root Directory to:
- client
- Add the following environment variable:

VITE_GEMINI_API_KEY=gemini-api-key
VITE_BASE_URL=deployed backend url

- Click Deploy

📱 Responsive Design

This application is fully responsive and tested on:
● Mobile devices (375px and up)
● Tablets (768px and up)
● Desktop (1024px and up)


🎨 Design Choices

- Used a component-based architecture in React to improve code reusability and maintainability.
- Implemented responsive web design to ensure consistent user experience across mobile, tablet, and desktop devices.
- Chose Firebase Authentication for quick, secure, and scalable user management and store recipe details.
- Applied role-based access control, allowing only authenticated users to add or favorite recipes, and only authors to edit or delete them.
- Integrated AI features (voice search and recipe summarization) to enhance usability and modernize the application.
- Designed a clean and minimal UI to keep the focus on content and ease of navigation.

🐛 Known Issues

- Initial load time can be slightly slow due to Firebase call and API.
- Limited offline support.
- AI summarization depends on external API availability.

🔮 Future Enhancements

● Implement ratings and reviews by users.
● Improve AI features, such as ingredient-based suggestions and smart meal planning.
● Add user profile pages with saved recipes and preferences.
● Upgrade the project into a full Capstone application with role-based dashboards, admin moderation, and analytics.

👤 Author

Shabna P M
● GitHub: https://github.com/Shabnapm99/
● LinkedIn: https://www.linkedin.com/in/shabnapm/
● Email: pmshabnashareefa@gmail.com

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments

● Thanks to Ajmal Shahan(Mentor) for guidance and support throughout the project, Stack Overflow,     Peers for helping and learning support and Brototype Malayalam & Piyush Garg(Youtube Tutorials).
● API providers: Webspeech API, Gemini API
● Icons from React Icons
---
