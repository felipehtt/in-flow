import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faLinkedin, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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

         
          <a href="https://github.com/InflowWeb"><FontAwesomeIcon className='c' icon={faGithub} size='2x' color='grey'/></a> 
          <a href=""><FontAwesomeIcon className='c' icon={faWhatsapp} size='2x' color='grey'/></a>
          <a href=""><FontAwesomeIcon className='c' icon={faLinkedin} size='2x' color='grey'/> </a>
          <a href="https://x.com/inflowweb?t=rGZgGyroh4F9w5GuHm9tkw&s=09"><FontAwesomeIcon className='c' icon={faXTwitter} size='2x' color='grey'/></a>
          <a href="mailto:inflowwebcompany@gmail.com"><FontAwesomeIcon className='c' icon={faGoogle} size='2x' color='grey'/></a> 

        </section>


      </header>

      <section className='dir'>

        <section className='text' id='sobre'>

          <br />

          <h3>Sobre</h3>

          <p className='prgrf'>
          A In-flow é uma empresa de desenvolvimento web composta por quatro integrantes: Matheus Souza Moreira dos Santos é responsável por conceituar e aplicar a parte visual do site, visando à experiência do usuário.

Acompanhado por Matheus, Felipe Soares de Oliveira atua como desenvolvedor Full-Stack, auxiliando tanto na parte visual quanto em relação aos dados do cliente.

Guilherme Raphael de Jesus Pianoski opera no banco de dados, garantindo a organização e a privacidade das informações. Ele também é responsável por implementar funções para o website.

Por fim, Davi Cirqueira Nascimento é um desenvolvedor web Full-Stack. Ele participa da experiência do usuário e cuida da segurança dos dados, tornando assim o site um lugar agradável e seguro para todos. 


          </p>

        </section>

        <section className='text' id='experiencias'>

          <br />

          <h3>Experiências</h3>

          <p className='prgrf'>

          Na In-flow, acumulamos uma vasta experiência no desenvolvimento de soluções tecnológicas inovadoras que atendem às necessidades de nossos clientes. Trabalhamos em projetos variados, desde a criação de sites responsivos até o desenvolvimento de aplicações web complexas. Nossa equipe tem experiência em tecnologias como React, Node.js e bancos de dados SQL e NoSQL, o que nos permite entregar soluções personalizadas e escaláveis. Além disso, temos um forte compromisso com a experiência do usuário, realizando testes constantes e coletando feedback para aprimorar nossos produtos. Essa abordagem nos permitiu estabelecer parcerias duradouras e conquistar a confiança de empresas de diferentes setores.
          </p>

        </section>

        <section className='text' id='projetos'>

          <br />

          <h3>Projetos</h3>

          <p className='prgrf'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when bran unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem,  aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero  animi officia vero doloremque nostrum saepe. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when bran unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam quisquam, commodi pariatur quis debitis quidem,  aspernatur quae ducimus recusandae fugiat autem reprehenderit, libero animi officia vero doloremque nostrum saepe.
          </p>

        </section>

      </section>

    </div>

  );

}

export default InFlow;
