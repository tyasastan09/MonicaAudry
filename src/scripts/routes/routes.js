import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import DetailRestaurant from '../views/pages/detail';

const routes = {
  '/': Home,
  '/Home': Home,
  '/favorite': Favorite,
  '/detail/:id': DetailRestaurant,
};

export default routes;
