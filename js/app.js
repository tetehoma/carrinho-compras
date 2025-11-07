function adicionar() {
    let quant;
    let produt;
    let price;

    //produt.options[produt.selectedIndex].text (put the text into variable)
    //
    produt = document.getElementById('produto');
    let nameProdut = produt.options[produt.selectedIndex].text;
    alert(nameProdut);
}