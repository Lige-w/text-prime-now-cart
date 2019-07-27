const appendOrderDetails = (detailsList) => {
    const itemNodes = document.querySelectorAll('div.cart-item-entity')
    for (node of itemNodes) {
        const orderItem = document.createElement('li')
        orderItem.style.margin = '5px 0'
        const item = node.querySelector('span.a-size-base-plus').innerText
        const qty = node.querySelector('span.a-button-text').innerText
        orderItem.innerText = `${qty} - ${item}`
        detailsList.appendChild(orderItem)
    }
}

const detailsModal = () => {

    const body = document.getElementById('desktop-cart')

    const modal = document.createElement('div')
    modal.id = 'order-list-modal'
    setModalStyles(modal)

    const detailsList = document.createElement('ul')
    detailsList.style.color = '#000000'
    appendOrderDetails(detailsList)
    modal.appendChild(detailsList)

    body.appendChild(modal)

    body.addEventListener('click', removeModal)
}

const setModalStyles = (modal) => {
    const modalStyles = {
        backgroundColor: '#FAFAFA',
        position: 'fixed',
        height: '80vh',
        width: '90vw',
        left: '5vw',
        top: '13vh',
        zIndex: '901',
        boxShadow: '0 0 10px',
        borderRadius: '2px',
        padding: '20px'
    }

    for (style in modalStyles) {
        modal.style[style] = modalStyles[style]
    }
}

const removeModal = () => {
    const body = document.getElementById('desktop-cart')
    const modal = document.getElementById('order-list-modal')
    modal.remove()
    body.removeEventListener('click', removeModal)
}

detailsModal()