# Project Specification – video-order

## Overview

"video-order" is a commercial landing project for selling a paid video review service.

Service:
Personal video review from Max (+100500 format).

Fixed price: 100500₽ (must be clearly communicated from the first screen).

The project consists of a React frontend and a Strapi backend (CMS/admin panel).

---

## Tech Stack

Frontend:
- React
- TypeScript (strict mode)
- Vite
- Functional components only
- Named exports only
- No global state manager
- Minimal architecture, no overengineering

Backend:
- Strapi (CMS)
- Used to:
  - Manage texts
  - Manage FAQ
  - Manage legal information
  - Upload and manage video
  - Potentially store orders in future versions

---

## Main User Flow

Home → Order Conditions → Online Payment → Success / Status → (Future: Feedback Form)

---

## 1. Home Page

Purpose:
Present the service clearly and build trust.

Sections:

### Hero Section
- Main heading (e.g. “Обзор на ваше видео от Макса +100500”)
- Short description of the service
- Fixed price 100500₽ clearly visible
- CTA button “Заказать” → navigates to Order Conditions page

### Detailed Description
- Modal window OR expandable block
- Longer text explanation of service
- Duplicate CTA button inside
- Price must be clearly stated again

Purpose:
User can choose:
- Watch video explanation
- Or read detailed text version

### Video Section
- Video where Max explains the service
- Lazy loaded
- Poster image before play
- No autoplay with sound

### FAQ (Optional but recommended)
- 3–4 questions (e.g. delivery time, refunds)
- Accordion or modal format
- Content managed via Strapi

### Footer
- Legal transparency (IP/LLC placeholder)
- Email
- Social links
- Clear non-scam positioning

---

## 2. Order Conditions Page

Purpose:
Prepare user for payment and collect email for receipt.

Content:

- Public offer / agreement placeholder text
- Email input (required)
- Checkbox “I agree with terms” (required)
- Button “Перейти к оплате”

Behavior:

- Button disabled until:
- Valid email entered
- Checkbox checked
- Basic validation only
- On click → redirect to external online payment system
- Email must be passed to payment provider (for receipt)

---

## 3. Online Payment

MVP:
- Redirect-based integration
- Payment provider to be selected
- Integration isolated in API layer

Future:
- Handle payment statuses
- Webhook processing (requires backend logic)

---

## 4. Payment Status Handling (Planned)

Possible screens:
- Waiting for payment
- Payment success
- Payment failed

Routing should allow adding these screens easily.

---

## 5. Feedback / Order Form (Future Phase)

Potential fields:
- Name
- Email
- Phone
- Order description
- Video upload
- Additional options

Important considerations:
- Where to store uploaded video
- How to associate order with payment
- Whether to automate or handle manually

Requires:
- Backend logic
- Order entity in Strapi
- Possibly user entity

---

## 6. Success Screen

Simple confirmation screen:
- Order received
- Payment successful
- “We will contact you”

Future decision:
- Manual contact by Max
- Or partial automation

---

## Non-Functional Requirements

- Clean, minimal architecture
- Strong TypeScript typing
- No unnecessary abstractions
- Good UX
- High trust presentation
- Responsive layout
- SEO-friendly structure

---

## MVP Scope

MVP includes:
- Home page
- Order Conditions page
- Redirect to payment
- Basic success screen

Everything else is future iteration.