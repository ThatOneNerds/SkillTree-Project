// What the fuck is data 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// I'm not really comfortable with javascript functions, I need to practice more
openModalButtons.forEach(button =>  {
    button.addEventListener('click', () => {
        // Loops through all modal targets and puts them into a camel case dataset
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button =>  {
    button.addEventListener('click', () => {
        // looks for the button with the closet parent to the modal class
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    // makes the madal and overlay active which allows you to see the modal
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}