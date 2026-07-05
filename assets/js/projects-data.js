/*
  ============================================================
  HOW TO ADD A NEW PROJECT
  ============================================================
  Copy the template below, paste it as a new object inside the
  PROJECTS array, and fill in your details. That's it — the
  site automatically renders a card for every entry in this
  file, newest-looking first is up to you (order = display order).

  TEMPLATE:
  {
    id: "unique-slug",                 // no spaces, used internally
    title: "Project Name",
    tagline: "One-line description of what it is",
    period: "2025",                    // year or range
    role: "Your Role",
    description: "2-3 sentence overview of the project.",
    highlights: [
      "Key achievement or feature #1",
      "Key achievement or feature #2"
    ],
    tech: ["React", "Node.js"],        // array of tech tags
    links: {
      live: "https://example.com",     // leave "" if none
      github: "https://github.com/you/repo" // leave "" if none
    },
    image: "assets/images/projects/your-image.jpg", // leave "" for placeholder
    featured: false                    // true = shown larger at top
  }
  ============================================================
*/

const PROJECTS = [
  {
    id: "maintena",
    title: "Maintena",
    tagline: "SaaS Platform for Building & Strata Management",
    period: "2024 — Present",
    role: "Full-Stack Developer",
    description:
      "A multi-role SaaS platform for residential building management, live on the App Store, Google Play, and web — serving Residents, Admins, Strata Council members, and Building Owners through 30 screens across 4 role-based portals.",
    highlights: [
      "Built the mobile app in React Native (Expo SDK 51) with TypeScript, Expo Router v3 (file-based routing), NativeWind, TanStack Query v5, Zustand, and Axios with automatic JWT token refresh.",
      "Implemented RBAC and JWT authentication across all portals, enforcing role-specific navigation, API access, and UI rendering.",
      "Built a real-time Emergency Alert System: push notifications bypass Do Not Disturb via an Android MAX-priority channel, triggering a non-dismissible full-screen modal with repeating haptic vibration.",
      "Engineered 7 notification types (parcel delivery, issue updates, emergency alerts, visitor check-in, announcements, fee reminders, booking confirmations) across dedicated Android channels.",
      "Delivered resident features (issue reporting with photo attachments, digital parcel signatures, visitor pre-registration, amenity booking, document vault) and admin/council features (live dashboards, fee tracking, AGM & motion voting, bylaw workflows).",
      "Deployed to the App Store and Google Play using EAS Build + EAS Submit across separate development, preview, and production profiles."
    ],
    tech: [
      "React Native", "TypeScript", "Expo SDK 51", "Expo Router", "NativeWind",
      "TanStack Query", "Zustand", "Node.js", "Express", "PostgreSQL", "AWS (EC2, S3)", "JWT"
    ],
    links: {
      live: "https://maintena.ca",
      github: ""
    },
    image: "",
    featured: true
  }
];
