// const formData = {
//   email: "",
//   message: ""
// };

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea[name="message"]');


// document.addEventListener('DOMContentLoaded', () => {
//   const savedData = localStorage.getItem('feedback-form-state');
//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     formData.email = parsedData.email;
//     formData.message = parsedData.message;
//     emailInput.value = formData.email;
//     messageInput.value = formData.message;
//   }
// });

// form.addEventListener('input', (event) => {
//   if (event.target.name === 'email') {
//     formData.email = event.target.value;
//   } else if (event.target.name === 'message') {
//     formData.message = event.target.value;
//   }
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// });


// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   console.log('Current formData:', formData);
//   console.log('Email input value:', emailInput.value);
//   console.log('Message input value:', messageInput.value);

//   if (!formData.email.trim() || !formData.message.trim()) {
//     alert('Fill please all fields');
//   } else {
//     console.log(formData);
    
//     localStorage.removeItem('feedback-form-state');
//     formData.email = "";
//     formData.message = "";
//     emailInput.value = "";
//     messageInput.value = "";
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const formData = {
    email: "",
    message: ""
  };

  const form = document.querySelector('.feedback-form');
  if (!form) {
    console.error('Form not found');
    return;
  }

  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    } catch (error) {
      console.error('Error parsing saved form data:', error);
    }
  }

  form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
      formData.email = event.target.value;
    } else if (event.target.name === 'message') {
      formData.message = event.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
      alert('Fill please all fields');
    } else {
      console.log('Current formData:', formData);
      console.log('Email input value:', emailInput.value);
      console.log('Message input value:', messageInput.value);

      localStorage.removeItem('feedback-form-state');
      formData.email = "";
      formData.message = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });
});
