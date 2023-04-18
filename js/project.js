(function() {
    const projects = [{
            id: "9",
            image: 'img/9Atem/atemMain.jpg',
            title: '«АТЕМ». Ателье керамики город Киев',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Commercial',
            pattern: 'Last'
        },
        {
            id: "8",
            image: 'img/8Voomy/voomyMain.jpg',
            title: 'Voomy IT Park г. Харьков 2013 год',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Commercial',
            pattern: 'Last'
        },
        {
            id: "7",
            image: 'img/7Admin/adminMain.jpg',
            title: 'Административное здание г. Днепр 2017 год',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Commercial',
            pattern: 'Last'
        },
        {
            id: "6",
            image: 'img/6Miron/mironMain.jpg',
            title: 'ЖК «Дом на Миронова» — вторая очередь город Днепр',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Residential',
            pattern: 'Last'
        },
        {
            id: "5",
            image: 'img/5AtbMarket/atbMarketMain.jpg',
            title: 'АТБ-маркет город Днепр',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Residential',
            pattern: 'Last'
        },
        {
            id: "4",
            image: 'img/4Delmar/delmarMain.jpg',
            title: 'Многоэтажный дом «Delmar» в центре города Днепр',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Residential',
            pattern: 'Last'
        },
        {
            id: "3",
            image: 'img/portf_4.jpg',
            title: 'Демонтаж фасада на ЖК «Западная Стена»',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Private',
            pattern: 'Last'
        },
        {
            id: "2",
            image: 'img/portf_3.jpg',
            title: 'Алюмокомпозитные панели Alufas и «Екатериненский» дом',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Private',
            pattern: ''
        },
        {
            id: "1",
            image: 'img/portf_2.jpg',
            title: 'HPL и Кортен в частном секторе г. Днепр',
            text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст ',
            block: 'Private',
            pattern: 'Last'
        }
    ];


    function renderProjects(projects) {
        const projectsContainer = document.querySelector('.project-photos');
        for (const project of projects) {
            projectsContainer.innerHTML += `
                <article class="block${project.pattern}${project.block}">
                <a href="project-separate.html" class="button card-button project-info-button">
                <img src="${project.image}" alt="${project.title} " data-id="${project.id}"/></a>
                <h4>${project.title}</h4>
                    <hr>
                    <div class="buttons">
                    </div>
                </article>
            `;
        }

        document.querySelectorAll('.project-info-button')
            .forEach(infoButton => infoButton.addEventListener('click', projectInfoClick));
    }

    function projectInfoClick(ev) {
        const projectInfoButton = ev.target;
        const projectId = projectInfoButton.dataset.id;
        const project = projects.filter(project => project.id === projectId)[0];
        localStorage.project = JSON.stringify(project);
    }

    renderProjects(projects);

    function renderScreen(projects) {
        const productsContainer = document.querySelector('.first-screen');
        for (const project of projects)
            if (project.pattern === 'Last') {
                productsContainer.innerHTML += `
                <div class="first-item" id="${project.block}" style="background-image:url(${project.image});" data-id="${project.id}">
                </div>
                `;
            }

    }



    renderScreen(projects);

})();