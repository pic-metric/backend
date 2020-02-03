# backend

## API Documentation

### Users

*GET* - /api/users 

*Retrieve all users in the system*

*PUT* - /api/users/:user_id

*Update a user's infromation*

	exampleRequestBody {
		email: String
		password: String
		first_name: String (nullable)
		last_name: String (nullable)
	}

*DELETE* - /api/users/:user_id

*Delete a user from the system*
<hr>

### Auth 

*POST* - /api/auth/register

*Register a user. Generates a token.*

	exampleRequestBody: {
		email: String
		password: String
		first_name: String (nullable)
		last_name: String (nullable)
	}

	exampleResponseBody: {
		user_id: 2
		token: "fadsljfsdsd.sfajsd.fdsal"
	}

*POST* - /api/auth/login

*Log a user into the system. Generates a token.*

	exampleRequestBody: {
		email: String
		password: String
	}

	exampleResponseBody: {
		user_id: 2
		token: "fadsljfsdsd.sfajsd.fdsal"
	}

### Pics

*GET* - /api/pics

*Retrieve all pictures in the system*

*GET* - /api/pics/:user_id

*Retrieve all pictures stored by a particular user*

*POST* - /api/pics

*Upload a picture*

	exampleRequestBody: {
		user_id: Number
		url: String
	}

*DELETE* - /api/pics/:pic_id

*Delete a picture*
<hr>


### Attributes

*GET* - /api/attributes/:pic_id

*Get attributes for a particular picture*

	exampleResponseBody: {
		attributes: ['dog', 'tree', 'pee']
	}

*POST* - /api/attributes/:pic_id

*Store an attribute for a particular picture*

	exampleRequestBody: {
		attributes: Array String	
	}

*DELETE* - /api/attributes/:pic_id/:attribute_name

*Delete an attribute for a particular picture*

<hr>

### Priority endpoints

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
