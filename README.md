# 🎓 ChanduInstitutes – Full Stack Web Application

ChanduInstitutes is a full-stack web application for managing educational institution operations. It provides a ReactJS-based frontend, a Spring Boot backend, and MySQL database integration for storing institutional data such as courses, students, faculty, and departments.

---

## 🧩 Tech Stack

- **Frontend**: ReactJS, HTML, CSS, Bootstrap
- **Backend**: Spring Boot, Spring MVC, Spring Data JPA
- **Database**: MySQL
- **Build Tools**:
  - Frontend: NPM / Yarn
  - Backend: Maven

---

## 📁 Project Structure

```
ChanduInstitutes/
├── backend/                  # Spring Boot backend (Java)
│   ├── src/
│   ├── pom.xml
│   └── application.properties
├── frontend/                 # ReactJS frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

---

## ⚙️ Prerequisites

- **Node.js & npm**
- **Java JDK 8 or above**
- **MySQL Server**
- **Maven**

---

## 🚀 Getting Started

### 1. 📦 Backend Setup (Spring Boot)

#### a. Import into IDE (Eclipse/IntelliJ)
- Open the `backend/` directory as a Maven project

#### b. Configure MySQL

1. Create a database:
   ```sql
   CREATE DATABASE chandu_institutes;
   ```

2. Update `application.properties` in `src/main/resources/`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/chandu_institutes
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

#### c. Run the Spring Boot App

```bash
mvn spring-boot:run
```

API should be running at: [http://localhost:8080](http://localhost:8080)

---

### 2. 🎨 Frontend Setup (ReactJS)

```bash
cd frontend/
npm install
npm start
```

Frontend will be running at: [http://localhost:3000](http://localhost:3000)

Ensure the frontend makes API calls to `http://localhost:8080` or configure a proxy in `package.json`.

---

## ✅ Features

- Responsive UI with ReactJS
- RESTful API with Spring Boot
- Persistent data storage using MySQL
- Full CRUD operations for managing students/institutes

---

## 🧪 Testing

- Unit tests can be added under `src/test/java/` for backend.
- Frontend components can be tested using tools like Jest and React Testing Library.

---

## 📄 License

This project is for educational purposes only and not intended for commercial use.

---

## 🙋‍♂️ Author

- **Uttam Kumar Narra**  
  [GitHub](https://github.com/UttamkumarNarra) | [LinkedIn](https://www.linkedin.com/in/uttam-kumar-narra-54145024b/)
