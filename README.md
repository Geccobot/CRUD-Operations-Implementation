# Assignment: CRUD Operations Implementation 

## Introduction  
In this exercise, we will create a **CRUD (Create, Read, Update, Delete)** API using **Next.js**, **TypeScript**, **Prisma**, and **PostgreSQL**. This application demonstrates how to interact with a database using an ORM (Object-Relational Mapping) tool like Prisma while leveraging the power of Next.js for backend API development. By the end of this exercise, you’ll have a fully functional API that supports CRUD operations, connects to a PostgreSQL database, and is deployable on AWS Elastic Beanstalk. You'll also learn how to test your API using Postman and configure environment variables for deployment.

## Starter Files  
The initial code is available inside the `start` folder under the `code` folder associated with this exercise.

---

## Requirements  

We'll be working with Next.js, TypeScript, Prisma, and PostgreSQL to develop our CRUD API. Here's what we need to accomplish:

### Set Up the Development Environment  
We need to:
- Install **Node.js** (v18 or later) and **npm** (v9 or later) or **yarn**.  
- Install **PostgreSQL** locally or use a cloud-hosted instance (e.g., AWS RDS).  
- Set up the **AWS CLI** and ensure it’s configured with your AWS credentials (for deployment).  
- Install **Postman** for testing API endpoints.  

### Build the Core Features  
We need to implement the following functionalities:

1. **Project Initialization:**  
   - Scaffold a new Next.js project with TypeScript support.  
   - Ensure all necessary dependencies are installed, including TypeScript type definitions.  

2. **Database Integration with Prisma:**  
   - Install and configure Prisma as the ORM layer.  
   - Define a data model in the `schema.prisma` file.  
   - Migrate the schema to the PostgreSQL database.  

3. **CRUD Operations Implementation:**  
   - Create API routes (`GET`, `POST`, `PUT`, `DELETE`) in the `app/api/items/route.ts` file.  
   - Use Prisma Client to interact with the database for each operation.  

4. **API Testing:**  
   - Test the API endpoints using Postman.  
   - Verify that the API handles valid and invalid inputs correctly.  

5. **Deployment Preparation:**  
   - Build the application using `npm run build`.  
   - Deploy the application to AWS Elastic Beanstalk.  
   - Configure environment variables (e.g., `DATABASE_URL`) in the AWS environment.  

---

## Deliverables  

The deliverable of this exercise is a working CRUD API that meets all the requirements above. We need to submit:
- The public GitHub repository containing the source code.  
- Screenshots showing:  
  - The API responses for each CRUD operation tested in Postman.  
  - The deployed application running on AWS Elastic Beanstalk.  
- A brief README file explaining how to set up and run the app locally and how to deploy it to AWS.

---

## Conclusion  

this exercise provides a hands-on opportunity to build a fully functional CRUD API using modern technologies like Next.js, TypeScript, Prisma, and PostgreSQL. By following the steps outlined, you will gain practical experience in setting up a development environment, implementing database-driven API endpoints, testing your application, and deploying it to AWS Elastic Beanstalk. This project not only reinforces your understanding of backend development but also equips you with essential skills for building scalable, real-world applications