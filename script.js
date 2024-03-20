//your JS code here. If required.
const toastContainer = document.getElementById('toasts');
const message = document.getElementById('message-content');
const duration = document.getElementById('duration');
const addBtn = document.getElementById('add-button');
const clearBtn = document.getElementById('clear-button')


addBtn.addEventListener('click', addBtnClicked);

function addBtnClicked() {
    const msg = message.value;
    const delay = duration.value || 1000;
    const selectedValue = document.querySelector('input[name="type"]:checked').value;

    // Create a new div for the toast card
    const toastCard = document.createElement('div');
    toastCard.classList.add('toast-card');
    toastCard.classList.add(`${selectedValue}-toast`);

    // Create a button and set its text content
	const cancelBtn = document.querySelector('input[id="cancelable"]:checked');

    // Set the content of the toast card
    const textContainer = document.createElement('div');
    textContainer.textContent = msg;

    // Append the text container to the toast card
    toastCard.appendChild(textContainer);

	// Append the button to the toast card
	if(cancelBtn) {
		let btn = document.createElement('button');
	    btn.classList.add('cancel-button');
	    btn.textContent = 'X';
		btn.addEventListener('click',removeToast)
		toastCard.appendChild(btn);
	}

	function removeToast() {
		toastContainer.remove(toastCard)
	}
	

    // Append the toast card to the toast container
    toastContainer.appendChild(toastCard);

    // Remove the toast card after the specified duration
    setTimeout(() => {
        toastCard.remove();
    }, delay);
}



clearBtn.addEventListener('click',clear)

function clear() {
	toastContainer.innerHTML = ``
}