# User Messages Board

A full-stack web application that allows users to create, view, edit, and delete messages on a community forum board. Built with React (TypeScript) frontend and Spring Boot backend.

> **Note**: Created for killing time only. This is a simple project for fun and learning purposes.

## 🚀 Features

- **Create Messages**: Add your name and message to the forum
- **View All Messages**: Browse all messages posted by users
- **Edit Messages**: Update existing messages
- **Delete Messages**: Remove messages from the board
- **Real-time Updates**: Changes are immediately reflected in the UI

## 🏗️ Architecture

This project follows a full-stack architecture:

- **Frontend**: React 19 with TypeScript, Vite build tool
- **Backend**: Spring Boot 4.0 with Java 25
- **Database**: H2 Database (file-based, stored in `data/localdb.mv.db`)
- **API Communication**: RESTful API with CORS enabled

## 📁 Project Structure

```
ReactSpringBoot/
├── backend/                 # Spring Boot application
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/example/ReactSpringBoot/
│   │       │       ├── controller/    # REST API endpoints
│   │       │       ├── model/         # User entity
│   │       │       └── repository/    # JPA repository
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml             # Maven dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── UserForm.tsx
│   │   │   ├── UserList.tsx
│   │   │   └── EditUserModal.tsx
│   │   └── App.tsx
│   └── package.json
└── data/                   # H2 database files
    └── localdb.mv.db
```

## 🛠️ Technologies Used

### Backend
- **Spring Boot 4.0**: Java framework (created with Spring Initializr)
- **Spring Data JPA**: Database persistence
- **H2 Database**: In-memory/file-based database
- **Lombok**: Reduces boilerplate code
- **Maven**: Dependency management

### Frontend
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Axios**: HTTP client for API calls

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Java 25** (or compatible version)
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Maven** (or use the included Maven wrapper)

## 🚀 Getting Started

### Backend Setup

> **Note**: The backend project was initially created using [Spring Initializr](https://start.spring.io/).

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Run the Spring Boot application:
   ```bash
   # Using Maven wrapper (Windows)
   ./mvnw.cmd spring-boot:run
   
   # Or using Maven wrapper (Linux/Mac)
   ./mvnw spring-boot:run
   
   # Or if Maven is installed globally
   mvn spring-boot:run
   ```

3. The backend server will start on `http://localhost:8080`

4. (Optional) Access H2 Console at `http://localhost:8080/h2-console` for database management
   - JDBC URL: `jdbc:h2:file:./data/localdb`
   - Username: `sa`
   - Password: (leave empty)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be available at `http://localhost:5173` (or the port shown in terminal)

## 📡 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users/messages |
| GET | `/api/users/{id}` | Get a specific user by ID |
| POST | `/api/users` | Create a new user/message |
| PUT | `/api/users/{id}` | Update an existing user/message |
| DELETE | `/api/users/{id}` | Delete a user/message |

### Request/Response Format

**Create/Update User:**
```json
{
  "name": "John Doe",
  "message": "Hello, world!"
}
```

**User Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "message": "Hello, world!"
}
```

## 🗄️ Database

The application uses H2 Database with the following schema:

**Users Table:**
- `id` (Long, Primary Key, Auto-generated)
- `name` (String)
- `message` (String)

The database file is stored at `data/localdb.mv.db` and persists between application restarts.

## 🎨 Frontend Components

- **App.tsx**: Main application component that manages state and coordinates child components
- **UserForm.tsx**: Form component for creating new messages
- **UserList.tsx**: Component that displays all messages with edit/delete functionality
- **EditUserModal.tsx**: Modal component for editing existing messages

## 🔧 Configuration

### Backend Configuration (`backend/src/main/resources/application.properties`)

- Server port: `8080`
- Database: H2 file-based database
- JPA: Auto-update schema on startup
- CORS: Enabled for all origins (`*`)

### Frontend Configuration

- API Base URL: `http://localhost:8080/api/users`
- Development server: Vite (typically runs on port 5173)

## 📝 Development

### Building for Production

**Backend:**
```bash
cd backend
./mvnw.cmd clean package
```

**Frontend:**
```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`

## 🐛 Troubleshooting

- **Backend won't start**: Ensure Java 25 is installed and port 8080 is not in use
- **Frontend can't connect to backend**: Verify the backend is running on port 8080
- **Database issues**: Delete `data/localdb.mv.db` to reset the database (all data will be lost)

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Created as a full-stack development project demonstrating React + Spring Boot integration. Made for killing time only.

