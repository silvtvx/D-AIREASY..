// Variáveis para o carrinho e total
let cart = [];
let total = 0;

// Função para adicionar produto ao carrinho
function addToCart(productName, productPrice) {
    // Adiciona o produto ao carrinho
    cart.push({ name: productName, price: productPrice });
    total += productPrice;  // Atualiza o total

    // Atualiza a visualização do carrinho
    updateCart();
}

// Função para atualizar a visualização do carrinho
function updateCart() {
    // Atualiza a lista de itens no carrinho
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // Limpa a lista de itens

    // Exibe os itens no carrinho
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Exibe o total atualizado
    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function checkout() {
    // Verifica se o carrinho está vazio
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! Adicione produtos antes de finalizar a compra.');
    } else {
        // Exibe a mensagem de confirmação
        alert(`Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}`);
        
        // Limpa o carrinho e reseta o total
        cart = [];
        total = 0;

        // Atualiza a visualização do carrinho
        updateCart();
    }
}