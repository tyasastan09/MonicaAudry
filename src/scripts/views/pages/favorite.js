import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createrestaurantsItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
          <div id="query" class="content">
            <h2 class="content__heading">Your Liked Restaurants</h2>
            <div id="restaurants" class="restaurants">
     
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createrestaurantsItemTemplate(restaurant);
    });
  },
};

export default Like;
