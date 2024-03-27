import WithLayout from '@layouts/WithLayout';
import About from '@pages/About';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';
import Login from '@pages/SignIn';

export const routes = [
  {
    path: '/',
    component: WithLayout(Home),
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/sign-in',
    component: Login,
  },
  {
    path: '/about',
    component: WithLayout(About),
  },
  {
    path: '*',
    component: NotFound,
  },
];
