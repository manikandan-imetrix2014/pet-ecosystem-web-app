# PetEco Global Platform (com.peteco.web)

A production-ready, scalable, and modular React JS web application for a global pet ecosystem. This "Super Web App" supports all types of pets including walking, flying, creeping, exotic, and aquatic creatures.

## Architecture: Clean Architecture (MVVM)

The project follows a strict MVVM-inspired frontend separation to ensure maintainability and testability:

- **View Layer**: React Components and Pages (using Tailwind CSS for styling).
- **ViewModel Layer**: Custom React Hooks managing state logic and React Query integrations.
- **Model Layer**: TypeScript interfaces, DTOs, and mapping functions.
- **Repository Layer**: Abstraction for data fetching logic between the ViewModel and API.
- **Data Layer**: Axios API services and local/secure storage management.

## Project Structure

```text
src/
├── core/               # Shared logic, components, and configurations
│   ├── components/     # Custom UI primitives
│   ├── hooks/          # Global hooks
│   ├── layouts/        # Page layouts (Main, Dashboard)
│   ├── localization/   # i18n setup (EN/AR support)
│   ├── network/        # Axios client & interceptors
│   ├── routing/        # AppRouter & RouteConstants
│   ├── storage/        # Local & Secure storage services
│   ├── theme/          # Tailwind theme & ThemeProvider
│   └── utils/          # Shared utilities (Haversine, Validators)
│
└── features/           # Modular feature components
    ├── auth/           # Login, Register, Profile
    ├── dashboard/      # User Home & Stats
    ├── ai_assistant/   # Global AI Overlay & Chat
    ├── pet_shop/       # eCommerce for pets
    ├── vet_doctor/     # Veterinary services
    ├── ... (20+ more features)
```

## Features Included

- **Multi-language Support**: English (LTR) and Arabic (RTL) with automatic layout mirroring.
- **Global AI Assistant**: Floating overlay button with context-aware actions and navigation.
- **Announcement System**: Global banner for admin push events.
- **Clean Architecture**: Decoupled modules with standardized boilerplate.
- **Responsive Design**: Fully adaptive across Mobile, Tablet, Laptop, and Ultra-wide displays.
- **Secure Persistence**: Encrypted local storage for sensitive tokens.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand (Global) + React Query (Server State)
- **Networking**: Axios
- **Iconography**: Lucide React
- **Internationalization**: i18next

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Environment Configuration

The project supports multiple environments:
- `.env.dev`: Development
- `.env.qa`: Quality Assurance
- `.env.prod`: Production

## Best Practices Followed

- **SOLID Principles**: Each layer has a single responsibility.
- **Strong Typing**: 100% TypeScript coverage.
- **Responsive UI**: Mobile-first design using Tailwind grid/flex.
- **Code Splitting**: Lazy loading for all feature routes.
