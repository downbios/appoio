import css from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <div>
        <h1>Appoio</h1>
      </div>
    </header>
  );
};
