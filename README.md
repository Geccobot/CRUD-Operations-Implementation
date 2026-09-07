# CRUD Operations API

A full-stack CRUD API built with **Next.js, TypeScript, Prisma, and PostgreSQL**. The application provides REST API endpoints for creating, reading, updating, and deleting items.

The project was developed as part of my Full Stack Development coursework and demonstrates database integration, API development, testing, and cloud deployment using AWS.

## Technologies Used

- Next.js
- TypeScript
- Node.js
- Prisma ORM
- PostgreSQL
- Postman
- AWS RDS
- AWS Elastic Beanstalk

## Features

The API supports full CRUD functionality:

- **GET** - Retrieve all items
- **POST** - Create a new item
- **PUT** - Update an existing item
- **DELETE** - Delete an existing item

The API also includes basic validation and error handling for invalid requests.

## Project Structure

crud-api/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
├── src/
│   └── app/
│       ├── api/
│       │   └── items/
│       │       └── route.ts
│       ├── layout.tsx
│       └── page.tsx
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

## Database Model

The application uses the following Prisma model:

model Item {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}


## API Endpoints

All CRUD operations are available through:

/api/items


### GET

Retrieves all items.

GET /api/items


### POST

Creates a new item.

POST /api/items


Example request body:

```json
{
  "name": "Laptop",
  "description": "Development laptop"
}
```

### PUT

Updates an existing item.

PUT /api/items


Example request body:

```json
{
  "id": 1,
  "name": "Gaming Laptop",
  "description": "Updated development laptop"
}
```

### DELETE

Deletes an existing item.

DELETE /api/items

Example request body:

```json
{
  "id": 1
}
```

## Local Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd crud-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:5432/DATABASE_NAME?schema=public"

The `.env` file is excluded from version control to prevent database credentials from being committed to the repository.

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Start the Development Server

```bash
npm run dev
```

The application will be available at:

http://localhost:3000

The API can be accessed at:

http://localhost:3000/api/items


## Testing

The API was tested using **Postman**.

Testing included:

- Creating valid items
- Retrieving items
- Updating existing items
- Deleting items
- Testing invalid requests
- Verifying HTTP status codes
- Confirming database changes

Example validation behavior:

A POST request without a required `name` returns:

```json
{
  "error": "Name is required"
}
```

with HTTP status:

400 Bad Request


## Production Build

The application can be compiled for production using:

```bash
npm run build
```

The production server can then be started with:

```bash
npm start
```

## AWS Deployment

The application is deployed using **AWS Elastic Beanstalk**.

The production architecture consists of:


Client / Postman
       |
       v
AWS Elastic Beanstalk
       |
       v
Next.js API
       |
       v
Prisma ORM
       |
       v
Amazon RDS PostgreSQL


Amazon RDS hosts the PostgreSQL database, while Elastic Beanstalk hosts the Next.js application.

The production `DATABASE_URL` is configured using Elastic Beanstalk environment properties rather than storing credentials in the source code.

Database access is controlled using AWS security groups.
