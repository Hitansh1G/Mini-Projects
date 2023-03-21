// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    
    // Get the section ID from the href attribute of the link
    const sectionID = this.getAttribute('href');
    
    // Scroll to the section with the matching ID
    document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the "scroll to top" button
const scrollToTopButton = document.querySelector('#scroll-to-top');

// Add an event listener to the "scroll to top" button
scrollToTopButton.addEventListener('click', function() {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Get the events
const events = document.querySelectorAll('.event');

// Add an event listener to each event
events.forEach(event => {
  event.addEventListener('click', function() {
    // Get the event details
    const title = this.querySelector('h3').textContent;
    const date = this.querySelector('p').textContent;
    const imageSrc = this.querySelector('img').getAttribute('src');
    
    // Create a modal with the event details
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const modalContent = `
      <div class="modal-overlay"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <img src="${imageSrc}">
          <p>${date}</p>
        </div>
      </div>
    `;
    
    modal.innerHTML = modalContent;
    
    // Add the modal to the page
    document.body.appendChild(modal);
    
    // Get the close button
    const closeButton = modal.querySelector('.close-btn');
    
    // Add an event listener to the close button
    closeButton.addEventListener('click', function() {
      // Remove the modal from the page
      modal.remove();
    });
  });
});

// Get the services
const services = document.querySelectorAll('.service');

// Add an event listener to each service
services.forEach(service => {
  service.addEventListener('mouseenter', function() {
    // Add a class to the service when the mouse enters
    this.classList.add('service-hover');
  });
  
  service.addEventListener('mouseleave', function() {
    // Remove the class from the service when the mouse leaves
    this.classList.remove('service-hover');
  });
});
