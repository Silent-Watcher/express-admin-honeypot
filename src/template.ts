export const DEFAULT_FAKE_ADMIN_HTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Admin Login</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f7f7f7; }
    .login-container { width: 300px; margin: 100px auto; padding: 20px; background: #fff; border: 1px solid #ccc; }
    h2 { text-align: center; }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>Admin Login</h2>
    <form method="POST" action="/admin">
      <label>Username:</label><br>
      <input type="text" name="username" /><br>
      <label>Password:</label><br>
      <input type="password" name="password" /><br><br>
      <button type="submit">Log in</button>
    </form>
  </div>
</body>
</html>
`;
