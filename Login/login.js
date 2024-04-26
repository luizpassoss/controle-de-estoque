// Lógica para lidar com o clique no link "Forgot your password?"
document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link (navegar para outra página)
    const users = [
      { username: 'usuario1', email: 'usuario1@example.com', password: 'senha123' },
      { username: 'usuario2', email: 'usuario2@example.com', password: 'abc123' }
  ];
  
  // Função para verificar se o e-mail fornecido existe na lista de usuários
  function isEmailExists(email) {
      return users.some(user => user.email === email);
  }
  
  // Função para recuperar a senha com base no e-mail
  function recoverPassword(email) {
      const user = users.find(user => user.email === email);
      if (user) {
          // Aqui você pode implementar a lógica para enviar a senha por e-mail, por exemplo:
          console.log(`A senha para ${user.username} é: ${user.password}`);
      } else {
          console.log('E-mail não encontrado na base de dados.');
      }
  }
  
  // Exemplo de uso
  const emailToRecover = 'usuario1@example.com';
  if (isEmailExists(emailToRecover)) {
      recoverPassword(emailToRecover);
  } else {
      console.log('E-mail não encontrado na base de dados.');
  }
    // Implemente a lógica de recuperação de senha aqui
    // Por exemplo, exibir um formulário de recuperação de senha modal ou redirecionar para uma página de recuperação de senha
    alert("Implemente a lógica de recuperação de senha aqui.");
  });
