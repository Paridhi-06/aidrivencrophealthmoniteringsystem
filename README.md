# AI-Driven Crop Health Monitoring System

A web-based project built to demonstrate how artificial intelligence, multispectral imaging, and IoT sensors can be used to detect crop diseases early and support precision farming decisions.

## About the Project

This project explores the use of deep learning and real-time sensor data for automated crop health monitoring. The idea is to move away from manual inspection — which is slow and often too late — toward a system that continuously monitors fields and flags problems as soon as they appear.

The system is designed around three core capabilities:
- Early disease detection using AI models trained on crop image datasets
- Hardware integration with drones, IoT sensors, and edge devices
- A clean web interface to visualize results and recommendations

## Tech Stack

- **React** with **TypeScript** — component-based frontend
- **Vite** — fast build tooling and dev server
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible UI component library
- **React Router** — client-side routing
- **React Helmet** — page-level metadata management
- **TanStack Query** — async state management

## Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # Reusable UI components
│   ├── ui/              # shadcn base components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── BenefitsSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── PipelineSection.tsx
│   ├── HardwareSection.tsx
│   ├── ProblemSection.tsx
│   ├── ChallengesSection.tsx
│   ├── SuccessStoriesSection.tsx
│   ├── BibliographySection.tsx
│   └── Footer.tsx
├── pages/               # Route-level page components
│   ├── Home.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── Hardware.tsx
│   ├── Detection.tsx
│   ├── Demo.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Root component with routing
├── main.tsx             # App entry point
└── index.css            # Global styles and CSS variables
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — overview, benefits, success stories |
| `/problem` | Problem statement and current challenges |
| `/how-it-works` | System architecture and AI pipeline |
| `/hardware` | IoT sensors, drones, and edge devices |
| `/detection` | Disease detection pipeline |
| `/demo` | Interactive simulated demo |

## Getting Started

Make sure you have **Node.js** (v18+) and **npm** installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The app runs at `http://localhost:8080` by default.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Notes

- The demo page simulates AI disease detection — in a real deployment, this would connect to a trained model backend
- The project is structured to be extended with a real ML API (e.g., a Flask/FastAPI backend serving a PyTorch or TensorFlow model)
- Hardware integration (drones, IoT) is described conceptually; actual sensor data pipelines would be added in a production version
