const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Sample hardcoded users
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'john', password: 'john123', role: 'user' }
];

document.getElementById("button").addEventListener('click', function () {
  const usernameInput = document.getElementById('Username').value.trim();
  const passwordInput = document.getElementById('Password').value.trim();
  const errorText = document.getElementById('error');
  alert('Button clicked!');
  const user = users.find(user => 
    user.username === usernameInput && user.password === passwordInput
  );

  console.log('user',user);
  if (!user) {
    errorText.textContent = 'Invalid username or password.';
    return;
  }

  // Redirect based on role
  if (user.role === 'admin') {
    window.location.href = 'admin.html';
  } else {
    window.location.href = 'home.html';
  }
});


/* upload image */
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

//const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

imageInput.addEventListener("change", function () {
  const files = Array.from(this.files);
  
  files.forEach(file => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      gallery.appendChild(img);
    };

    reader.readAsDataURL(file);
  });
});