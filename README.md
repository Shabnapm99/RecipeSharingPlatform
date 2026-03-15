# Recipe Sharing Platform

## 🔗 Live Demo

https://recipe-sharing-platform-gold.vercel.app/

## 📖 Description

The Recipe Sharing Platform is a responsive web app that helps users easily find and explore recipes. Users can search by recipe name or ingredients, apply filters like cuisine and cooking time, and view detailed recipes with step-by-step instructions. Logged-in users can add recipes, save favorites, and manage their own content. The app also includes voice search, AI-powered recipe summaries, and a clean, user-friendly design for all devices.

## ✨ Features

- **Recipe Cards:** Display recipes with images and ratings.
- **Advanced Filtering:** Filter recipes by cuisine, diet type, cooking time, and difficulty.
- **Search:** Search recipes by name, ingredients, or cuisine. Includes voice search using the Web Speech API.
- **Recipe Details:** View detailed recipe pages with ingredients and step-by-step instructions.
- **Cooking Timer:** Timer to assist during cooking.
- **Ingredient Checklist:** Interactive checklist for ingredients.
- **Add Recipe:** Only registered and logged-in users can add new recipes.
- **Favorites:** Only registered and logged-in users can add recipes to favorites.
- **Edit & Delete:** Recipes can be edited or deleted only by the author.
- **Authentication:** Firebase Authentication for secure user login and signup.
- **Summarize Recipe:** Summarize recipes using the Gemini API.
- **Print Recipe:** Print-friendly recipe layout.
- **Share Recipe:** Share recipes via whatsapp, email,...
- **Review & Rating:** Logged In users can give review and rating
- **Firebase Integration:** Firebase used for authentication and data storage.
- **Mongodb integration:** Migrated to Mongodb for user registration, login authentication and data storage
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **AI Integration:** Web Speech API for voice search and Gemini API for summarization.


## 🎯 Project Goals

The goal of this project was to build a full-featured recipe management application while strengthening my front-end development skills and gaining hands-on experience with real-world integrations.

Through this project, I learned how to:
- Build reusable and responsive UI components using React.
- Implement **responsive web design** to ensure a seamless experience across mobile, tablet, and desktop devices.
- Implement secure authentication and authorization using Firebase.
- Manage user-specific data, including favorites and author-based access control.
- Integrate third-party APIs such as the Web Speech API for voice search and the Gemini API for AI-powered recipe summarization.
- Implement advanced features like multi-level filtering, search functionality, timers, and print-friendly views and share recipe.
- Handle CRUD operations effectively with proper data validation and access restrictions.
- Include file(image) upload using multer and cloudinary.
- Improve overall application performance, usability, and user experience.

This project aimed to simulate a real-world application by combining modern front-end technologies, cloud services, and AI features into a single, scalable solution.


## 🛠️ Technologies Used

- **Frontend:** React.js
- **Styling:** CSS3 / Tailwind CSS
- **APIs:** dummyjson, {JSON} Placeholder
- **Libraries:** React-Router-Dom, React-Redux, react-spinners, react-timer-hook, react-to-print, multer, cloudinary, react-toastify,  Web Share API(navigator.share())
- **AI Tools:** WebSpeech API, Gemini API
- **Deployment:** Vercel
- **Version Control:** Git & GitHub
- **Backend:** MongoDB

## 🤖 AI Integration (Optional)

- **Web Speech API:**  
  Enables voice-based recipe search, allowing users to search hands-free by speaking ingredients, recipe names, or cuisines. This improves accessibility and provides a faster, more interactive user experience.

- **Gemini API:**  
  Used to generate concise recipe summaries at the click of a button, helping users quickly understand the recipe without reading long instructions.

### 🚀 How It Enhances User Experience
- Makes searching easier and more accessible through voice input.
- Saves time by providing AI-generated recipe summaries.
- Adds modern, intelligent features that improve overall usability.

## 🚀 Setup Instructions
### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/Shabnapm99/RecipeSharingPlatform.git
Navigate to project directory cd your-repo-name
2. Install dependencies npm install
3. Create .env file (if using APIs) to not to expose
   VITE_APP_API_KEY=your_api_key_here
4. Start development server npm run dev
5. Open http://localhost:5173 in your browser(default port)

📱 Responsive Design

This application is fully responsive and tested on:
● Mobile devices (375px and up)
● Tablets (768px and up)
● Desktop (1024px and up)

📸 Screenshots
[Add 2-3 screenshots of your application]

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
