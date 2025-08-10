import RoutePage from "../../components/RoutePage";
import { Saidebar } from "../../components/Saidebar";

export const Home = () => {
  return (
    <main className="home__wrapper">
      <Saidebar />
      <RoutePage />
    </main>
  );
};
