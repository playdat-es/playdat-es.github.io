// Example data
const games = [
    {
      url: 'https://spyfall.playdat.es/',
      img: 'assets/spyfall_logo.svg',
      title: 'Spyfall'
    },
    {
        url: 'https://example.com/page1',
        img: 'assets/logo.png',
        title: 'Logo 1'
    },
    {
        url: 'https://example.com/page1',
        img: 'assets/logo.png',
        title: 'Logo 2'
    },
];

const gridContainer = document.querySelector('#linked-games');

const createGameCard = ({ url, img, title }) => {
    const link = document.createElement("a");
    link.href = url;
    link.style = 'max-width: 250px;';

    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = document.createElement('content');
    cardContent.className = 'content u-text-center';

    const image = document.createElement('img');
    image.src = img;
    image.alt = title;
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
