# Product Requirements Document (PRD)
## Anurag Rastogi - Professional Insurance Consulting Landing Page

---

## Original Problem Statement
Build a professional landing page for Anurag Rastogi, a general insurance and actuarial consultant with 37 years of experience. The page should showcase his expertise, services, credentials, and provide a way for potential clients to contact him.

---

## User Personas

### Primary Persona: Potential Corporate Clients
- Insurance companies seeking actuarial consulting
- PE funds and foreign entities looking for India market entry strategies
- Companies needing M&A advisory in insurance sector
- Organizations requiring underwriting and claims optimization

### Secondary Persona: Recruiters & Partners
- Deloitte stakeholders
- Professional bodies and committees
- Industry conference organizers

---

## Core Requirements (Static)

### Content Sections
1. **Hero Section**: Compelling headline with clear value proposition
2. **About Section**: Professional profile highlighting 37 years experience
3. **Services Section**: 4 main service categories (Actuarial, Underwriting, Claims, Reinsurance)
4. **Experience Section**: Companies worked with, roles held, committee memberships
5. **Contact Section**: Professional contact form with subject categorization
6. **Footer**: Professional affiliations and credentials

### Design Requirements
- Professional, modern design suitable for insurance consulting
- Navy blue and slate gray color scheme (no dark gradients)
- Clean typography with ample whitespace
- Smooth animations and transitions
- Mobile responsive design
- Shadcn UI components throughout

### Functional Requirements
- Contact form with validation
- Smooth scroll navigation
- Interactive elements (hover states, form inputs)
- Toast notifications for form submission

---

## What's Been Implemented

### ✅ Completed - December 2025

**Frontend (Mock Data)**
- Hero section with professional background image
- About section with consultant profile and qualifications
- Services section with 4 service categories displayed in cards
- Experience section with tabs (Companies, Roles, Committees)
- Fully functional contact form (frontend only - mock submission)
- Professional footer with affiliations
- Custom animations and smooth scrolling
- Responsive design using Tailwind CSS
- Shadcn UI components (Card, Button, Input, Select, Tabs, etc.)

**Files Created**
- `/app/frontend/src/data/mock.js` - Mock data structure
- `/app/frontend/src/components/Hero.jsx`
- `/app/frontend/src/components/About.jsx`
- `/app/frontend/src/components/Services.jsx`
- `/app/frontend/src/components/Experience.jsx`
- `/app/frontend/src/components/ContactForm.jsx`
- `/app/frontend/src/components/Footer.jsx`
- `/app/frontend/src/pages/Home.jsx`
- Updated `/app/frontend/src/App.js` and `/app/frontend/src/App.css`

---

## Architecture

### Technology Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useRef)
- **Notifications**: Sonner (toast notifications)
- **Icons**: Lucide React

### Design Patterns
- Component-based architecture
- Reusable UI components from Shadcn
- Mock data separation for easy backend integration
- Responsive-first design approach

---

## Prioritized Backlog

### P0 (Optional - Backend Integration)
- [ ] Backend API for contact form submission
- [ ] Email service integration (SendGrid/AWS SES)
- [ ] Contact form data storage in MongoDB
- [ ] Form submission confirmation emails

### P1 (Enhancements)
- [ ] Add testimonials section with real client feedback
- [ ] Implement blog/insights section for thought leadership
- [ ] Add downloadable service brochure PDF
- [ ] SEO optimization (meta tags, structured data)
- [ ] Analytics integration (Google Analytics)

### P2 (Nice to Have)
- [ ] Multi-language support (Hindi, English)
- [ ] Dark mode toggle
- [ ] Newsletter subscription
- [ ] Case studies section
- [ ] Video introduction

---

## Next Tasks

1. **User Feedback**: Review the landing page and suggest any content or design changes
2. **Optional Backend**: If needed, implement backend for contact form with email notifications
3. **Content Updates**: Add real testimonials, case studies, or additional content as needed
4. **SEO**: Add meta tags and optimize for search engines
5. **Deployment**: Already deployed at preview URL, ready for production

---

## Notes
- Contact form currently uses mock submission (shows success toast, no actual email sent)
- All data is stored in `/app/frontend/src/data/mock.js` for easy updates
- Images sourced from Unsplash (professional stock photos)
- Design follows modern professional standards suitable for senior consulting services
- No dark gradients used as per design guidelines
