function adicionar() {
    let quant;
    let product;
    let price;

    //produt.options[produt.selectedIndex].text (put the text into variable)
    //produt.options[produt.selectedIndex].text (put the value into variable)
    let option = document.getElementById('produto');
    let nameProduct = option.options[option.selectedIndex].text;
    let indexName = nameProduct.indexOf('-');
    product = nameProduct.trim().substring('', indexName);
   

    //take value of product
    let indexValue = nameProduct.indexOf('R$');
    price = nameProduct.trim().substring(indexValue);

    if (indexName !== -1) {

        alert(price);
    }

    //valueAsNumber put the value the input type number in the variable let.
    quant = document.getElementById('quantidade');
    const quantProduct = quant.valueAsNumber;
    
}