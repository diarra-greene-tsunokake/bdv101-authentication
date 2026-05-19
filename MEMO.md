# 📝 Memo: Role-Based Access Control (RBAC) in Express

This is a quick-reference guide for your **BDV101** studies. It breaks down the code we just wrote, how to run it, and why it works the way it does.

---

## 🚀 How to Run the App

1. **Open your terminal** in the project directory.
2. **Start the server**:
   ```bash
   node index.js
   ```
   *You should see:* `Server is running on http://localhost:3000`

3. **Stop the server**:
   Press **`Ctrl + C`** in your terminal.

> [!IMPORTANT]
> **The Server Freeze Rule:** 
> When you make changes to `index.js` (like changing your role from `"admin"` to `"user"`), the running server **will not** update automatically. You **must** stop the server (`Ctrl + C`) and restart it (`node index.js`) for the changes to take effect!

---

## 🧪 How to Test the Endpoints

| URL | Required Role | If User is `admin` | If User is `user` |
|:---|:---:|:---:|:---:|
| `http://localhost:3000/admin` | `"admin"` | ✅ `200 OK` (Welcome) | ❌ `403 Forbidden` |
| `http://localhost:3000/profile` | `"user"` | ❌ `403 Forbidden` | ✅ `200 OK` (Welcome) |

---

## 🧠 Key BDV101 Concepts Explained

### 1. What is Middleware?
Middleware is like a **security checkpoint** in a building. Before a visitor (Request) reaches their destination room (Route Handler), they must pass through the checkpoint.
- If they have the correct keycard: they are allowed in.
- If not: they are turned away at the door.

### 2. The `next()` function
Inside Express middleware, `next()` is the green light.
* Calling `next()` tells Express: *"Checkpoint passed. Send them to the next function!"*
* If you **forget** to call `next()`, the browser will spin forever waiting for a response that never comes.

### 3. HTTP Status Codes
* **`200 OK`**: The request succeeded, and the server is returning the data.
* **`403 Forbidden`**: The server understood who you are, but you do not have permission to access that specific URL.

---

## 🎨 Visual Guide
You can open **`03-explaining-middleware.html`** in your web browser (double-click it from Finder) to use the interactive simulator and see how the requests flow through the bouncer dynamically!
