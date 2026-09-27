# Cognevance Project 1 — Responsive Portfolio Website

A personal portfolio website with a React frontend and a Spring Boot + MySQL
backend that stores contact form submissions in a database.

## Tech Stack
- **Frontend:** React 18 (Vite)
- **Backend:** Java 17, Spring Boot 3 (Web, Data JPA, Validation)
- **Database:** MySQL
- **Deployment targets:** Vercel/Netlify (frontend), Render/Railway (backend + MySQL)

## Project Structure
```
cognevance_portfolio/
├── frontend/          # React + Vite app
│   └── src/
│       ├── components/  (Navbar, About, Skills, Projects, Contact)
│       ├── App.jsx
│       └── App.css
└── backend/           # Spring Boot app
    └── src/main/java/com/cognevance/portfolio/
        ├── controller/   (ContactController)
        ├── entity/       (ContactMessage)
        ├── repository/   (ContactMessageRepository)
        ├── service/       (ContactMessageService)
        └── config/       (GlobalExceptionHandler)
```

## Backend Setup
1. Install Java 17+ and MySQL, and have MySQL running locally.
2. In `backend/src/main/resources/application.properties`, set your MySQL
   username/password (or export `DB_USERNAME` / `DB_PASSWORD` env vars —
   the properties file already falls back to those).
3. Run:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   The API starts on `http://localhost:8080`. The `contact_messages` table
   is created automatically (`ddl-auto=update`) the first time it runs.
4. Test it directly:
   ```bash
   curl -X POST http://localhost:8080/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
   ```

## Frontend Setup
1. Install Node.js 18+.
2. Run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The app opens on `http://localhost:5173`. Requests to `/api/*` are proxied
   to the backend at `localhost:8080` (configured in `vite.config.js`).
3. Edit `src/components/Projects.jsx` to add your real projects.

## API Endpoints
| Method | Endpoint       | Description                          |
|--------|----------------|---------------------------------------|
| POST   | `/api/contact` | Submit a contact form message         |
| GET    | `/api/contact` | List all submitted messages (admin)   |
| GET    | `/api/health`  | Health check                          |

## Deployment
- **Frontend (Vercel/Netlify):** deploy the `frontend/` folder. Set the
  `VITE_API_BASE` environment variable to your deployed backend URL
  (e.g. `https://your-backend.onrender.com/api`).
- **Backend (Render/Railway):** deploy the `backend/` folder as a Java/Maven
  service. Add a MySQL database add-on/plugin and set `DB_URL`,
  `DB_USERNAME`, `DB_PASSWORD` as environment variables to match it.
- Update the `@CrossOrigin` origin in `ContactController.java` from `*` to
  your actual deployed frontend domain before going live.

## Submission Checklist (per Cognevance instructions)
- [ ] Push to a GitHub repo named `cognevance_portfolioWebsite` (or similar,
      following the `cognevance_projectName` format)
- [ ] Include this README
- [ ] Add screenshots/demo images of the deployed site
- [ ] Deploy frontend + backend and add the live links here
- [ ] Email the repo link + your experience/review to support@cognevance.online
