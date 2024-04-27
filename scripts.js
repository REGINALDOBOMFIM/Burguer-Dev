const list = document.querySelector('ul')
const buttonBurguer = document.querySelector('.burguer')
const buttonVegan = document.querySelector('.vegan')
const buttonBatatas = document.querySelector('.bat')
const buttonBebida = document.querySelector('.beb')
const buttonCarne = document.querySelector('.carne')
const buttonCombo = document.querySelector('.combo')
const buttonHappy = document.querySelector('.happy')
const carrinho = document.querySelector('.car')

let myLiBurguer = ''
let myLiVegan = ''
let myLiBatatas = ''
let myLiBebida = ''
let myLiCarne = ''
let myLiCombo = ''

function formatValue (value){
const newValue = value.toLocaleString('pt-br',
{style: 'currency', currency: 'BRL'});

return newValue
}

function burguer() {
    let myLiBurguer = ''

    menuOptionsBurgue.forEach((product) => {

        myLiBurguer += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="price">R$ ${formatValue(product.price)}</p>
    
                </li>
                `
    })
    list.innerHTML = myLiBurguer
}

buttonBurguer.addEventListener('click', burguer)


function vegan() {
    let myLiVegan = ''

    menuOptionsVegan.forEach((product) => {

        myLiVegan += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="price">R$ ${formatValue(product.price)}</p>
    
                </li>
                `
    })
    list.innerHTML = myLiVegan
}

buttonVegan.addEventListener('click', vegan)

function batata() {
    let myLiBatatas = ''

    menuOptionsBatatas.forEach((product) => {

        myLiBatatas += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="price">R$ ${formatValue(product.price)}</p>
    
                </li>
                `
    })
    list.innerHTML = myLiBatatas
}

buttonBatatas.addEventListener('click', batata)

function bebida() {
    let myLiBebida = ''

    menuOptionsBebida.forEach((product) => {

        myLiBebida += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="price">R$ ${formatValue(product.price)}</p>
    
                </li>
                `
    })
    list.innerHTML = myLiBebida
}

buttonBebida.addEventListener('click', bebida)

function carne(productArray) {
    let myLiCarne = ''

    productArray.forEach((product) => {

        myLiCarne += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="price">R$ ${formatValue(product.price)}</p>
    
                </li>
                `
    })
    list.innerHTML = myLiCarne
}

buttonCarne.addEventListener('click', () => carne(menuOptionsCarne))

function combo() {
    let myLiCombo = ''

    menuOptionsCombos.forEach((product) => {

        myLiCombo += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="price">R$ ${formatValue(product.price)}</p>
    
                </li>
                `
    })
    list.innerHTML = myLiCombo

}

buttonCombo.addEventListener('click', combo)

function DayHappy() {
    const newPrice =
        menuOptionsCarne.map((product) => ({
            ...product,
            price: product.price * 0.9

        }))

    carne(newPrice)
}

buttonHappy.addEventListener('click', DayHappy)

function somaCarrinho() {
    const somaTotal = menuOptionsCarne.reduce((acc, curr) => acc + curr.price, 0)
    
    list.innerHTML =
    `
    <li>
        <p>O valor total dos lanches é R$ ${somaTotal.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
    </li>
    `
    
}


carrinho.addEventListener('click', somaCarrinho)