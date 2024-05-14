import css from "./home.module.scss";
import homeImg from "../../assets/home.jpg";

export const Home: React.FC = () => {
  return (
    <main className={css.home}>
      <img src={homeImg} alt="" />
      <div>
        <p>
          <strong>Appoio</strong>, Um guia para de ajudar a lidar e entender as
          dificuldades enfrentadas por PCD's.
          <br />
          Você deve conhecer a sigla PcD, né? Essa sigla representa o termo
          correto para se referir a pessoas com deficiência.
        </p>
        <br />
        <span>
          O Brasil tem quase 1/5 da população representada por pessoas com
          deficiência. Isso significa que a cada 5 pessoas no Brasil, 1 tem
          deficiência. Esse número lotaria mais de 532 estádios do Maracanã.
        </span>

        <p>
          Veja! a seguir como entender e ajudar, as pessoas de acordo com o seu
          tipo de deficiência
        </p>
      </div>
    </main>
  );
};
