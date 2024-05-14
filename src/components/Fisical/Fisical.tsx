import css from "./fisical.module.scss";
import fisicalImg from "../../assets/fisical.jpg";

export const Fisical: React.FC = () => {
  return (
    <article>
      <div className={css.grid}>
        <div>
          <h1>Deficiência Física</h1>
          <p>
            A pessoa com deficiência física pode ter alguma limitação para se
            movimentar e poderá usar algum equipamento de apoio, tais como:
            cadeira de rodas, muletas, andador, entre outros. <br />{" "}
            Dificuldades no deslocamento: Uma pessoa que usa equipamento de
            apoio ou que têm limitações para caminhar enfrenta muitos desafios
            como: buracos das calçadas, falta de rampas nas esquinas para
            atravessar a rua, além de se deparar com postes, canteiros e
            lixeiras que impedem sua passagem. <br /> Além disso, nem todo
            ônibus possui acessibilidade para a cadeira de rodas, ou seja, se
            deslocar utilizando aplicativos de mobilidade pode ser a melhor
            opção.
          </p>
          <br />
          <ul>
            <strong>Dica:</strong> O que eu preciso saber sobre um usuário com
            deficiência física?
            <li>Poderá se movimentar de forma mais lenta. Tenha paciência;</li>
            <li>
              Possivelmente precisará da sua ajuda; Poderá ter dificuldades ao
              entrar ou sair do carro, e subir ou descer da calçada;
            </li>
            <li>
              Não mova as muletas, bengalas ou a cadeira de rodas sem a
              permissão do usuário.
            </li>
          </ul>
        </div>
        <img src={fisicalImg} alt="" />
      </div>
    </article>
  );
};
