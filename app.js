// Data creates an array than can be used to store data
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const newModalButtons = document.querySelectorAll('[data-create-modal]')
const overlay = document.getElementById('overlay');
const body = document.querySelector('body')


openModalButtons.forEach(button =>  {
    document.addEventListener("click", e => {
        if (e.target.matches("[data-modal-target]")) {
            // Loops through all modal targets and puts them into a camel case dataset
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        }
    
        if (e.target.matches("[data-create-modal]")) {
            modalTemplate()
        }
        
    })
})

/*
newModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modalTemplate()
    })
})

openModalButtons.forEach(button =>  {
    button.addEventListener('click', () => {
        // Loops through all modal targets and puts them into a camel case dataset
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
*/

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button =>  {
    button.addEventListener('click', () => {
        // looks for the button with the closet parent to the modal class
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    // makes the madal and overlay active which allows you to see the modal
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function modalTemplate() {
    // Create a new div
    const newDiv = document.createElement("div");

    // Appends the document
    document.body.appendChild(newDiv);

    newDiv.innerHTML = `
        <button data-modal-target="#modal" id="open-modal"> Open Modal </button>
        <button data-create-modal class="create-modal"> Create New Modal </button>
        <div class="modal" id="modal">
            <div class="modal-header"> 
                <textarea class="title" maxlength="20"> Example Modal </textarea>
                <button data-close-button class="close-button"> &times; </button>
            </div>
            <div class="modal-body">
                <h3>Description</h3>
                <textarea class="description" placeholder=" Example text"></textarea>
                <div class="button-wrapper">
                    <button class="save-button"> Save </button>
                    <button class="cancel-button"> Cancel </button>
                </div>
            </div>
            <div class="modal-attachments-header">
                <div class="attachments-wrapper">
                    <h3>Attachments</h3>
                    <button class="add-button"> Add </button>
                </div>
                <div class="links">
                    <h4>links</h4>
                </div>
            </div>
            <!-- If you add an attachment, show modal links -->
            <div class="modal-comments"> </div>
        </div>
        <div id="overlay"></div>
    `;
}