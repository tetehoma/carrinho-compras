function adicionar() {
    let quant;
    let product;
    let price;

    //produt.options[produt.selectedIndex].text (put the text into variable)
    //produt.options[produt.selectedIndex].text (put the value into variable)
    product = document.getElementById('produto');
    let nameProduct = product.options[product.selectedIndex].text;

    //valueAsNumber put the value the type number in the variable let.
    quant = document.getElementById('quantidade');
    const quantProdut = quant.valueAsNumber;
    
}