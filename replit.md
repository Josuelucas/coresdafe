# Christian Coloring Books Sales Page

## Overview

This is a single-page sales application (landing page) for a Christian coloring books product. The application is built as a conversion-optimized sales funnel featuring a complete product showcase, testimonials, pricing tiers with upsell modals, and an urgency-driven design. The page is designed to clone a reference design with high fidelity, focusing on maximizing conversions through strategic visual hierarchy and psychological triggers.

The application is structured as a modern React SPA with a Node.js/Express backend, though the current implementation focuses primarily on the frontend presentation layer with minimal backend functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable React components with a consistent design system.

**Styling Approach**: Tailwind CSS with a custom theme configuration extending the base Shadcn/ui design tokens. The theme uses CSS custom properties for dynamic theming and includes specific color tokens for the sales page (primary blue, secondary green for CTAs, accent yellow for highlights, destructive red for urgency).

**Routing**: Wouter for lightweight client-side routing (currently single-page application with a home route and 404 fallback).

**State Management**: React Query (TanStack Query) for server state management, with local component state for UI interactions.

**Component Structure**: The application is organized into modular, reusable components:
- Page sections as standalone components (HeroSection, BenefitsSection, ProductGallery, etc.)
- Shared UI components from Shadcn/ui library
- Example components for development/testing purposes

**Key Design Decisions**:
- Component-first architecture allows easy rearrangement of page sections
- Separation of concerns between presentation components and business logic
- Mobile-first responsive design with Tailwind breakpoints
- Accessibility built-in through Radix UI primitives

### Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js.

**Server Configuration**: 
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves static built files
- Custom logging middleware for API request tracking
- JSON body parsing with raw body capture for webhook/payment integrations

**Storage Layer**: Currently implements an in-memory storage pattern with an interface-based design (IStorage) that allows easy migration to persistent storage. The memory storage implementation provides basic user CRUD operations as a foundation.

**API Structure**: RESTful API design with routes registered through a centralized routing system. API routes are prefixed with `/api` for clear separation from static assets.

**Key Design Decisions**:
- Interface-based storage allows swapping between memory and database implementations without changing business logic
- Middleware pattern for cross-cutting concerns (logging, body parsing)
- Separation of Vite development server from production static serving

### Data Storage

**Current Implementation**: In-memory storage using JavaScript Map for user data.

**Database Configuration**: Drizzle ORM is configured for PostgreSQL but not actively used in current implementation. Configuration includes:
- Schema definition in TypeScript with Zod validation
- Migration support through drizzle-kit
- Neon serverless PostgreSQL driver configured

**Schema Design**: Minimal user table with UUID primary keys, username/password fields. The schema uses `drizzle-zod` for runtime validation and type safety.

**Migration Strategy**: Schema-first approach with TypeScript definitions generating SQL migrations.

**Key Design Decisions**:
- ORM configured but storage implementation remains flexible
- Schema validation through Zod provides runtime type safety
- PostgreSQL chosen for relational data and production scalability

### External Dependencies

**Payment Processing**: ClickMax payment gateway integration with two checkout URLs:
- Premium package: `https://payments.clickmax.io/6OI63gpTqB`
- Basic package: `https://payments.clickmax.io/0qo8izQFz_`

**UI Component Library**: 
- Shadcn/ui: Pre-built accessible components
- Radix UI: Headless component primitives for complex interactions
- Lucide React: Icon library for consistent iconography

**Database**: 
- Neon Serverless PostgreSQL (configured via `@neondatabase/serverless`)
- Connection managed through DATABASE_URL environment variable

**Build & Development Tools**:
- Vite: Fast development server and build tool
- Replit-specific plugins for development banner, error overlay, and cartographer

**Styling & Theming**:
- Tailwind CSS with PostCSS for processing
- Class Variance Authority (CVA) for component variant management
- Tailwind Merge (via `cn` utility) for class conflict resolution

**Form & Validation**:
- React Hook Form with Zod resolvers for type-safe form validation
- Integration with Shadcn/ui form components

**Image Hosting**: External image hosting on ibb.co for product images.

**Key Integration Decisions**:
- External payment gateway removes PCI compliance burden
- Component library choice prioritizes accessibility and customization
- Serverless database (Neon) enables easy scaling without infrastructure management
- Replit-specific tooling enhances development experience on the platform