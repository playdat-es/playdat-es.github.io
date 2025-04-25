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

    const card = document.createElement('div');
    card.className = 'card hover-grow';
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

    const image = document.createElement('img');
    image.src = img;
    image.alt = title + ' Logo';
    image.className = 'img-responsive bg-dark';
    image.style.width = '250px';
    image.style.height = '250px';

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
