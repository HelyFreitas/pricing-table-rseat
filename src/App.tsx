import { Check } from "phosphor-react";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">Conheça nossos planos</h1>
        <p className="paragraph">
          Conheça nossas soluções e escolha o plano ideal para o seu próximo
          projeto.
        </p>
      </header>
      <div className="container-cards">
        <div className="first-card">
          <h1 className="title-card1">Free</h1>
          <p className="price">
            R$ 0,<span className="span1">00</span>
            <span className="span2"> /mês</span>
          </p>
          <p className="paragraph-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="paragraph-container">
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <button className="btn-card">ASSINAR</button>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <div className="second-card">
          <div className="container-title">
            <h1 className="title-card2">Básico</h1>
            <button>Popular</button>
          </div>
          <p className="price2">
            R$ 29,<span className="span222">00</span>
            <span className="span22">/mês</span>
          </p>
          <p className="paragraph-card2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="paragraph-container2">
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <button className="btn-card2">ASSINAR</button>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <div className="first-card">
          <h1 className="title-card1">Profissional</h1>
          <p className="price">
            R$ 99,<span className="span1">00</span>
            <span className="span2"> /mês</span>
          </p>
          <p className="paragraph-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="paragraph-container3">
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
            <p>
              <Check size={20} color="#4be12d" weight="bold" />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <button className="btn-card">ASSINAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
