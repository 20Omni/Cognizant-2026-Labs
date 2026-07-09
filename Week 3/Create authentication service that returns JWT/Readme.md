# Create Authentication Service that Returns JWT

## Objective

Create an authentication service that generates and returns a JWT (JSON Web Token) after validating user credentials.

## Sample Request

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

## Sample Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNTcwMzc5NDc0LCJleHAiOjE1NzAzODA2NzR9.t3LRvlCV-hwKfoqZYlaVQqEUiBloWcWn0ft3tgv0dL0"
}
```

## Steps Involved

1. Create Authentication Controller.
2. Configure SecurityConfig.
3. Read and decode the Authorization header.
4. Generate and return a JWT token.
