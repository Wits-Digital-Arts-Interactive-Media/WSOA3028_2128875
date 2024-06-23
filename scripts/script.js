// Function to handle click event on navbar links
function handleNavClick(event) {
    // Remove the 'active' class from all links
    var links = document.querySelectorAll("#navbar a");
    links.forEach(function(link) {
      link.classList.remove("active");
    });
    
    // Add the 'active' class to the clicked link
    event.target.classList.add("active");
  }
  
  // Add click event listeners to all links in the navbar
  var links = document.querySelectorAll("#navbar a");
  links.forEach(function(link) {
    link.addEventListener("click", handleNavClick);
  });
  