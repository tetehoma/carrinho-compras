
    let totalGeral;
    limpar();

    function adicionar() {
    //take product name using split
    let product = document.getElementById('produto').value;
    let nameProduct = product.split('-')[0];
    //take value of product
    let unitValue = product.split('R$')[1];
    let quantity = document.getElementById('quantidade').value;
    let price = unitValue*quantity;

    if (quantity != 0) {
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${parseInt(quantity, 10)}x</span> ${nameProduct} <span class="texto-azul">R$${unitValue}</span>
        </section>`;
        
    } else {
        alert('Informe a quantidade do produto!');
        document.getElementById('quantidade').focus();
    }
    //calculate final price
    totalGeral = totalGeral + price;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = '0';
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    totalGeral = 0;
}