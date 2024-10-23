document.addEventListener('DOMContentLoaded', () => {
    // Handle "Buy Now" buttons
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.getAttribute('data-product');
            alert(`Você clicou em comprar ${product}`);
        });
    });

    // Login Form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        alert(`Login realizado com sucesso!\nEmail: ${email}`);
        // Aqui você pode adicionar lógica para autenticação real
    });

    // Register Form
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        alert(`Cadastro realizado com sucesso!\nNome: ${name}\nEmail: ${email}`);
        // Aqui você pode adicionar lógica para registro real
    });
});
