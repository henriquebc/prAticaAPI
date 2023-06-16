const userId = 7;
const data = {
    email: 'henriquers_bc@hotmail.com',
    first_name: 'Henrique',
    last_name: 'Rocha',
};  

fetch(`https://reqres.in/api/users/${userId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
