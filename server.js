const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, this is your web application.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// async function updateEmployeeRole(firstName, lastName, newRole) {
//     try {
      
//       const query = "UPDATE employees SET role_id = (SELECT id FROM roles WHERE title = ?) WHERE first_name = ? AND last_name = ?";
//       const [result] = await dbConnection.promise().query(query, [firstName, lastName, newRole]);
      
//       if (result.affectedRows > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (err) {
//       console.error("Error updating employee role:", err);
//       return false;
//     }
//   }
  
//   module.exports = { updateEmployeeRole };