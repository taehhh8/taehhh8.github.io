# 박태현 | Web3 Frontend Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.3-FF0080?style=for-the-badge&logo=framer)

## 🚀 About This Portfolio

3년 8개월 경력의 Web3 프론트엔드 개발자 포트폴리오 웹사이트입니다. Next.js 16과 최신 웹 기술을 활용하여 제작되었으며, 현대적이고 세련된 디자인과 부드러운 애니메이션을 특징으로 합니다.

## ✨ Key Features

- **⚡ 최신 기술 스택**: Next.js 16, React 19, TypeScript
- **🎨 현대적 디자인**: 세련된 그라데이션과 애니메이션
- **📱 반응형**: 모바일부터 데스크톱까지 완벽한 대응
- **🌓 다크 모드**: 라이트/다크 테마 지원
- **🎯 최적화**: 성능과 SEO 최적화
- **♿ 접근성**: 웹 접근성 표준 준수

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: SCSS Modules
- **Animation**: Framer Motion 12.34.3
- **Markdown**: react-markdown 10.1.0

### Development
- **Package Manager**: npm
- **Code Quality**: ESLint
- **Version Control**: Git

## 📁 Project Structure

```
taehhh8.github.io/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Hero/             # Hero section
│   │   ├── About/            # About section
│   │   ├── Skills/           # Skills showcase
│   │   ├── Projects/         # Projects portfolio
│   │   ├── Experience/       # Work experience
│   │   ├── Contact/          # Contact information
│   │   ├── Navigation/       # Navigation bar
│   │   └── ThemeToggle/      # Dark mode toggle
│   ├── styles/               # Global SCSS
│   │   ├── _variables.scss   # Design tokens
│   │   ├── _mixins.scss      # Reusable mixins
│   │   └── main.scss         # Main stylesheet
│   ├── data/                 # Project data
│   │   ├── projects.ts       # Projects list
│   │   └── projects/         # Project details (MD)
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/taehhh8/taehhh8.github.io.git
cd taehhh8.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero/Hero.tsx`
2. **About Section**: Edit `src/components/About/About.tsx`
3. **Projects**: Add/edit files in `src/data/projects/`
4. **Contact**: Edit `src/components/Contact/Contact.tsx`

### Modify Design

- **Colors**: Edit `src/styles/_variables.scss`
- **Typography**: Edit font imports in `src/styles/main.scss`
- **Animations**: Customize Framer Motion configs in components

## 🎨 Design System

### Color Palette

```scss
// Light Mode
$primary-color: #3b82f6;      // Modern blue
$secondary-color: #8b5cf6;    // Purple
$accent-color: #06b6d4;       // Cyan

// Dark Mode
$dark-primary-color: #60a5fa;
$dark-secondary-color: #a78bfa;
$dark-accent-color: #22d3ee;
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Total Bundle Size: Optimized with Next.js

## 🌐 Deployment

This portfolio is deployed on GitHub Pages. To deploy your own:

1. **Update repository settings**
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 📧 Contact

- **Email**: [your-email@example.com]
- **GitHub**: [@taehhh8](https://github.com/taehhh8)
- **Portfolio**: [taehhh8.github.io](https://taehhh8.github.io)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Material Symbols
- Animations powered by Framer Motion
- Built with ❤️ using Next.js

---

⭐ If you found this portfolio helpful, please consider giving it a star!
