# Senior Web2.5 Architect Portfolio

A high-performance, aesthetically precise portfolio designed for senior engineers bridging Web2 systems and Web3 protocols.

![Portfolio Preview](./public/preview.png)

## 🚀 Overview

This project is a personal branding platform built to demonstrate **architectural discipline**, **modern engineering practices**, and **Web3 fluency**. It features a "Deep Space" dark mode theme, glassmorphism UI elements, and a clean, responsive layout verified for devices ranging from mobile (375px) to 4K Ultra-Wide (3840px).

## 🛠️ Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Package Manager**: [pnpm](https://pnpm.io/)

## 🎨 Design System: "Deep Space"

*   **Colors**: Slate 950 (`#020617`) background with Electric Blue (`#3b82f6`) and Ethereum Purple (`#6366f1`) highlights.
*   **Typography**: `Inter` (UI) and `JetBrains Mono` (Code/Data).
*   **Effects**: Glassmorphism strategy (`backdrop-filter: blur`) used for cards and overlays.
*   **Layout**: `container mx-auto` with `max-w-7xl` constraint for optimal readability on large screens.

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/precious-akpan/hybrid-portfolio-new.git
    cd hybrid-portfolio-new
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

4.  **Build for production**
    ```bash
    pnpm build
    pnpm start
    ```

## 📝 Customization

All personal data, copy, and project details are separated from the UI logic.

**Edit content in:** `data/portfolio.ts`

```typescript
export const PORTFOLIO_DATA = {
  personal: {
    name: "Your Name",
    role: "Senior Web2.5 Architect",
    // ...
  },
  // ...
};
```

## 📱 Responsiveness

The application is verified to be fully responsive:
*   **Mobile**: 375px+
*   **Tablet**: 768px
*   **Desktop**: 1024px, 1440px
*   **Ultra-Wide**: 4k (3840px) - Content remains centered and readable.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
