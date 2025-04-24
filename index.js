// Example data
const imageLinks = [
    {
      url: 'https://example.com/page1',
      img: 'assets/logo.png',
      alt: 'Spyfall'
    },
    {
        url: 'https://example.com/page1',
        img: 'assets/logo.png',
        alt: 'Logo 1'
    },
    {
        url: 'https://example.com/page1',
        img: 'assets/logo.png',
        alt: 'Logo 2'
    },
];

const container = document.querySelector('#linked-games');

imageLinks.forEach(({ url, img, alt }) => {
    const link = document.createElement("a");
    link.href = url;

    const image = document.createElement('img');
    image.src = img;
    image.alt = alt;
    image.className = 'img-responsive u-shadow-sm';
    image.style.width = '150px';
    image.style.height = 'auto';

    link.appendChild(image);
    container.appendChild(link);
});

