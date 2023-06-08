import CONFIG from '../../globals/config';

const createrestaurantsDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__item">
    <div class="restaurant-detail__info>
    <div class="title_restaurant_detail>
      <h2 class="restaurants__name">${restaurant.name}</h2>
    </div>
      <p class="restaurant-detail__about">
        <span class="restaurant-detail__rating"><i class="fa fa-star"></i>${restaurant.rating}</span> 
        ${restaurant.categories.map((category) => `
          <span class="restaurant-detail__category">${category.name}</span>
        `).join('')}
      </p>
      <p class="restoran-detail__location font-secondary">${restaurant.address}, ${restaurant.city}</p>
      <img class="restaurants__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Description</h4>
        <p class="restaurant-detail__description">${restaurant.description}</p>
    </div>

    <h3>Menu List</h3>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
        <h4>Menu Makanan</h4>
        <div class="cards-menu">
          <ul class="restaurant-detail__foods">
            ${restaurant.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="drinks">
        <h4>Menu Minuman</h4>
        <div class="cards_menu">
          <ul class="restaurant-detail__drinks">
            ${restaurant.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <h3>Customer Reviews</h3>
    <div class="restaurant-detail__review">
      <div class="cards">
        ${restaurant.customerReviews.map((review) => `
          <div class="review-item">
            <p tabindex="0" class="review_date">
            <i class="fa-light fa-mobile"></i><i class="fas fa-calendar-alt"></i>${review.date}</p>
            <div class="review_header">
              <p tabindex="0" class="review__name">
              <div class="review__name">${review.name}</p>
              <div tabindex="0" class="review__text">${review.review}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createrestaurantsItemTemplate = (restaurants) => `
      <div class="card">
          <img class="card_thumb" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" title="${restaurants.name}">
          <div class="kota">${restaurants.city}</div>
          <div class="card_content">
              <div class="card_rating">
                  Rating : 
                  <p href="#" class="card_rating_number">${restaurants.rating}</p>
              </div>
              <h1 class="card_title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h1>
              <div class="card_desc">${restaurants.description.slice(0, 150)}...</div>
          </div>
      </div>
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createrestaurantsItemTemplate,
  createrestaurantsDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
