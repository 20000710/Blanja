let phoneInput = document.getElementById('phone')
let storeNameInput = document.getElementById('store_name')
let buttonCustomer = document.getElementById('customer')
let buttonSeller = document.getElementById('seller')

buttonCustomer.onclick = () => { 
    phoneInput.style.display = 'none'
    storeNameInput.style.display = 'none'

    buttonCustomer.style.border = '1px solid #DB3022'
    buttonCustomer.style.background = '#DB3022'
    buttonCustomer.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.05)'
    buttonCustomer.style.color = '#fff'

    buttonSeller.style.color = '#9B9B9B'
    buttonSeller.style.background = '#fff'
    buttonSeller.style.border = '0.5px solid #9B9B9B'
    buttonSeller.style.filter = 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05))'
}

buttonSeller.onclick = () => {
    phoneInput.style.display = 'block'
    storeNameInput.style.display = 'block'
    
    buttonSeller.style.border = '1px solid #DB3022'
    buttonSeller.style.background = '#DB3022'
    buttonSeller.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.05)'
    buttonSeller.style.color = '#fff'

    buttonCustomer.style.color = '#9B9B9B'
    buttonCustomer.style.background = '#fff'
    buttonCustomer.style.border = '0.5px solid #9B9B9B'
    buttonCustomer.style.filter = 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05))'
}

