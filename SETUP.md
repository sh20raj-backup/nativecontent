# Native Content Template - Setup & Customization Guide

This is a premium, pixel-perfect clone template of the Native Content website. It features high-performance WebGL backdrop canvas simulations, custom interactive animations, text-scramble hover effects, infinite portfolio scroll loops, and a fully responsive layout built with Next.js, React, Tailwind CSS, and Framer Motion.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
* **Node.js** (v18.x or v20.x recommended)
* **npm** (comes with Node) or **Bun** (recommended for ultra-fast performance)

### Installation
1. Extract the contents of the zip file to your working directory.
2. Open your terminal in the project root folder.
3. Install the dependencies:
   ```bash
   # Using npm
   npm install

   # Or using Bun
   bun install
   ```

### Running Locally
To launch the hot-reloading development server:
```bash
# Using npm
npm run dev

# Or using Bun
bun dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to see the live site.

---

## 🛠️ Customizing the Site

### 1. Modifying the Roster (Directors & Collaborators)
The lists of directors and collaborators, along with their names and URL slugs, are defined in:
* **[src/components/Navigation.tsx](file:///Users/shaswatraj/Desktop/earn/templates/nativecontent/src/components/Navigation.tsx)**

To add or remove individuals, edit the `directors` and `collaborators` arrays at the top of the file:
```typescript
const directors = [
  { name: "New Director", slug: "new-director" },
  // ...
];
```

*Note: The system dynamically builds navigation submenus, listing grids, and profile detail routes automatically based on these roster arrays.*

---

### 2. Updating Profile Portfolio Videos & Details
The portfolio works displayed on the right-hand column of the individual profile detail pages are defined in:
* **[src/components/ProfileDetailClient.tsx](file:///Users/shaswatraj/Desktop/earn/templates/nativecontent/src/components/ProfileDetailClient.tsx)**

Find the `worksMap` object near the top of the file. You can map custom list objects matching the URL slugs of your roster members:
```typescript
const worksMap: Record<string, Array<{ title: string; client: string; url: string }>> = {
  default: [
    { title: "Toyota Imagine", client: "Toyota", url: "https://your-stream-url.mp4" },
    // ...
  ],
  "new-director": [
    { title: "Commercial A", client: "Brand X", url: "https://your-stream-url.mp4" },
    { title: "Commercial B", client: "Brand Y", url: "https://your-stream-url.mp4" },
  ]
};
```
*Tip: Standard HTML5 `.mp4` video files or streaming format links (such as Mux streams) are fully supported and will auto-play, loop, and mute natively.*

---

## 📦 Building and Deploying

### Production Build
To compile a fully optimized, static export version of the template:
```bash
# Using npm
npm run build

# Or using Bun
bun run build
```
This command generates a static, high-performance web package inside the `/out` directory.

### Deploying (e.g. to Surge)
You can deploy the static site to any host (Netlify, Vercel, Surge, GitHub Pages). For example, to deploy using **Surge**:
1. Build the project:
   ```bash
   npm run build
   ```
2. Run surge:
   ```bash
   npx surge ./out
   ```
3. Follow the CLI prompt to claim your domain.
