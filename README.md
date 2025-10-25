# My Portfolio

- This project is my **personal portfolio website** designed to showcase Mukit Hossen’s work, projects, and blogs. It includes both **public-facing pages** for visitors and a **private dashboard** for the portfolio owner to manage content securely.

---

## Live Link

```
https://mahabubalam.vercel.app/
```

## admin infromation

```
email:mahaubalom709@gmail.com
password:20302030WA@
```

## Features

- Public users can view all blogs and individual blog pages
- Blogs are dynamically generated using ISR with getStaticPaths + revalidate for efficient content fetching
- Public section displaying personal projects with thumbnail, live link, description, and key features
- Uses ISR (Incremental Static Regeneration) for dynamic content updates without rebuilding the entire site

- Private, owner-only dashboard for managing blogs and projects
- JWT-based authentication ensures secure login and access control
- Mobile-first and fully responsive across all devices

## Technologies Used

- **Frontend:**
- Next.js
- TypeScript
- Tailwind CSS
- **Backend:**
- Node.js
- Express.js
- PostgreSQL
- Prisma
- JWT (secure authentication)

## Installation & Setup

```
git clone https://github.com/Mahabub2030/Portfolio-Frontend
```

```
cd Portfolio-Frontend
```

```
npm install
```

Create a **.env.local** file and add:

```
NEXT_PUBLIC_BASE_API=http://localhost:8000/api/v1
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
JWT_SECRET=your_jwt_secret
```

```
npm run dev
```

## Folder Structure

```bash
b5a7-portfolio/
├── app/
│   ├── modules/
│   │   ├── auth/
│   │   ├── blog/
│   │   ├── project/
│   │   └── user/
│   ├── routes/
│   └── services/
├── components/
│   ├── common/
│   ├── modules/
│   └── layouts/
├── pages/
│   ├── api/
│   ├── dashboard/
│   └── public/
├── prisma/
├── public/
├── styles/
└── package.json

```

## Author

- Developed by **Mahabub ALam**
- **FullStack Developer**

---
