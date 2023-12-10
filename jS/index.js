let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
   document.body.classList.toggle('active');
}
window.onscroll = () => {
   if (window.innerWidth < 991) {
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
   }
   document.querySelectorAll('section').forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
         document.querySelectorAll('.header .navbar a').forEach(links => {
            links.classList.remove('active');
            document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active')
         });
      };

   });

}

(function () {
   emailjs.init('VzcyFsNAIJWzcwEmB');

   document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();

      const form = this;
      const formData = {
         name: form.name.value,
         email: form.email.value,
         number: form.number.value,
         message: form.message.value
      };

      emailjs.send('service_5ouchdh', 'template_zu0c0mr', formData)
         .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Email sent successfully!');
            form.reset(); // Reset the form after successful submission
         }, function (error) {
            console.error('There was an error sending the email:', error);
            alert('There was an error sending the email.');
         });
   });
})();