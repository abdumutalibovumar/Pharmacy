import Dashboard from '../modules/Dashboard/Dashboard';
import Tovar from '../modules/Tovar/Tovar';
import Korzina from '../modules/Korzina/Korzina';
import AI from '../modules/AI/AI';
import About from '../modules/About/About';

export const appRoutes = () => {
  return [
    {
      id: 1,
      path: "/",
      element: <Dashboard />,
    },
    {
      id: 2,
      path: "/products",
      element: <Tovar />,
    },
    {
      id: 3,
      path: "/cart",
      element: <Korzina />,
    },
    {
      id: 4,
      path: "/ai-helper",
      element: <AI />,
    },
    {
      id: 5,
      path: "/about",
      element: <About />,
    }
  ];
};
