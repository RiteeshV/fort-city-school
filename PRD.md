# Fort City School — Landing Page PRD
**Product Requirements Document**
Version: 1.0 | Date: April 2024

---

## 1. Project Overview

**Goal:** Build a modern, visually impressive landing page for Fort City School (FCS) featuring a 3D interactive school campus model, designed to attract prospective parents and students.

**Live URL:** www.fortcityschool.com  
**School:** Fort City School, Vizianagaram, Andhra Pradesh  
**Affiliation:** CBSE (ID: 130394)  
**Management:** Sree Balajee Education Society

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| 3D Engine | Three.js + @react-three/fiber + @react-three/drei |
| Animations | Framer Motion |
| Styling | Tailwind CSS |
| Language | JavaScript (JSX) |

---

## 3. Brand Identity

| Token | Value |
|-------|-------|
| Primary | Deep Navy `#1A2E5A` |
| Accent | Gold/Saffron `#F4A81D` |
| Background | Off-white `#F8F8F5` |
| Font - Headings | Playfair Display (serif) |
| Font - Body | Inter (sans-serif) |

**Key Brand Words:** CHARACTER · CONFIDENCE · HOLISTIC · EXCELLENCE

---

## 4. Page Sections

### 4.1 Navbar
- Fixed top navigation
- Logo: FCS badge + school name + tagline
- Links: About · Programs · Facilities · Achievements · Leadership · Contact
- CTA: "Apply Now" button
- Mobile: Hamburger menu with slide-down drawer
- Behavior: Transparent → navy glass on scroll

### 4.2 Hero Section (3D)
- Full-screen Three.js canvas (`100vh`)
- **3D school campus model** built with procedural geometry:
  - Main building (3 floors) + left/right wings
  - Windows grid, entrance canopy, accent stripes
  - Entrance gate with arch
  - Trees, bushes, flag pole with animated flag
  - Playground with circle markings
  - Ground plane, driveway, boundary walls
- OrbitControls (drag to rotate, scroll to zoom)
- Auto-subtle rotation animation
- Overlay: school name, tagline, CTA buttons
- Bottom fade gradient to next section

### 4.3 Stats / About Section
- Animated count-up numbers (triggered on scroll-into-view):
  - 2011 (Founded) · 38+ Classrooms · 3,000+ Books · 6 Labs · 12+ Years
- Vision block (left)
- Mission block (right)

### 4.4 Programs Section
- 6 cards (2×3 grid):
  - Pre-Primary (Nursery–KG)
  - Primary (Class I–V)
  - Middle School (Class VI–VIII)
  - Secondary (Class IX–X)
  - Science Stream (Class XI–XII)
  - Commerce & Humanities (Class XI–XII)
- Each card: gradient top bar, icon, grade range, description, 4 highlights
- Hover: lift + arrow reveal

### 4.5 Facilities Section
- 12-card grid with icons
- Labs, Library, Music, Dance, AV Room, Playground, Indoor Games, Medical
- Safety banner: CCTV, guarded entry, fire safety features

### 4.6 Achievements Section
- 4 category cards: Academics · Sports · Arts & Culture · Recognition
- Items with checkmark bullets
- Trophy row with floating emoji animation

### 4.7 Leadership Section
- Principal feature card (dark navy): Mrs. Girija Rani Bandaru, M.A., B.Ed.
- Experience stats: 10+ years teaching, 6+ years admin
- Management info: Sree Balajee Education Society
- CBSE/NEP tags

### 4.8 Admissions Section
- 4-step process flow
- Enquiry form: Student Name, Grade, Phone, Email, Message
- Success state with confirmation message
- Contact sidebar: Phone, Email, Address, School Timings

### 4.9 Footer
- Logo + tagline
- Quick links column
- Contact column (phone, email, address)
- Copyright + CBSE affiliation number

---

## 5. 3D Model Specification

### Geometry (Procedural — Three.js BoxGeometry / CylinderGeometry / SphereGeometry)

| Element | Implementation |
|---------|---------------|
| Main Building | BoxGeometry 10×4.5×4, 3 floors, navy accent stripes |
| Windows | Grid of small BoxGeometry 0.3×0.3×0.05, blue emissive |
| Wings | Two smaller 2-floor buildings (left & right) |
| Entrance Canopy | Gold-colored roof overhang |
| Gate | Two pillars + arch top + gold name plate |
| Trees | Trunk (CylinderGeometry) + 2 spheres for foliage |
| Flag Pole | Cylinder + animated BoxGeometry flag |
| Ground | Green PlaneGeometry |
| Driveway | Beige PlaneGeometry |
| Playground | Circular ring geometry marking |
| Bushes | Small spheres along front path |

### Lighting
- AmbientLight (0.6 intensity)
- DirectionalLight (1.5, warm white, casts shadows)
- Fill DirectionalLight (0.5, cool blue)
- PointLight (gold, near entrance)
- Environment preset: 'city'

### Camera & Controls
- PerspectiveCamera: position [0, 8, 22], FOV 45°
- OrbitControls: no pan, polar angle limited, min/max distance
- Subtle auto-rotation via useFrame sin wave

---

## 6. Key Content

### School Details
- **Address:** 100 Ft Ring Road, Near Varun Motors, Opp. Komati Cheruvu, Jammunarayanapuram Village, Vizianagaram Mandal, Andhra Pradesh – 535002
- **Phone:** +91 (8922) 296464 / 296454, +91 8008363616
- **Email:** fortcityschool@gmail.com, principal.fortcity@gmail.com
- **Principal:** Mrs. Girija Rani Bandaru (M.A., B.Ed.)
- **Grades:** Nursery to Class XII
- **Streams:** Science, Commerce, Humanities

### Stats
- Campus: 9,186.36 sq.m (2.27 acres)
- Built-up: 5,064.96 sq.m
- Playground: 4,803.27 sq.m
- Classrooms: 38 (each ~24.8 ft × 22.3 ft)
- Library: 3,000 books, 126 reference, 15 periodicals, 4 newspapers, 4 magazines

---

## 7. Performance Requirements

- Lighthouse score > 85
- 3D canvas with DPR capped at [1, 2]
- Draco compression for any external .glb models
- Lazy load all sections below the fold
- Mobile: disable heavy shadow maps, reduce geometry segments

---

## 8. File Structure

```
School Website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SchoolModel.jsx      ← 3D canvas scene
│   │   ├── Stats.jsx
│   │   ├── Programs.jsx
│   │   ├── Facilities.jsx
│   │   ├── Achievements.jsx
│   │   ├── Leadership.jsx
│   │   ├── Admissions.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 9. Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 10. Future Enhancements

- Replace procedural 3D model with Blender-exported `.glb` campus model
- Add clickable hotspots on 3D model (Library, Labs, etc.)
- Integrate Google Maps embed in footer
- Connect admission form to backend / Google Sheets
- Add photo gallery section
- Add student/parent testimonials carousel
- SEO optimization with structured data (SchoolOrganization schema)
