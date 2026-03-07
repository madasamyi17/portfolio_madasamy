# Portfolio (React + Vite)

## Run Frontend

```bash
npm install
npm run dev
```

## Contact Form Mail API (Nodemailer)

This project includes a backend endpoint at `POST /api/contact` powered by Express + Nodemailer.

1. Create a `.env` file in the project root based on `.env.example`.
2. Fill these values:

```env
PORT=5000
SMTP_SERVICE=gmail
CONTACT_EMAIL=your_email@gmail.com
CONTACT_PASSKEY=your_app_password
CONTACT_RECEIVER_EMAIL=your_receiver_email@gmail.com
```

3. Start backend:

```bash
npm run server
```

4. Start frontend in another terminal:

```bash
npm run dev
```

Vite proxies `/api/*` requests to `http://localhost:5000` during development.
