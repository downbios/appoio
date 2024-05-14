import css from "./visual.module.scss";
import visualImg from "../../assets/braille.jpg";

export const Visual: React.FC = () => {
  return (
    <article>
      <div className={css.grid}>
        <div>
          <p>
            <h1>Deficiência Visual</h1>
            A pessoa com deficiência visual é aquela que tem alguma dificuldade
            para enxergar, podendo ter baixa visão ou uma perda da visão, como a
            cegueira. Na maioria dos casos, a pessoa com deficiência visual
            tende a usar um equipamento de apoio para o seu deslocamento: a
            bengala. <br /> Este item costuma ser dobrável e pode ficar do
            tamanho de um guarda chuva pequeno. O próprio usuário irá guardar e
            manter esse item por perto. Em outros casos, um usuário cego pode
            estar acompanhado de seu cão-guia.
            <br />
            Em outros casos, um usuário cego pode estar acompanhado de seu
            cão-guia. É importante você saber que a pessoa com deficiência
            visual usuária de cão-guia tem o direito, previsto por Lei
            <strong>*</strong> de ingressar e permanecer com o animal em todos
            os locais públicos ou privados de uso coletivo.
          </p>
          <br />
          <span>
            *Lei n 11.126 - É assegurado à pessoa com deficiência visual
            acompanhada de cão-guia o direito de ingressar e de permanecer com o
            animal em todos os meios de transporte e em estabelecimentos abertos
            ao público, de uso público e privados de uso coletivo.
          </span>
        </div>
        <img src={visualImg} alt="" />
      </div>
    </article>
  );
};
