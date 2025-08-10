import RoutePage from "../../components/RoutePage";
import { Saidebar } from "../../components/Saidebar";

export const Home = ({onLogout}) => {
  return (
    <main className="home__wrapper">
      <Saidebar onLogout={onLogout}/>
      <RoutePage />
    </main>
  );
};
