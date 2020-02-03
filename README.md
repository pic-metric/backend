# backend

## API Documentation

**Base url: https://bw-pic-metric.herokuapp.com/api**

### Users

*GET* - /users 

*Retrieve all users in the system*

*PUT* - /users/:user_id

*Update a user's infromation*

	exampleRequestBody {
		email: String
		password: String
		full_name: String (nullable)
	}

*DELETE* - /users/:user_id

*Delete a user from the system*
<hr>

### Auth 

*POST* - /auth/register

*Register a user. Generates a token.*

	exampleRequestBody: {
		email: String
		password: String
		full_name: String (nullable)
	}

	exampleResponseBody: {
    		"id": 1,
    		"created_at": "2020-02-03T22:55:23.551Z",
    		"updated_at": "2020-02-03T22:55:23.551Z",
    		"email": "johnnytest@example.com",
    		"full_name": "johnny test",
    		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueXRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1ODA3NzA1MjMsImV4cCI6MTU4MDg1NjkyM30.HHEbc84omFrx5mc_66dYeJL7RAEwgMc10cp-DC6WMGU"

	}

*POST* - /auth/login

*Log a user into the system. Generates a token.*

	exampleRequestBody: {
		email: String
		password: String
	}

	exampleResponseBody: {
		"id": 1,
		"created_at": "2020-02-03T22:55:23.551Z",
		"updated_at": "2020-02-03T22:55:23.551Z",
		"email": "johnnytest@example.com",
		"full_name": "johnny test",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueXRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1ODA3NzA1MjMsImV4cCI6MTU4MDg1NjkyM30.HHEbc84omFrx5mc_66dYeJL7RAEwgMc10cp-DC6WMGU"
	}

### Pics

*GET* - /pics

*Retrieve all pictures in the system*

*GET* - /pics/:user_id

*Retrieve all pictures stored by a particular user*

*POST* - /pics

*Upload a picture*

	exampleRequestBody: {
		user_id: Number
		url: String
	}

*DELETE* - /pics/:pic_id

*Delete a picture*
<hr>


### Attributes

*GET* - /attributes/:pic_id

*Get attributes for a particular picture*

	exampleResponseBody: {
		attributes: ['dog', 'tree', 'pee']
	}

*POST* - /attributes/:pic_id

*Store an attribute for a particular picture*

	exampleRequestBody: {
		attributes: Array String	
	}

*DELETE* - /attributes/:pic_id/:attribute_name

*Delete an attribute for a particular picture*

<hr>

### Priority endpoints

Auth endpoints

<hr>

### Available Endpoints

NONE

<hr>

## Note to self
**environment variables to set in production:**
- DATABASE_URL (knexfile.js)
- JWT_SECRET (config/secrets.js)
- PORT (index.js)
- NODE_ENV (database/dbClient.js)
