# Vaishali Sunepwar — Portfolio

Personal portfolio of **Vaishali Sunepwar**, an AI/ML student at PCCOE Pune who learns by building. The site shows my projects in computer vision, full-stack development and data analytics, along with my hackathons, open-source work and certificates.

🌐 **Live site:** https://vaishali-portfolio-gamma.vercel.app

---

## ✨ Features

- Animated hero section with rotating roles
- About, Skills, Projects, Experience, Certificates and Contact sections
- Project cards with preview images that link to each GitHub repo
- Particle background and glowing orbs with a "detection" visual theme
- Fully responsive, from mobile to desktop
- All content kept in a single file (`src/data.js`)

## 🚀 Featured projects

| Project | Description | Repo |
|---|---|---|
| **LocalMart** | Full-stack grocery e-commerce platform | [Prodigy_FS_3](https://github.com/111-Vaishali/Prodigy_FS_3) |
| **ChatSphere** | Real-time chat app with Socket.IO | [Prodigy_FS_4](https://github.com/111-Vaishali/Prodigy_FS_4) |
| **PPEVision** | YOLO11s-based worker safety / PPE compliance monitoring | [PPEVision](https://github.com/111-Vaishali/PPEVision) |
| **Greenery Detection** | OpenCV + KNN/SVM vegetation detection | [Greenary_Detection](https://github.com/111-Vaishali/Greenary_Detection) |
| **WhatsApp Chat Analyzer** | Flask app for chat analytics | [WhatsApp-Chat-Analyzer](https://github.com/111-Vaishali/WhatsApp-Chat-Analyzer) |
| **CreditHealth** | Fintech simulation platform (DevHack, IIT Dharwad) | [HM058_HackMatrix](https://github.com/111-Vaishali/HM058_HackMatrix) |

## 🛠️ Tech stack

- **React 19** with **Vite**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Lucide React** for icons
- Deployed on **Vercel**

## 📁 Project structure

```text
vaishali-portfolio/
├── public/
│   ├── certificates/     # certificate images
│   └── projects/         # project preview images
├── src/
│   ├── components/       # Hero, About, Skills, Projects, etc.
│   ├── data.js           # all portfolio content lives here
│   ├── App.jsx
│   └── index.css
├── index.html
└── vite.config.js
```

## 💻 Run locally

```bash
git clone https://github.com/111-Vaishali/vaishali-portfolio.git
cd vaishali-portfolio
npm install
npm run dev
```

The site opens at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview
```

## ✏️ Editing content

Everything personal — name, roles, skills, projects, experience, certificates and links — is in **`src/data.js`**. Edit that file and the whole site updates.

- **Add a project:** add an object to the `projects` array and put its image in `public/projects/`.
- **Add a certificate:** add an entry to `certificates` and put its image in `public/certificates/`.

## 🚢 Deployment

Deployed on Vercel, which auto-detects Vite. Every push to `main` triggers a new deploy.
Settings: framework **Vite**, build command `npm run build`, output directory `dist`.

## 📬 Contact

- GitHub: [@111-Vaishali](https://github.com/111-Vaishali)
- LinkedIn: [vaishali-sunepwar](https://www.linkedin.com/in/vaishali-sunepwar)
- Email: sunepwar.vaishali@gmail.com

---

Built with React, caffeine and a few 2am commits. 🌙
