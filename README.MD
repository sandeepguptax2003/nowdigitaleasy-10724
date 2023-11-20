## Usage

### Endpoints

The server exposes the following endpoints for managing user data:

1. **Add User - POST:**
   - Endpoint: `http://localhost:7000/users`
   - Method: POST
   - Body: JSON format containing user details

   Example body:
   ```json
   {
     "name": "Your Name",
     "role": "Any Role",
     "email": "Your Email Adress",
     "phoneNumber": "Your Phone Number"
   }

2. **Get all Users - GET:**
   - Endpoint: `http://localhost:7000/users`
   - Method: GET

3. **Get Single User by ID - GET:**
   - Endpoint: `http://localhost:7000/users/:id`
   - Method: GET
   - Replace `:id` with the ID of the user you want to retrieve.

4. **Delete Single User by ID - DELETE:**
   - Endpoint: `http://localhost:7000/users/:id`
   - Method: DELETE
   - Replace `:id` with the ID of the user you want to delete.

5. **Update User by ID - PUT:**
   - Endpoint: `http://localhost:7000/users/:id`
   - Method: PUT
   - Replace `:id` with the ID of the user you want to update.
   - Body: JSON format containing user details

   Example body:
   ```json
   {
     "name": "Your Updated Name",
     "role": "Updated Role",
     "email": "Updated Email Adress",
     "phoneNumber": "Updated Phone Number"
   }
  
