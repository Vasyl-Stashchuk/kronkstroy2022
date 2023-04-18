(function() {
    const services = [{
            id: "1",
            image: 'img/image-2.1-min.jpg',
            title: 'РЕКЛАМНІ КОНСТРУКЦІЇ',
            text: 'Ми надаємо повний цикл виготовлення вивісок, починаючи від дизайн-проекту до монтажу на об`єкті. Сучасні технології освітлення та виробництва елементів зовнішньої реклами, а також багаторічний досвід дозволяють нам виготовляти найбільш якісну привабливу та енергоощадну зовнішню рекламу.',
            block: 'white',
            pattern: ''
        },
        {
            id: "2",
            image: 'img/image-4.5-min.jpg',
            title: 'ФАСАДИ З КОРТЕН СТАЛИ',
            text: 'Кортен-сталь, сталь Кортен, Cor-Ten steel, просто Кортен. Називайте як хочете, але суті справи це не змінює. Зіткнулися з цим матеріалом років 12-15 тому, точно вже не згадаю. Так і головне, що побачив її перший раз не на фасаді, і не на пам`ятнику, а на кораблі. Кажу тоді товаришу, мовляв, що це за корабель такий — мотлох якийсь іржавий. На що у відповідь почув, що я неосвічений тип і багато чого цікавого дізнався і про себе, а головне і про Кортена…',
            block: 'black',
            pattern: ''
        },
        {
            id: "3",
            image: 'img/image-5.2-min.jpg',
            title: 'АЛЮМІНІЄВІ СВІТЛОПРОЗОРНІ КОНСТРУКЦІЇ',
            text: 'Під час зведення бізнес-центрів, розважальних закладів, держустанов люди все частіше обирають ці матеріали. Вони відрізняються хорошими експлуатаційними характеристиками, і ціна на них досить демократична.',
            block: 'white',
            pattern: ''
        },
        {
            id: "4",
            image: 'img/image-min.jpg',
            title: 'НАВІСНІ ВЕНТИЛЮВАНІ ФАСАДИ',
            text: 'Забезпечує природну вологість повітря і постійну температуру в приміщенні створює додаткову звукоізоляцію, зменшує можливість виникнення грибків, тому навіть люди з алергією почуваються комфортно в прикрашеній вентильованими фасадами будівлі. Крім того, вентильовані фасади є ідеальним рішенням не тільки для утеплення, але і для надання будинку сучасний вигляд.',
            block: 'black',
            pattern: ''

        },
        {
            id: "5",
            image: 'img/image-5.2-min.jpg',
            title: 'АЛЮМІНІЄВІ СВІТЛОПРОЗОРНІ КОНСТРУКЦІЇ',
            text: 'Під час зведення бізнес-центрів, розважальних закладів, держустанов люди все частіше обирають ці матеріали. Вони відрізняються хорошими експлуатаційними характеристиками, і ціна на них досить демократична.',
            block: 'white',
            pattern: 'None'
        }
    ];

    function renderServices(services) {
        const servicesContainer = document.querySelector('.services');
        for (const service of services) {
            servicesContainer.innerHTML += `
            <article class="block-${service.block}" id="${service.pattern}" style="background-image: url(${service.image});">
                <div>
                <h3>${service.title}</h3>
                <hr class="super-hr">
                <h4>${service.text}</h4>
                <a href="service-separate.html" class="service-button button card-button service-info-button" data-id="${service.id}">ПОСМОТРЕТЬ ПОДРОБНЕЕ</a>

        </div>
          <div class="photo-columns"><img  src="${service.image}"></div>

                </article>
            `;
        }
        document.querySelectorAll('.service-info-button')
            .forEach(infoButton => infoButton.addEventListener('click', serviceInfoClick));
    }

    function serviceInfoClick(ev) {
        const serviceInfoButton = ev.target;
        const serviceId = serviceInfoButton.dataset.id;
        const service = services.filter(service => service.id === serviceId)[0];
        localStorage.service = JSON.stringify(service);
    }

    renderServices(services);

})();