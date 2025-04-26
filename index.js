// List of games
const games = [
    {
        url: 'https://spyfall.playdat.es/',
        img: 'assets/spyfall_logo.svg',
        title: 'Spyfall',
        color: '#ad1456'
    },
    {
        url: '',
        img: 'assets/coming_soon.png',
        title: 'Hues & Cues',
        color: '#3f51b5'
    },
    {
        url: '',
        img: 'assets/coming_soon.png',
        title: 'Moosle',
        color: '#9f570a'
    },
];

const shadowAlpha = '4D';   // 30% opacity in hex
const shadowAlphaHover = 'CC';   // 80% opacity in hex

const gridContainer = document.querySelector('#linked-games');

const createGameCard = ({ url, img, title, color }) => {
    const link = document.createElement("a");
    link.href = url;

    const card = document.createElement('div');
    card.className = url ? 'card hover-grow' : 'card';
    card.style.boxShadow = `0px 0px 15px 5px ${color + shadowAlpha}`;
    // Increase glow when hovering over card
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = `0px 0px 15px 5px ${color + shadowAlphaHover}`;
    })
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = `0px 0px 15px 5px ${color + shadowAlpha}`;
    })

    const cardContent = document.createElement('content');
    cardContent.className = 'content u-text-center';
    cardContent.style.fontFamily = 'Montserrat';

    const image = document.createElement('img');
    image.src = img;
    image.alt = title + ' Logo';
    image.className = 'img-responsive bg-black';
    image.style.width = '250px';
    image.style.height = '250px';
    image.style.padding = '10px';

    const p = document.createElement('p');
    p.className = 'title';
    p.textContent = title;
    p.style.color = 'white';
    p.style.fontSize = '24px';
    p.style.margin = '0px';
    p.style.backgroundColor = color;

    cardContent.appendChild(image);
    cardContent.appendChild(p);
    card.appendChild(cardContent);
    link.appendChild(card);
    gridContainer.appendChild(link);
};

if (window.innerWidth > 440) {
    while (games.length < 6) {
        games.push({
            url: '',
            img: 'assets/coming_soon.png',
            title: '???',
            color: '#444444'
        });
    }
}

games.forEach(game => {
    createGameCard(game);
});
