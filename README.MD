
# 🧑‍💻 HNG Stage 0 Backend – Dynamic Profile Endpoint

## 📌 Project Overview

This project is part of the **HNG Backend Track Stage 0 Task**.
It implements a simple **RESTful API** endpoint `/me` that returns:

* Your profile information
* A random cat fact fetched dynamically from the **Cat Facts API**
* The current **UTC timestamp** in ISO 8601 format

---

## 🚀 Features

✅ RESTful GET endpoint: `/me`
✅ Dynamic timestamp generation (UTC, ISO 8601)
✅ Random cat fact fetched from external API
✅ Graceful error handling
✅ Clean and structured JSON response

---

## 🧱 API Endpoint

### **GET** `/me`

#### ✅ **Example Response**

```json
{
  "status": "success",
  "user": {
    "name": "Muhammed Awwal Musa",
    "email": "talk2muhammedawwal@gmail.com",
    "stack": [
      "Express/Node.js",
      "Python",
      "PostgreSQL"
    ]
  },
  "timestamp": "2025-10-19T13:41:11.886Z",
  "fact": "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat."
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/hng_stage_0_backend_profile_endpoint.git
cd hng_stage_0_backend_profile_endpoint
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create an `.env` file

Create a file named `.env` in the project root and add:

```
PORT=5600
```

### 4. Run the server

For development:

```bash
npm run dev
```

Or production:

```bash
npm start
```

### 5. Visit in your browser or Postman:

```
http://localhost:3000/me
```

---

## 🧰 Dependencies

| Package             | Description                                       |
| ------------------- | ------------------------------------------------- |
| **express**         | Web framework for handling routes                 |
| **axios**           | For making HTTP requests (Cat Facts API)          |
| **cors**            | Enables Cross-Origin Resource Sharing             |
| **dotenv**          | Loads environment variables from `.env`           |
| **nodemon** *(dev)* | Automatically restarts the server on file changes |

---

## 🪄 Folder Structure

```
hng_stage_0_backend_profile_endpoint/
├── 📝 README.MD
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 route.js
├── 📄 server.js
└── 📄 user.controller.js
```

---

## 🧪 Testing

* Use **Postman**, **curl**, or any browser to hit:

  ```
  http://localhost:5600/me
  ```
* Every request should return:

  * A **new timestamp**
  * A **new random cat fact**

---

## 🖥️ Deployment

You can host the API using any of the following (except Vercel & Render):

* **Railway**
* **Heroku**
* **AWS EC2 / Lightsail**
* **PXXL App**

---

## 👤 Author

**Muhammed Awwal Musa**
📧 Email: [talk2muhammedawwal@gmail.com](mailto:talk2muhammedawwal@gmail.com)
💻 Stack: Node.js / Express / PostgreSQL / Python


