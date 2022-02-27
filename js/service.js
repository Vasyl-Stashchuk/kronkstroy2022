(function () {
    const services = [
        {
            id: "1",
            image: 'img/image-2.1-min.jpg',
            title: 'РЕКЛАМНЫЕ КОНСТРУКЦИИ',
            text: 'Мы предоставляем полный цикл изготовления вывесок, начиная от дизайн-проекта и до монтажа на объекте. Современные технологии освещения и производства элементов наружной рекламы, а также многолетний опыт позволяют нам изготавливать наиболее качественную привлекательную и энергосберегательную наружную рекламу.' ,
            block:'white'
        },
        {
            id: "2",
            image: 'img/image-4.5-min.jpg',
            title: 'ФАСАДЫ ИЗ КОРТЕН СТАЛИ',
            text: 'Кортен-сталь, сталь Кортен, Cor-Ten steel, просто Кортен. Называйте, как хотите, но сути дела это не меняет. Столкнулись с этим материалом лет 12-15 назад, точно уже и не вспомню. Так и главное, что увидел я ее первый раз не на фасаде, и не на памятнике, а на корабле. Говорю тогда товарищу, мол, что это за корабль такой — рухлядь какая-то ржавая. На что в ответ услышал, что я необразованный тип и многое интересное узнал и о себе, а главное и о Кортене…',
            block:'black'
        },
        {
            id: "3",
            image: 'img/image-5.2-min.jpg',
            title: 'АЛЮМИНИЕВЫЕ СВЕТОПРОЗРАЧНЫЕ КОНСТРУКЦИИ',
            text: 'При возведении бизнес-центров, развлекательных заведений, госучреждений люди всё чаще выбирают эти материалы. Они отличаются хорошими эксплуатационными характеристиками, и цена на них довольно демократична.',
            block:'white'
        },
        {
            id: "4",
            image: 'img/image-min.jpg',
            title: 'НАВЕСНЫЕ ВЕНТИЛИРУЕМЫЕ ФАСАДЫ',
            text: 'Обеспечивает естественную влажность воздуха и постоянную температуру в помещении создает дополнительную звукоизоляцию, уменьшает возможность возникновения грибков, поэтому даже люди с аллергией чувствовать себя комфортно в здании, украшенной вентилируемыми фасадами. Кроме того, вентилируемые фасады являются идеальными решением не только для утепления, но и для предоставления доме современный вид.',
            block:'black'
        },
        {
            id: "5",
            image: 'img/image-5.2-min.jpg',
            title: 'АЛЮМИНИЕВЫЕ СВЕТОПРОЗРАЧНЫЕ КОНСТРУКЦИИ',
            text: 'При возведении бизнес-центров, развлекательных заведений, госучреждений люди всё чаще выбирают эти материалы. Они отличаются хорошими эксплуатационными характеристиками, и цена на них довольно демократична.',
            block:'swhite'
        }
    ];

    function renderServices(services) {
        const servicesContainer = document.querySelector('.services');
        for (const service of services) {
            servicesContainer.innerHTML += `
            <article class="block-${service.block}" style="background-image: url(${service.image});">
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
          .forEach( infoButton => infoButton.addEventListener('click', serviceInfoClick));
    }

    function serviceInfoClick( ev ) {
        const serviceInfoButton = ev.target;
        const serviceId = serviceInfoButton.dataset.id;
        const service = services.filter( service => service.id === serviceId)[0];
        localStorage.service = JSON.stringify(service);
    }

    renderServices(services);

})();