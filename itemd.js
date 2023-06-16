const userId = 6;

fetch(`https://reqres.in/api/users/${userId}`, {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('usuário foi de F');
    } else {
      console.error('deu pau:', response.status);
    }
  })
  .catch(error => {
    console.error('Erro errado:', error);
  });
