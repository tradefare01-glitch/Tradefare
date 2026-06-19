# Tradefare - CampusTrading 🎓

A comprehensive marketplace and wallet platform designed for campus communities. CampusTrading enables students to buy, sell, and trade goods and services while maintaining secure digital wallets for seamless transactions.

## 🎯 Features

- **Campus Marketplace** - Discover, buy, and sell items within your campus community
- **Campus Wallet** - Secure digital wallet for managing transactions and balances
- **Community Ecosystem** - Connect with other students and build your campus network
- **Real-time Updates** - Stay informed with notifications and live market ticker
- **Responsive Design** - Optimized for mobile, tablet, and desktop experiences

## 🚀 Quick Start

### Prerequisites
- **Node.js** 20 or higher
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/tradefare01-glitch/Tradefare.git
cd Tradefare

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui component library
│   ├── Footer.tsx       # Footer component
│   ├── Navbar.tsx       # Navigation bar
│   ├── ScribbleCircle.tsx
│   └── Ticker.tsx       # Market ticker display
├── pages/
│   ├── Home.tsx         # Landing page
│   ├── Marketplace.tsx  # Marketplace page
│   ├── KampusWallet.tsx # Wallet page
│   └── About.tsx        # About page
├── sections/
│   └── home/            # Home page sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
├── types/               # TypeScript type definitions
├── App.tsx              # Root component
├── App.css              # App-specific styles
├── index.css            # Global styles
└── main.tsx             # Application entry point
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **UI Components**: shadcn/ui with Radix UI
- **Routing**: React Router 7.18.0
- **Forms**: React Hook Form 7.70.0 + Zod 4.3.5
- **Animation**: GSAP 3.15.0
- **State Management**: React Context API
- **Icons**: Lucide React 0.562.0

## 📚 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Type-check and build for production
npm run build

# Run ESLint to check code quality
npm run lint

# Preview production build locally
npm run preview
```

## 🎨 Design System

The project uses Tailwind CSS with a custom theme featuring:

- **Primary Colors**: Brand colors with semantic naming
- **Custom Palette**:
  - `blue-bg` (#C8E3F5) - Light blue backgrounds
  - `lavender` (#B8B3FD) - Accent color
  - `cream` (#FAF8E6) - Main background
  - `green-accent` (#0E743D) - Primary accent
  - `orange-accent` (#D97B18) - Secondary accent

- **Typography**:
  - Display Font: DM Serif Display (headings)
  - Body Font: Inter (body text)

- **Components**: 40+ ready-to-use shadcn/ui components

## 🔧 Environment Variables

Create a `.env.local` file in the root directory. See `.env.example` for reference.

## 📋 Configuration Files

- **vite.config.ts** - Vite build configuration
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.js** - PostCSS configuration
- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules configuration
- **components.json** - Component configuration

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit your changes: `git commit -m 'Add amazing feature'`
3. Push to the branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📝 Code Style

This project uses ESLint with React and TypeScript configurations to maintain code quality:

```bash
# Check for linting issues
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

## 🐛 Known Issues

- None documented yet. Please report issues via GitHub Issues.

## 📞 Support

For support, please create an issue on the GitHub repository or contact the development team.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built by the Tradefare development team.

---

**Happy coding! 🚀**
