# CRUD-API
### This is a REST API with basic CRUD ( Create, Read, Update, Delete ) functionalities.
### I have used NodeJs with Express and MongoDB as database.

### Data Model ( JSON) 
<code>{
  "subjects" : [ String, String],
  "date: : Date(),
  "_id" : ObjectID(),
  "name" : String,
  "role" : String,
  "age" : Number,
  "city" : String,
 }</code><br>

#### 1. GET => 'http://localhost:3000/user'
This lists all the documents present inf the database.
#### 2. POST => http://localhost:3000/user'
To add a new docuument.
#### 3. PATCH => 'http://localhost:3000/user/:id'
To update an existing document.
#### 4. DELETE => 'http://localhost:3000/user/:id'
To delete a specefic document.

