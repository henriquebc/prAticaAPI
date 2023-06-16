console.log('item b')
  const data = {
    email: 'henrique_bc@outlook.com',
    first_name: 'Henrique',
    last_name: 'Rocha',
  };
  
  fetch('https://reqres.in/api/users', {
    method: 'POST',
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
  