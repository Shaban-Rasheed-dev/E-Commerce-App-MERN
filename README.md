# E-Commerce-App-MERN

A full-stack e-commerce application built from scratch using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built as a self-driven rebuild (not copied from a tutorial) to genuinely understand and be able to explain every part of the codebase.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JWT (httpOnly cookies), bcryptjs
- **Validation:** Zod

## Progress So Far

This project is in early development. Work completed so far covers the **authentication module**:

- [x] User model (name, email, password, role: user/admin)
- [x] Zod validation schema for signup (name, email, password rules)
- [x] Signup controller — hashes password with bcrypt, prevents client-supplied role, checks for duplicate email
- [x] Login controller — verifies credentials, issues JWT in an httpOnly cookie
- [x] Auth middleware — verifies JWT from cookies, attaches `req.user`, handles invalid/expired tokens

## Planned Next

- [ ] Admin-only middleware (`isAdmin`)
- [ ] Product model and CRUD routes
- [ ] Cart functionality
- [ ] Order placement and management
- [ ] Admin panel (product & order management)

## Getting Started

```bash
git clone https://github.com/Shaban-Rasheed-dev/E-Commerce-App-MERN.git
cd E-Commerce-App-MERN
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

```bash
npm run dev
```

## Author

**Shaban Rasheed**
MERN Stack Developer | Lahore, Pakistan
[GitHub](https://github.com/Shaban-Rasheed-dev)
