import restaurantSource from '../../data/restaurant-source';
import { createrestaurantsItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
        <h1>Explore Restaurant</h1>
        <div class="list" id="tes"></div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.listRestaurans();
    const restaurantContainer = document.querySelector('#tes');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createrestaurantsItemTemplate(restaurant);
    });
  },
};

export default Home;
