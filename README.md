# CUN Backend

This project implements a RESTful API for an evaluation management system. It provides endpoints to manage courses, lessons, and questions, as well as evaluate user answers.

## 🛠️ Built with

- NestJS
- TypeScript
- PrismaORM
- PostgreSQL
- Swagger for documentation
- Docker
- Jest

## ✅ Prerequisites

Before getting started, make sure you have the following installed:

- ✅ [*Git*](https://git-scm.com/)
- ✅ [*Docker* y Docker Compose](https://www.docker.com/get-started) installed and running

## 📥 Get the project

Clone the repository:

```bash
#Clone the repository:
git clone https://github.com/jeisonrojasm/backend-cun.git
cd backend-cun
```

## 🚀 Run

### 1. **`.env` file required**

Normally, the `.env` file **should not be included** in a public repository, as it may contain sensitive configuration values.
However, for demonstration and evaluation purposes —and because this is not a production project— the `.env` file is included in the repository so anyone can run the project without additional setup.

You will find the `.env` file already placed in the root of the project.

### 2. Set up the development environment with Docker

Since this application is fully containerized with Docker, there’s no need to install Node.js or any dependencies manually on your machine. You just need to run the following command from the project root to build the image and start the backend container:

```bash
docker-compose up --build
```

This command will perform the following actions:

- It will build the Docker image defined in the `Dockerfile`, using `node:20-alpine` as the base.
- It will automatically install all the dependencies declared in the `package.json`.
- It will mount the source code from your machine inside the container, allowing you to see changes in real time.

Once the process is complete, the backend will be available at:

```arduino
http://localhost:3000
```

### 3. Connect to pgadmin

The PostgreSQL database and the pgAdmin management tool are also containerized, so there’s no need to install them locally.

To access pgAdmin and view the database:

1. Open your browser and visit the following URL:

   ```bash
   http://localhost:8080
   ```

2. Log in using the credentials defined in your `.env` file:

   ```bash
   PGADMIN_DEFAULT_EMAIL
   PGADMIN_DEFAULT_PASSWORD
   ```

3. Once inside the pgAdmin dashboard:
   - Right-click on the **Servers** section (left sidebar).
   - Select **Register** > **Server**.

4. In the configuration form:

   🧾 **General tab**
   - **Name**: Enter a descriptive name, for example: `Evaluaciones CUN DB`.

   🔌 **Connection tab**
   - **Host name/address**: Defined in the `POSTGRES_DB_HOST` variable in the `.env` file
   - **Port**: Defined in the `POSTGRES_DB_PORT` variable in the `.env` file
   - **Username**: Defined in the `POSTGRES_USER` variable in the `.env` file
   - **Password**: Defined in the `POSTGRES_PASSWORD` variable in the `.env` file
   - Optional: Check the *Save password* box so you don’t have to enter it each time.
  
5. Click **Save** to save the configuration and connect.

   Once the connection is created, you will be able to browse the databases, view tables, run queries, and manage the data from the pgAdmin interface.

### 4. Automatic database migrations

This project uses a **.sh** script as a tool to manage the initial migration and run the seed to populate the database.

## ✅ Application ready to use

Once the previous steps are completed:

- The backend server will be running at `http://localhost:3000`.
- The PostgreSQL database will be ready and migrated.
- You will be able to consume the defined REST endpoints.
- You will have access to pgAdmin to manage your data graphically.

> 🧪 You can now test the endpoints using **Postman** or any HTTP client like **Insomnia**.

## 🧪 Automated tests

This project includes a set of unit tests written with [Jest](https://jestjs.io/) to ensure the correct functioning of the main services and controllers.

### Test structure

The tests are organized following the same structure as the business modules:

```bash
src/
├── modules/
│   ├── cursos/
│   │   ├── cursos.service.ts
│   │   ├── cursos.service.spec.ts   👈 Courses module tests
```

Each `*.spec.ts` file contains tests for the corresponding service, mocking dependencies with `jest.mock()` and `jest.spyOn()`.

### Run the tests

You can run all the tests with:

```bash
npm run test
```

## 👨‍💻 Author

Developed by **Jeison Rojas Mora** - *Fullstack Developer*

- [https://github.com/jeisonrojasm](https://github.com/jeisonrojasm)
- [https://www.linkedin.com/in/jeison-rojas-mora/](https://www.linkedin.com/in/jeison-rojas-mora/)
