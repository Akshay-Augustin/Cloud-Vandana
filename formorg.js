
function uncheckOthers(id) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="gender"]');
  checkboxes.forEach(checkbox => {
    if (checkbox.id !== id) {
      checkbox.checked = false;
    }
  });
}

function validateFormAndOpenPopup() {
  const form = document.getElementById('myForm');
  if (form.checkValidity()) {
    const formData = new FormData(form);
    let message = '';

    formData.forEach((value, key) => {
      message += key + ': ' + value + '\n';
    });

    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;

    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'block';
  } else {
    alert('Please fill in all required fields and validate the form.');
  }
}

function closePopupAndResetForm() {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.style.display = 'none';

  const form = document.getElementById('myForm');
  form.reset();
}

function resetForm() {
  const form = document.getElementById('myForm');
  form.reset();
}
function uncheckOthers(checkboxId) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.id !== checkboxId) {
      checkbox.checked = false;
    }
  });
}

    function validateFormAndOpenPopup() {
      const form = document.getElementById('myForm');
      if (form.checkValidity()) {
        const formData = new FormData(form);
        let message = '';

        formData.forEach((value, key) => {
          message += key + ': ' + value + '\n';
        });

        const popupMessage = document.getElementById('popupMessage');
        popupMessage.textContent = message;

        const popupOverlay = document.getElementById('popupOverlay');
        popupOverlay.style.display = 'block';
      } else {
        alert('Please fill in all required fields inorder to submit the form');
      }
    }

    function closePopupAndResetForm() {
      const popupOverlay = document.getElementById('popupOverlay');
      popupOverlay.style.display = 'none';

      const form = document.getElementById('myForm');
      form.reset();
    }

    function resetForm() {
      const form = document.getElementById('myForm');
      form.reset();
    }