
(function() {

  const project = JSON.parse(localStorage.project);
  const productsContainer = document.querySelector('.block-separate');
    productsContainer.innerHTML = `
    <div class="top-separate">
    <h3>${project.title}</h3>
    <hr class="super-hr">
    </div>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" data-id="${project.id}">
    <div class="carousel-item active">
      <img src="${project.image}" class="d-block w-100" alt="${project.title}">
    </div>
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

  (function() {
    const images = [
    {
        id: "9",
        photo:'img/9Atem/atem-1.gif',
    },
    {
        id: "9",
        photo:'img/9Atem/atem-2.gif',
    },
    {
        id: "9",
        photo:'img/9Atem/atem-3.gif',
    },
    {
        id: "9",
        photo:'img/9Atem/atem-4.gif',
    },
    {
        id: "9",
        photo:'img/9Atem/atem-5.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-1.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-2.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-3.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-4.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-5.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-6.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-7.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-8.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-9.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-10.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-11.gif',
    },
    {
      id: "8",
      photo:'img/8Voomy/voomy-it-park-12.gif',
    }
  ];
  
  function renderImages(images) {
    const project = JSON.parse(localStorage.project);
    const imagesContainer = document.querySelector('.carousel-inner');
    for(const image of images)
    if(project.id == image.id){
            imagesContainer.innerHTML += `
            <div class="carousel-item" data-id="${project.id}">
            <img  src="${image.photo}" class="d-block w-100" alt="${image.title}">
            </div>
            `;
        }
}

renderImages(images);
  })();