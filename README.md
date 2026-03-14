# 🍽️ Pizza Shop - Administrative Dashboard

![Pizza Shop](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)

A modern and comprehensive administrative dashboard for managing pizzerias, built with React, TypeScript, and industry best practices.

## 📋 About The Project

**Pizza Shop** is a web application designed to simplify restaurant and pizzeria management, offering a complete dashboard with real-time order viewing, performance metrics, menu management, and much more.

### 🎯 Objective

To provide an intuitive and efficient interface for owners and managers to monitor and control all restaurant operations from a centralised location.

## 🚀 Features

### 🔐 Authentication & Registration
- **User Login** - Secure authentication system
- **Restaurant Registration** - Complete onboarding for new establishments
- **Logout** - Manual and automatic options for inactivity

### 📊 Dashboard & Metrics
- **Business Overview** - Cards displaying key metrics
- **Revenue Chart** - Visualisation of turnover over time
- **Popular Products Chart** - Analysis of best-selling items
- **Real-time Metrics** - Automatic data updates

### 📦 Order Management
- **Order Listing** - Complete view with filtering options
- **Advanced Filters** - By status, period, customer, etc.
- **Pagination** - Efficient navigation between pages
- **Order Details** - Complete view of each order
- **Real-time Operations**:
  - Cancel order
  - Update order status
  - Optimistic interface for better experience

### 👤 Profile & Settings
- **Profile Management** - Update restaurant information
- **Theme Toggle** - Switch between light/dark themes
- **Context Menu** - Quick actions and navigation

### 🎨 UX/UI
- **Loading States** - Visual feedback during loading
- **Empty States** - User-friendly interface when no data is available
- **Toast Notifications** - Action feedback using sonner
- **404 Page** - Handling of non-existent routes
- **SEO Optimised** - Metadata management with React Helmet

## 🔄 Application Flow

```mermaid
graph TD
    A[Login/Register] --> B{Dashboard}
    B --> C[Overview]
    B --> D[Orders]
    B --> E[Profile]
    B --> F[Settings]
    
    D --> G[Listing]
    G --> H[Filters]
    G --> I[Pagination]
    G --> J[Details]
    J --> K[Cancel Order]
    J --> L[Update Status]
    
    C --> M[Revenue Chart]
    C --> N[Products Chart]
    C --> O[Metrics]
    
    E --> P[Update Data]
    P --> Q[Toast Feedback]
