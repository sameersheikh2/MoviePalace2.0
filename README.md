# 🎬 MoviePalace

A modern movie discovery web app built with React and TMDB API. Browse movies, search for your favorites, and explore cast details.

## ✨ Features

- Browse popular and trending movies
- Search for movies by title
- View detailed movie information
- Explore cast and crew details
- Responsive design for all devices

### 🚧 Work in Progress

- User authentication (Login/Signup)
- Movie filtering by genre and year

## 🛠️ Tech Stack

- **React 19** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components
- **Radix UI** - Accessible primitives
- **DaisyUI** - Component library
- **Lucide React** - Icons
- **Framer Motion** - Animations
- **Swiper** - Carousels
- **Vite** - Build tool
- **TMDB API** - Movie data

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sameersheikh2/MoviePalace2.0.git
   cd moviepalace
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your TMDB API key:

   ```
   VITE_TMDB_API_KEY = your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
components/ # Reusable UI component
src/
├── components/       # Reusable components
├── pages/           # Page components
│   ├── Home.jsx
│   ├── SearchResults.jsx
│   ├── MovieDetail.jsx
│   ├── CastDetail.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── store/           # Redux store and slices
└── utils/           # Helper functions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel (Highly recomended), Netlify, or GitHub Pages

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sameer Sheikh**

- GitHub: [@sameersheikh2](https://github.com/sameersheikh2)
- LinkedIn: [Sameer Sheikh](https://www.linkedin.com/in/sameersheikh2)
