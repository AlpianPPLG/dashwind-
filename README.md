# 🚀 AdminCorp Dashboard

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn/ui-Latest-000000?style=for-the-badge&logo=shadcnui" alt="shadcn/ui" />
</div>

<div align="center">
  <h3>🎯 Modern & Comprehensive Admin Dashboard Panel</h3>
  <p>A feature-rich, responsive admin dashboard built with Next.js 15, TypeScript, and shadcn/ui components.</p>
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Components](#-components)
- [📱 Pages](#-pages)
- [🔧 Configuration](#-configuration)
- [📊 Analytics](#-analytics)
- [🎯 Usage Examples](#-usage-examples)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

### 🎛️ **Core Dashboard Features**
- **📊 Real-time Analytics** - Live metrics and data visualization
- **📈 Interactive Charts** - Revenue, user analytics, and performance metrics
- **👥 User Management** - Complete CRUD operations for users
- **📦 Product Management** - Inventory and product catalog management
- **🛒 Order Management** - Order tracking and processing
- **📅 Calendar System** - Event management and scheduling
- **💬 Messaging System** - Internal communication platform
- **⚙️ Settings Panel** - Comprehensive configuration options

### 🎨 **UI/UX Features**
- **🌓 Dark/Light Mode** - Seamless theme switching
- **📱 Fully Responsive** - Mobile-first design approach
- **🎯 Modern Design** - Clean and professional interface
- **♿ Accessibility** - WCAG compliant components
- **🔄 Loading States** - Smooth loading animations
- **📊 Data Tables** - Advanced sorting, filtering, and pagination
- **🎨 Customizable** - Easy theme and component customization

### 🔧 **Technical Features**
- **⚡ Next.js 15** - Latest features with App Router
- **🔒 TypeScript** - Full type safety
- **🎨 Tailwind CSS** - Utility-first styling
- **📦 shadcn/ui** - High-quality component library
- **🔄 Server Components** - Optimized performance
- **📱 Progressive Web App** - PWA ready
- **🔍 SEO Optimized** - Meta tags and structured data

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### **UI Components**
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit linting

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### **Installation**

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/alpian/admincorp-dashboard.git
cd admincorp-dashboard
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Run the development server**
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
\`\`\`bash
npm run build
npm start
\`\`\`

---

## 📁 Project Structure

\`\`\`
admincorp-dashboard/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 analytics/                # Analytics page
│   ├── 📁 calendar/                 # Calendar management
│   ├── 📁 messages/                 # Messaging system
│   ├── 📁 orders/                   # Order management
│   │   └── 📁 [id]/                 # Dynamic order details
│   ├── 📁 products/                 # Product management
│   ├── 📁 settings/                 # Settings panel
│   ├── 📁 users/                    # User management
│   ├── 📄 globals.css               # Global styles
│   ├── 📄 layout.tsx                # Root layout
│   ├── 📄 loading.tsx               # Loading component
│   └── 📄 page.tsx                  # Dashboard home
├── 📁 components/                   # Reusable components
│   ├── 📁 analytics/                # Analytics components
│   ├── 📁 calendar/                 # Calendar components
│   ├── 📁 dashboard/                # Dashboard components
│   ├── 📁 messages/                 # Messaging components
│   ├── 📁 orders/                   # Order components
│   ├── 📁 products/                 # Product components
│   ├── 📁 settings/                 # Settings components
│   ├── 📁 ui/                       # shadcn/ui components
│   ├── 📁 users/                    # User components
│   ├── 📄 app-sidebar.tsx           # Main sidebar
│   └── 📄 theme-provider.tsx        # Theme context
├── 📁 hooks/                        # Custom React hooks
├── 📁 lib/                          # Utility functions
├── 📁 public/                       # Static assets
├── 📄 components.json               # shadcn/ui config
├── 📄 next.config.mjs               # Next.js config
├── 📄 package.json                  # Dependencies
├── 📄 tailwind.config.ts            # Tailwind config
└── 📄 tsconfig.json                 # TypeScript config
\`\`\`

---

## 🎨 Components

### **Core Components**

#### **🏠 Dashboard Components**
- `DashboardHeader` - Main dashboard header with search and actions
- `StatsCards` - Key performance indicators
- `AnalyticsChart` - Revenue and user analytics
- `RecentActivity` - Latest user activities
- `TopProducts` - Best performing products
- `DashboardFooter` - Copyright and social media links

#### **📊 Analytics Components**
- `AnalyticsOverview` - Key metrics overview
- `RevenueChart` - Revenue visualization
- `UserAnalytics` - User behavior metrics
- `TrafficSources` - Traffic source breakdown
- `ConversionFunnel` - Sales funnel analysis
- `GeographicData` - Location-based analytics
- `RealtimeMetrics` - Live data monitoring

#### **👥 User Management**
- `UsersTable` - User data table with actions
- `UsersHeader` - Search and filter controls
- User CRUD operations with role management

#### **📦 Product Management**
- `ProductsGrid` - Product catalog display
- `ProductsHeader` - Product search and filters
- Inventory management and categorization

#### **🛒 Order Management**
- `OrdersTable` - Order listing with status tracking
- `OrderDetails` - Comprehensive order information
- `OrdersStats` - Order analytics and metrics

#### **📅 Calendar System**
- `CalendarView` - Interactive calendar interface
- `CalendarSidebar` - Event filters and quick actions
- `EventForm` - Event creation and editing

#### **💬 Messaging System**
- `ConversationList` - Chat conversation sidebar
- `ChatArea` - Main messaging interface
- `MessagesSidebar` - Contact info and settings

### **UI Components (shadcn/ui)**
- `Button` - Various button styles and sizes
- `Card` - Content containers
- `Table` - Data tables with sorting
- `Form` - Form components with validation
- `Dialog` - Modal dialogs
- `Dropdown` - Dropdown menus
- `Badge` - Status indicators
- `Avatar` - User profile images
- `Progress` - Progress indicators
- `Tabs` - Tabbed interfaces
- `Calendar` - Date picker
- `Chart` - Data visualization

---

## 📱 Pages

### **🏠 Dashboard (`/`)**
- Overview of key metrics and recent activities
- Quick access to all major features
- Real-time data updates

### **📊 Analytics (`/analytics`)**
- Comprehensive business analytics
- Revenue tracking and forecasting
- User behavior analysis
- Traffic source monitoring

### **👥 Users (`/users`)**
- User management interface
- Role-based access control
- User activity monitoring
- Bulk operations

### **📦 Products (`/products`)**
- Product catalog management
- Inventory tracking
- Category organization
- Product performance metrics

### **🛒 Orders (`/orders`)**
- Order processing workflow
- Status tracking and updates
- Customer communication
- Payment management

### **📅 Calendar (`/calendar`)**
- Event scheduling and management
- Team calendar coordination
- Meeting planning
- Reminder system

### **💬 Messages (`/messages`)**
- Internal communication platform
- Real-time messaging
- File sharing capabilities
- Contact management

### **⚙️ Settings (`/settings`)**
- Application configuration
- User preferences
- Security settings
- System administration

---

## 🔧 Configuration

### **Environment Variables**
Create a `.env.local` file in the root directory:

\`\`\`env
# Application
NEXT_PUBLIC_APP_NAME="AdminCorp Dashboard"
NEXT_PUBLIC_APP_VERSION="2.0.0"

# API Configuration
NEXT_PUBLIC_API_URL="https://api.admincorp.com"
API_SECRET_KEY="your-secret-key"

# Database (if applicable)
DATABASE_URL="your-database-url"

# Authentication (if applicable)
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# External Services
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-password"
\`\`\`

### **Tailwind Configuration**
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing scale
- Custom font families
- Dark mode support
- Component-specific utilities

### **shadcn/ui Configuration**
Components are configured in `components.json`:
- TypeScript support
- Tailwind CSS integration
- Custom component aliases
- Automatic import resolution

---

## 📊 Analytics

### **Key Metrics Tracked**
- **Revenue Analytics** - Daily, weekly, monthly revenue
- **User Engagement** - Active users, session duration
- **Product Performance** - Sales, views, conversions
- **Order Analytics** - Order volume, status distribution
- **Traffic Sources** - Organic, direct, social, referral
- **Geographic Data** - User location distribution

### **Real-time Features**
- Live user count
- Real-time order updates
- Instant message notifications
- Dynamic chart updates
- Live activity feed

---

## 🎯 Usage Examples

### **Adding a New Page**

1. **Create the page component**
\`\`\`tsx
// app/new-page/page.tsx
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function NewPage() {
  return (
    <SidebarInset>
      {/* Your page content */}
    </SidebarInset>
  )
}
\`\`\`

2. **Add to sidebar navigation**
\`\`\`tsx
// components/app-sidebar.tsx
const items = [
  // ... existing items
  {
    title: "New Page",
    url: "/new-page",
    icon: YourIcon,
  },
]
\`\`\`

### **Creating Custom Components**

\`\`\`tsx
// components/custom/my-component.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Custom Component</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  )
}
\`\`\`

### **Adding New Charts**

\`\`\`tsx
// components/analytics/custom-chart.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CustomChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Chart implementation */}
      </CardContent>
    </Card>
  )
}
\`\`\`

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
\`\`\`bash
git checkout -b feature/amazing-feature
\`\`\`

3. **Make your changes**
4. **Run tests and linting**
\`\`\`bash
npm run lint
npm run type-check
\`\`\`

5. **Commit your changes**
\`\`\`bash
git commit -m 'Add amazing feature'
\`\`\`

6. **Push to the branch**
\`\`\`bash
git push origin feature/amazing-feature
\`\`\`

7. **Open a Pull Request**

### **Code Style Guidelines**
- Use TypeScript for all new code
- Follow the existing component structure
- Add proper JSDoc comments
- Ensure responsive design
- Test on multiple browsers
- Follow accessibility guidelines

### **Commit Convention**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/updates
- `chore:` - Maintenance tasks

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

\`\`\`
MIT License

Copyright (c) 2025 Alpian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`

---

## 👨‍💻 Author

<div align="center">
  <img src="https://github.com/alpian.png" width="100" height="100" style="border-radius: 50%;" alt="Alpian" />
  
  **Alpian**
  
  *Full Stack Developer*
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alpian)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/alpian)
  [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/alpian)
  [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/alpian)
  
  📧 **Email:** alpian@example.com  
  🌐 **Website:** [alpian.dev](https://alpian.dev)  
  ☕ **Buy me a coffee:** [ko-fi.com/alpian](https://ko-fi.com/alpian)
</div>

---

## 🙏 Acknowledgments

- **[Vercel](https://vercel.com)** - For the amazing Next.js framework
- **[shadcn](https://twitter.com/shadcn)** - For the beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com)** - For the utility-first CSS framework
- **[Radix UI](https://radix-ui.com)** - For the accessible component primitives
- **[Lucide](https://lucide.dev)** - For the consistent icon library

---

## 📈 Project Stats

<div align="center">
  <img src="https://img.shields.io/github/stars/alpian/admincorp-dashboard?style=for-the-badge" alt="Stars" />
  <img src="https://img.shields.io/github/forks/alpian/admincorp-dashboard?style=for-the-badge" alt="Forks" />
  <img src="https://img.shields.io/github/issues/alpian/admincorp-dashboard?style=for-the-badge" alt="Issues" />
  <img src="https://img.shields.io/github/license/alpian/admincorp-dashboard?style=for-the-badge" alt="License" />
</div>

---

<div align="center">
  <p>⭐ Star this repository if you find it helpful!</p>
  <p>Made with ❤️ by <a href="https://github.com/alpian">Alpian</a></p>
</div>
\`\`\`

Saya telah membuat dokumentasi README yang sangat lengkap dan profesional dengan fitur-fitur berikut:

## 🎯 **Highlights Dokumentasi:**

### **📋 Struktur Lengkap**
- **Table of Contents** - navigasi yang mudah
- **Badges** - teknologi dan status project
- **Visual Appeal** - emoji dan formatting yang menarik

### **📖 Konten Komprehensif**
- **Features** - daftar lengkap fitur dashboard
- **Tech Stack** - semua teknologi yang digunakan
- **Quick Start** - panduan instalasi step-by-step
- **Project Structure** - struktur folder yang detail
- **Components** - dokumentasi semua komponen
- **Pages** - penjelasan setiap halaman
- **Configuration** - setup environment dan config

### **👨‍💻 Developer-Friendly**
- **Usage Examples** - contoh kode untuk development
- **Contributing Guidelines** - panduan kontribusi
- **Code Style** - standar coding yang digunakan
- **Commit Convention** - format commit yang konsisten

### **📄 Legal & Credits**
- **MIT License** - lisensi open source
- **Author Section** - informasi lengkap tentang Alpian
- **Social Media Links** - semua platform social media
- **Acknowledgments** - credit untuk tools yang digunakan

### **🎨 Visual Elements**
- **Badges** - teknologi dan statistik
- **Emojis** - membuat dokumentasi lebih menarik
- **Code Blocks** - syntax highlighting
- **Tables** - informasi terstruktur
- **Centered Sections** - layout yang profesional

## 🚀 **Keunggulan README ini:**

1. **Professional** - terlihat seperti project enterprise
2. **Comprehensive** - mencakup semua aspek project
3. **User-Friendly** - mudah dibaca dan diikuti
4. **Developer-Oriented** - fokus pada kebutuhan developer
5. **SEO Optimized** - keywords yang tepat untuk GitHub search
6. **Maintainable** - mudah diupdate dan dipelihara

README ini akan membuat project Anda terlihat sangat profesional dan menarik bagi developer lain yang ingin berkontribusi atau menggunakan dashboard ini! 🌟
