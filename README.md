# University.uz — Premium EdTech Platform

**University.uz** is a modern, high-performance web platform built for high school graduates and prospective students in Uzbekistan to discover, compare, and prepare for top-tier local and international universities.

## 🚀 Features List
- **Home & Listing:** Interactive animated hero sections with curated "Top 5 Universities". Advanced filtering and sorting (by rating, price, alphabet).
- **Detail Page & Smart Checklist:** In-depth university profiles with an integrated, LocalStorage-persisted Smart Application Checklist to track application document readiness.
- **About Us:** A standalone, beautifully designed corporate page featuring Framer Motion & GSAP animations.
- **Quiz System:** A robust 5x10 logic module calculating the best career paths and university matches using interactive glassmorphism UI.
- **Comparison Tool:** A dedicated side-by-side specification table supporting up to 3 universities tracking via Context API.
- **Future Salary Calculator:** A dynamic calculator forecasting earnings based on field, experience, English proficiency, and soft skills with animated progress gauges.
- **Core Functionality:** Mock Authentication System, Multi-Language Support (UZ/RU), and system-integrated Dark/Light Mode.

## 🛠 Tech Stack
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS, Glassmorphism Aesthetics
- **Animations:** GSAP, Framer Motion
- **Icons:** Custom SVG Elements & Local Imports
- **State Management:** React Context API + LocalStorage

## 📁 Updated Project Structure
```text
src/
├── assets/
│   └── logo.svg                # Premium Vector Logo
├── components/
│   ├── cards/
│   │   └── UniversityCard.jsx  # Main listing card
│   ├── BackgroundGlow.jsx      # Animated glowing orbs
│   ├── DocChecklist.jsx        # Smart Document progress tracker
│   ├── Footer.jsx              
│   └── Navbar.jsx              # App header (Themes, Compare badge)
├── context/
│   ├── AuthContext.jsx         # Mock user session state
│   ├── CompareContext.jsx      # Global university comparison store
│   ├── LanguageContext.js      # Multi-language dictionary
│   └── ThemeContext.js         # Dark/Light mode toggler
├── data/
│   ├── documentsData.js        # Checklist conditions
│   ├── quizzes.js              # Questions and matching logic (50 items)
│   ├── salaryData.js           # Roles, bonuses and multipliers
│   └── universities.js         # Unified master DB of institutions
├── pages/
│   ├── AboutPage.jsx           # Corporate/mission page
│   ├── ComparePage.jsx         # 3-column table view
│   ├── DetailPage.jsx          # Uni dashboard + Checklist Sidebar
│   ├── HomePage.jsx            
│   ├── ListingPage.jsx         # Search + Filters
│   ├── LoginPage.jsx           
│   ├── ProfilePage.jsx         # User dashboard & tracked docs
│   ├── QuizPage.jsx            # Interactive Quiz flow
│   ├── RegisterPage.jsx        
│   └── SalaryCalculator.jsx    # Real-time earning predictor chart
├── App.jsx                     # Router & Context wrappers
├── index.css                   # Tailwind bindings & custom colors
└── main.jsx                    # Core DOM entry
```

## ⚙️ How to Run
To get this project running locally, simply execute these commands in your console:

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```
*(Optional) To build for production, run `npm run build`.*
