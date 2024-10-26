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
let cart = [];

function addToCart(id, name, price) {
  // Verifica se o produto já está no carrinho
  const existingProduct = cart.find(item => item.id === id);
  
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';  // Limpa a lista atual

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);

    total += item.price * item.quantity;
  });

  document.getElementById('totalAmount').textContent = total.toFixed(2);
}

function checkout() {
  alert('Compra finalizada com sucesso!');
  cart = [];
  updateCartDisplay();
}
