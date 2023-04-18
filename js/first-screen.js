(function() {
    const project = JSON.parse(localStorage.project);
    const productsContainer = document.querySelector('.first-screen');
    productsContainer.innerHTML += `
   <div class="first-item" data-id="${project.id}" style="background-image:url(${project.image});">
        </div>
          `;
})();