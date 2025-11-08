function adicionar() {

    let nameProduct = document.getElementById('produto').value;
    let indexName = nameProduct.indexOf('-');
    let nameProductClean = nameProduct.trim().substring('', indexName);

    //take value of product
    let indexValue = nameProduct.indexOf('R$');
    //select the part of string and cut the specific value text by index.
    price = nameProduct.trim().substring(indexValue + 2);
  
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade != 0) {
        let lista = document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto');
        let newProduct = ` <section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nameProductClean} <span class="texto-azul">R$${price}</span></section>`;
        lista.insertAdjacentHTML('beforebegin', newProduct);
    } else {
        alert('Informe a quantidade do produto!');
       document.getElementById('quantidade').focus();
    }

    let subTotal = price*quantidade;
    alert(subTotal);

    
    
}