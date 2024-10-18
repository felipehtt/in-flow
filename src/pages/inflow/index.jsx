import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faLinkedin, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

import MouseShadow from '../../components/MouseShadow';

function InFlow() {

  return (

    <div className="pagina-inFlow">

      <MouseShadow />


      <header className='esq'>
        <div className='cima'>
          <img src="./assets/images/logo-semfundo.png" alt="" />
        </div>
        <h2>Frontend/Backend Developers</h2>
        <h4>Construímos ótimos design's, envolventes e <br />experiências digitais acessíveis.</h4>

        <ul>
          <li><a href="#sobre" className='animated-link'>Sobre</a></li>
          <li><a href="#experiencias" className='animated-link'>Experiências</a></li>
          <li><a href="#projetos" className='animated-link'>Projetos</a></li>
        </ul>

        <p>Somos especialistas em desenvolvimento Frontend <br /> e Backend.</p>

        <section>

          <FontAwesomeIcon className='c' icon={faGithub} size='2x' color='grey'/>
          <FontAwesomeIcon className='c' icon={faWhatsapp} size='2x' color='grey'/>
          <FontAwesomeIcon className='c' icon={faLinkedin} size='2x' color='grey'/>
          <FontAwesomeIcon className='c' icon={faXTwitter} size='2x' color='grey'/>
          <FontAwesomeIcon className='c' icon={faGoogle} size='2x' color='grey'/>

        </section>


      </header>

      <section className='dir'>

        <section id='sobre'>

          <br />

          <h3>Sobre</h3>

          <p className='prgrf'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when bran unknown printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem, <br /> aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero <br /> animi officia vero doloremque nostrum saepe. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when bran unknown printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem, <br /> aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero <br /> animi officia vero doloremque nostrum saepe.

          </p>

        </section>

        <section id='experiencias'>

          <br />

          <h3>Experiências</h3>

          <p className='prgrf'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when bran unknown printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem, <br /> aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero <br /> animi officia vero doloremque nostrum saepe. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when bran unknown printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem, <br /> aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero <br /> animi officia vero doloremque nostrum saepe.
          </p>

        </section>

        <section id='projetos'>

          <br />

          <h3>Projetos</h3>

          <p className='prgrf'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when bran unknown printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem, <br /> aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero <br /> animi officia vero doloremque nostrum saepe. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when bran unknown printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem, <br /> aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero <br /> animi officia vero doloremque nostrum saepe.
          </p>

        </section>

      </section>

    </div>

  );

}

export default InFlow;
