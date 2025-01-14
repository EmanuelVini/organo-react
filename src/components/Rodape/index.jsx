import './Rodape.css';

function Rodape() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com/aluraonline" target="_blank">
              <img src="/imagens/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aluraonline" target="_blank">
              <img src="/imagens/ig.png" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/aluraonline" target="_blank">
              <img src="/imagens/tw.png" alt="Twitter" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
}

export default Rodape;
