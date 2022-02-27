(function() {
    const project = JSON.parse(localStorage.project);
    const productsContainer = document.querySelector('.block-separate');
    productsContainer.innerHTML = `
    <div class="top-separate">
    <h3>${project.title}</h3>
    <hr class="super-hr">
    </div>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${project.image1}" class="d-block w-100" alt="${project.title}">
    </div>
    <div class="carousel-item">
      <img src="${project.image2}" class="d-block w-100" alt="${project.title}">
    </div>
    <div class="carousel-item">
      <img src="${project.image3}" class="d-block w-100" alt="${project.title}">
    </div>
    <div class="carousel-item">
      <img src="${project.image4}" class="d-block w-100" alt="${project.title}">
    </div>
    <div class="carousel-item">
      <img src="${project.image5}" class="d-block w-100" alt="${project.title}">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <section>
        <h4>${project.text}</h4>
    </section>
            `;
            
          
})();