# Shopping List Web Application  
**By Inbal Greenfeld**

## Overview
This project is a full-stack web application for managing a shopping list and placing orders.  
Users can browse products by category, add items to a cart, and submit an order with customer details.

The system was developed as part of a technical assignment and includes both application development and cloud architecture planning.

---

## Technologies Used

### Frontend
- React
- Redux Toolkit
- TypeScript
- HTML / CSS

### Backend
- .NET Web API
- Entity Framework Core
- MongoDB (for orders)
- RESTful API design

### Database
- SQL Server – products & categories
- MongoDB Atlas – orders & customers

---

## Application Flow
1. User selects a category
2. Products are loaded dynamically
3. Products can be added to the cart
4. User proceeds to order summary
5. Customer details are filled in
6. Order is submitted and stored on the server

---

## Cloud Architecture (Design Only)
The system is designed to run in a cloud environment (AWS):

- Static frontend hosted on Amazon S3
- CloudFront CDN for fast global access
- Application Load Balancer
- .NET Web API running on EC2 (Docker-ready)
- MongoDB Atlas for NoSQL data storage
- HTTPS, security groups, and basic monitoring

 *An architecture diagram is included as part of the submission.*

---

## Project Structure

