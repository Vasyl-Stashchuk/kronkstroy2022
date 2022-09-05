(function() {

    const project = JSON.parse(localStorage.project);
    const productsContainer = document.querySelector('.block-separate');
    productsContainer.innerHTML = `
    <div class="top-separate" data-id="${project.id}">
    <h3>${project.title}</h3>
    <hr class="super-hr">
    </div>
    <div class="carousel">
    <button id="prev" type="button" class="prev"><</button>
    <section id="container" class="pictures">
    
    </section>
    <button id="next" type="button" class="next">></button>
    </div>
  <section>
        <h4>${project.text}</h4>
    </section>
    <div class="popup-image">
        <span>&times;</span>
        <img src="Miron-1.gif" alt=""> 
    </div>
            `;
})();

(function() {
    const images = [{
            id: "9",
            photo: 'img/9Atem/Atem-1.gif',
        },
        {
            id: "9",
            photo: 'img/9Atem/Atem-2.gif',
        },
        {
            id: "9",
            photo: 'img/9Atem/Atem-3.gif',
        },
        {
            id: "9",
            photo: 'img/9Atem/Atem-4.gif',
        },
        {
            id: "9",
            photo: 'img/9Atem/Atem-5.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-1.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-2.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-3.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-4.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-5.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-6.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-7.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-8.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-9.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-10.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-11.gif',
        },
        {
            id: "8",
            photo: 'img/8Voomy/Voomy-12.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-1.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-2.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-3.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-4.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-5.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-6.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-7.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-8.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-9.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-10.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-11.gif',
        },
        {
            id: "7",
            photo: 'img/7Admin/Admin-12.gif',
        },
        {
            id: "6",
            photo: 'img/6Miron/Miron-1.gif',
        },
        {
            id: "6",
            photo: 'img/6Miron/Miron-2.gif',
        },
        {
            id: "6",
            photo: 'img/6Miron/Miron-3.gif',
        },
        {
            id: "6",
            photo: 'img/6Miron/Miron-4.gif',
        },
        {
            id: "6",
            photo: 'img/6Miron/Miron-5.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-1.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-2.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-3.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-4.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-5.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-6.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-7.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-8.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-9.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-10.gif',
        },
        {
            id: "5",
            photo: 'img/5AtbMarket/AtbMarket-11.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-1.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-2.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-3.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-4.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-5.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-6.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-7.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-8.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-9.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-10.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-11.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-12.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-13.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-14.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-15.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-16.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-17.gif',
        },
        {
            id: "4",
            photo: 'img/4Delmar/Delmar-18.gif',
        }
    ];

    function renderImages(images) {
        const project = JSON.parse(localStorage.project);
        const imagesContainer = document.querySelector('.pictures');
        for (const image of images)
            if (project.id == image.id) {
                imagesContainer.innerHTML += `
                <div class="image">
                
                <img src="${image.photo}">
                </div>
                `;
            }
        }
        
        renderImages(images);
    })();
    
    {
        /* <a class="carousel-pictures" href="${image.photo}"></a> */}
        // </a>
    // <a href="#" class="full" style="background-image:url(${image.photo})"></a> 

// var size = 1250;

// document.querySelector('carousel').scrollIntoView({ behavior: "smooth" });

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('prev');
    button.onclick = function() {
        document.getElementById('container').scrollLeft -= 400;
    };
    var button = document.getElementById('next');
    button.onclick = function() {
        document.getElementById('container').scrollLeft += 400;
    };
}, false);




document.querySelectorAll('.pictures img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block' ;
        document.querySelector('.popup-image img').src = image.getAttribute('src');  
    }
});
document.querySelector ('.popup-image span') . onclick = ( ) =>{
    document.querySelector ('.popup-image') . style.display = 'none';
}    



// function myFunction(x) {
//     size = 545;
//     console.log(x);
// }



// var x = window.matchMedia("(min-width: 1250px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction)