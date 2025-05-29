# MongoDB plp_bookstore Database

## 📌 Introduction
This repository contains MongoDB scripts for managing a book collection database. These scripts allow querying, updating, deleting, indexing, and aggregating data efficiently.

## ⚙️ Prerequisites
- **MongoDB Installed**: [Download MongoDB](https://www.mongodb.com/try/download/community).
- **MongoDB Server Running**: Start the server using:  
    ```bash
    mongod --dbpath /path/to/your/data
    ```
- **MongoDB Shell**: Use `mongosh` or the legacy `mongo` shell.
- **Database Setup**: Ensure a `books` collection with fields like `title`, `author`, `genre`, `published_year`, `price`, and `in_stock`.

## 🛠️ Setup Instructions
1. **Start MongoDB Server**: Run on `localhost:27017` or specify a custom port.
2. **Connect to MongoDB**:
     ```bash
     mongosh
     ```
     ```bash
     use myDatabase
     ```
     ```bash
     mongosh "mongodb://localhost:27017/myDatabase" scripts.js
     ```