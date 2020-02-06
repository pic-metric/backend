# backend

## API Documentation

**Base url: https://bw-pic-metric.herokuapp.com/api**

All endpoints except for auth endpoints require a valid token. Tokens are 
genereated after you register or login a user.  You must include the token 
in the header of each request under the "Authorization" key.

### Users

*GET* - /users 

*Retrieve all users in the system*

*GET* - /users/:user_id

*Retrieve a single user from the system.*

*PUT* - /users/:user_id*

*Update a user's infromation*

	exampleRequestBody {
		email: String
		password: String
		full_name: String
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

*GET* - /pics/processed/:pic_id

*Retrieve a particular unprocessed picture by its id.

*GET* - /pics/unprocessed/:pic_id

*Retrieve a particular processed picture by its id.

*GET* - /pics/for/:user_id

*Retrieve all pictures stored by a particular user. Returns the id of the picture and whether it's processed.*

*POST* - /pics/:user_id

*Upload a picture via file upload (multipart/form-data). This endpoint should be used by the frontend.*

*DELETE* - /pics/:pic_id

*Delete a picture*
<hr>


### Attributes

*GET* - /attributes/:pic_id

*Get attributes for a particular picture*

*DELETE* - /attributes/:pic_id/:attribute_name

*Delete an attribute for a particular picture*

<hr>

### Priority endpoints

*POST* - /pics/:user_id

<hr>

### Available Endpoints

Everything

<hr>

### Bugs

Split the GET pics endpoint into two separate endpoints: one for unprocessed pics and the other for processed pics.

 
