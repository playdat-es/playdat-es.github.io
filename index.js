// List of games
const games = [
    {
        url: 'https://spyfall.playdat.es/',
        img: 'assets/spyfall_logo.svg',
        title: 'Spyfall',
        color: '#ad1456'
    },
    {
        url: 'https://example.com/page1',
        img: 'assets/logo.png',
        title: 'Game 1',
        color: '#000000'
    },
    {
        url: 'https://example.com/page1',
        img: 'assets/logo.png',
        title: 'Game 2',
        color: '#000000'
    },
];

const shadowAlpha = '66';   // 40% opacity in hex
const shadowAlphaHover = 'CC';   // 80% opacity in hex

const gridContainer = document.querySelector('#linked-games');

const createGameCard = ({ url, img, title, color }) => {
    const link = document.createElement("a");
    link.href = url;
    link.style = 'max-width: 250px;';

    const card = document.createElement('div');
    card.className = 'card';
    card.style = `box-shadow: 0px 0px 15px 5px ${color + shadowAlpha};`;
    // Scale card up when hovering over it
    card.addEventListener('mouseenter', () => {
        card.style = `box-shadow: 0px 0px 15px 10px ${color + shadowAlphaHover};`;
        card.style.scale = 1.1;
    })
    card.addEventListener('mouseleave', () => {
        card.style = `box-shadow: 0px 0px 15px 10px ${color + shadowAlpha};`;
        card.style.scale = 1;
    })

    const cardContent = document.createElement('content');
    cardContent.className = 'content u-text-center';

    const image = document.createElement('img');
    image.src = img;
    image.alt = title + ' Logo';
    image.className = 'img-responsive bg-dark';

    const p = document.createElement('p');
    p.className = 'title';
    p.textContent = title;

    cardContent.appendChild(image);
    cardContent.appendChild(p);
    card.appendChild(cardContent);
    link.appendChild(card);
    gridContainer.appendChild(link);
};

games.forEach(game => {
    createGameCard(game);
});
