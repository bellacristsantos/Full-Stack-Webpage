$(document).ready(function () {
  $('#header').load('../pages/header.html');
  $('#footer').load('../pages/footer.html');
});

const galleryItems = [
  {
    year: 2023,
    city: 'Copenhagen',
    imageUrl: 'https://source.unsplash.com/random?a=1',
  },
  {
    year: 2023,
    city: 'Copenhagen',
    imageUrl: 'https://source.unsplash.com/random?b=1',
  },
  {
    year: 2023,
    city: 'Barcelona',
    imageUrl: 'https://source.unsplash.com/random?c=1',
  },
  {
    year: 2022,
    city: 'Barcelona',
    imageUrl: 'https://source.unsplash.com/random?d=1',
  },
  {
    year: 2022,
    city: 'London',
    imageUrl: 'https://source.unsplash.com/random?e=1',
  },
  {
    year: 2022,
    city: 'London',
    imageUrl: 'https://source.unsplash.com/random?f=1',
  },
  {
    year: 2021,
    city: 'Berlin',
    imageUrl: 'https://source.unsplash.com/random?g=1',
  },
  {
    year: 2021,
    city: 'Berlin',
    imageUrl: 'https://source.unsplash.com/random?h=1',
  },
];

const renderGallery = (items) => {
  const galleryContainer = $('.row');
  galleryContainer.empty();

  items.forEach((item, index) => {
    const galleryItem = `
      <div class="col-md-6 col-lg-3 overflow-hidden">
        <div class="container-hover">
          <a href="link_to_image_${index + 1}.html">
            <img loading="lazy" src="${item.imageUrl}" alt="Image ${index + 1}">
          </a>
        </div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>Year</th>
              <td>${item.year}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>${item.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    galleryContainer.append(galleryItem);
  });
};

$(document).ready(() => {
  renderGallery(galleryItems);

  $('#filter-2023').on('click', () => {
    const filteredItems = galleryItems.filter((item) => item.year === 2023);
    renderGallery(filteredItems);
  });

  $('#filter-2022').on('click', () => {
    const filteredItems = galleryItems.filter((item) => item.year === 2022);
    renderGallery(filteredItems);
  });

  $('#filter-2021').on('click', () => {
    const filteredItems = galleryItems.filter((item) => item.year === 2021);
    renderGallery(filteredItems);
  });

  $('#filter-Copenhagen').on('click', () => {
    const filteredItems = galleryItems.filter(
      (item) => item.city === 'Copenhagen'
    );
    renderGallery(filteredItems);
  });

  $('#filter-Barcelona').on('click', () => {
    const filteredItems = galleryItems.filter(
      (item) => item.city === 'Barcelona'
    );
    renderGallery(filteredItems);
  });

  $('#filter-London').on('click', () => {
    const filteredItems = galleryItems.filter((item) => item.city === 'London');
    renderGallery(filteredItems);
  });

  $('#filter-Berlin').on('click', () => {
    const filteredItems = galleryItems.filter((item) => item.city === 'Berlin');
    renderGallery(filteredItems);
  });

  $('#reset-filter').on('click', () => {
    renderGallery(galleryItems);
  });

  $('#sort-year').on('click', () => {
    const sortedItems = galleryItems.slice().sort((a, b) => a.year - b.year);
    renderGallery(sortedItems);
  });

  $('#sort-city').on('click', () => {
    const sortedItems = galleryItems
      .slice()
      .sort((a, b) => a.city.localeCompare(b.city));
    renderGallery(sortedItems);
  });
});
