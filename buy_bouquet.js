function buy_form() {
    document.getElementById('formPopup').style.display = 'block';
  }
  
  function close_form() {
    document.getElementById('formPopup').style.display = 'none';
  }
  
  document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const home_address = document.getElementById('home-address').value;
  
    fetch('/submit_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, mobile, email, home_address }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      close_form();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  