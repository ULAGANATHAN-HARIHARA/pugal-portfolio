PUGAL - AI Engineer

A personal portfolio built around TRACE, a visual identity system that connects career, projects, experiments, and ideas through one continuous path.

A visual map of the person behind the work.

Overview

PUGAL is designed as a career-first portfolio rather than a conventional template. The visual system uses a continuous trace to give the site a recognizable identity while keeping the most important information—profile, career direction, skills, projects, and contact—easy to find.

Core sections

Home — introduction and professional focus

Career — education, research, internship, and offer milestones

Work — selected project case studies

Journey — progression and development

Skills — technical capabilities

Lab — interactive experiments

Think — ideas and observations

About — profile, education, interests, and direction

Contact — professional contact links

Design system

The visual direction is:

Dark editorial interface

Technical grid and restrained signal color

Large typography

SVG trace navigation

Project-specific visual artifacts

Controlled motion instead of decorative animation

Responsive layouts for desktop, tablet, and mobile

TRACE is used as a structural navigation and storytelling device rather than as a purely decorative graphic.

Technology

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

SVG / CSS animation

HTML Canvas for the interactive Trace Field

Project structure

app/
├── layout.tsx
├── page.tsx
├── globals.css
└── work/
    └── [slug]/
        └── page.tsx

components/
├── navigation/
├── trace/
├── sections/
├── projects/
├── lab/
└── ui/

content/
├── profile.ts
├── career.ts
├── projects.ts
├── journey.ts
├── experiments.ts
└── thoughts.ts

public/
├── favicon.svg
├── images/
└── icons/

Run locally

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:3000

Create a production build:

npm run build


Originality

The portfolio's visual language, layout decisions, trace-based navigation concept, interaction structure, and implementation are developed specifically for this project.

Third-party libraries are used as development dependencies. Their respective licenses should be retained and respected.

Deployment

The project is intended for deployment on Vercel, Netlify, or another platform capable of hosting a Next.js application.

Credits

Built by Hari.

The portfolio is intended to communicate a simple idea:

Build. Learn. Evolve.
