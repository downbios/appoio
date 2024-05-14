import css from "./auditiv.module.scss";
import auditImg from "../../assets/audit.jpg";

export const Auditiv: React.FC = () => {
  return (
    <article>
      <div className={css.grid}>
        <div>
          <h1>Deficiência auditiva</h1>
          <p>
            As pessoas com deficiência auditiva, ou seja, pessoas que têm alguma
            limitação para ouvir e escutar, podem ter diferentes graus de perda
            da audição, ou seja, poderão manifestar diferentes dificuldades para
            te ouvir. Por exemplo, se perguntar algo e ele não responder, é
            possível que a pessoa que você está levando seja uma pessoa com
            deficiência auditiva ou surda. <br /> As pessoas surdas geralmente
            se comunicam em Libras, que é a Língua Brasileira de Sinais. Existem
            algumas pessoas com deficiência auditiva que usam aparelho auditivo
            e conseguem ouvir e se comunicar.
          </p>
          <br />
          <ul>
            <li>
              Mesmo que você não saiba Libras, você pode tentar se comunicar
              digitando uma mensagem
            </li>
            <li>
              É comum que pessoas com deficiência auditiva façam leitura labial
              para compreender o que o outro está dizendo. Dessa forma, ao falar
              com a PcD auditiva, procure olhar para ela, permita que a pessoa
              veja sua boca enquanto estiver falando
            </li>
          </ul>
        </div>
        <img src={auditImg} alt="" />
      </div>
    </article>
  );
};
