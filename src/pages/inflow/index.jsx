import './index.scss';

function InFlow() {

  return (

    <div className="pagina-inFlow">

      <div className='esq'>

          <h1>In-Flow</h1>
          <h3>Frontend Developers</h3>

          <ul id='menu'>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#experiencias">Experiências</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>

          <p>Somos especialistas em desenvolvimento Frontend.</p>

          <img src="/assets/images/linkedin.png" alt="" />

      </div>

      <div className='dir'>

        <section id='sobre'>
          
          <h3>Sobre</h3>

          <p className='prgrf'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

        </section>

        <section id='experiencias'>

          <h3>Experiências</h3>

          <p className='prgrf'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

        </section>

        <section id='projetos'>

          <h3>Projetos</h3>

          <p className='prgrf'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

        </section>

      </div>

    </div>

  );

}

export default InFlow;
