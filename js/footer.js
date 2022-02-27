(function () {
    const footers = [
        {
            id: "1",
            image: '',
            title: '',
            text: ''
        }
    ];

    function renderFooters(footers) {
        const footersContainer = document.querySelector('footer');
        for (const footer of footers) {
            footersContainer.innerHTML += `
            <div>
            <p class="img-footer">    
              <a href="index.html"><img src="img/Kronk.svg" alt=""></a>
            </p> 
          </div>
            <div class="imgs-footer">
            <a href="https://www.facebook.com/KronkStroyFacade/"><img src="img/icons/icons8-facebook-250.png" alt=""></a>
            <a href="https://www.instagram.com/kronkstroy/"><img src="img/icons/icons8-instagram-250.png" alt=""></a>
          </div>
              <div class="footer-text">
                <h3>Навигация</h3>
                <hr class="super-hr">
              </div>
          <div class="footer-bar">
              <a class="using-index" href="index.html">Главная</a>
              <a class="using-about" href="">О Нас </a>
              <a class="using-project" href="project.html">Проекты</a>
              <a class="using-service" href="service.html">Услуги</a>
              <a class="using-contact" href="contact.html">Контакты</a>
          </div>
              <div class="footer-text">
                  <h3>Локация</h3>
                  <hr class="super-hr">
                  <h4>г. Днепр, Ул. Академика Белелюбского (бывш. Краснозаводская) Дом №54-а</h4>
                  <h4>+38 056 736-30-55 +38 096 692-64-53</h4>
                  <h4>kronkstroy@gmail.com</h4>
              </div>
              <div class="footer-down">
                  <p>© 2022, Kronk Stroy Systems</p>
              </div>
            `;
        }
    }

    renderFooters(footers);

})();