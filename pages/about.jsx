import styles from '../styles/AboutPage.module.css';


const AboutPage = () => {
  return (
    <>
      <h3 className={styles.title}><span className={styles.tagColor}>{"<h3>"}</span>Um pouco mais de mim<span className={styles.tagColor}>{"</h3>"}</span></h3>
      
      <p className={styles.textLine1}><span className={styles.tagColor}>{"<p>"}</span>
        Trabalho com tecnologia tem muito tempo e sempre gostei de fazer as coisas funcionarem, me traz uma sensação de Missão cumprida. Desenvolver páginas e sistemas funcionais traz muito mais satisfação, motivando a buscar e fazer sempre o melhor possível.<span className={styles.tagColor}>{"</p>"}</span>
      </p>

      <p className={styles.textLine2}><span className={styles.tagColor}>{"<p>"}</span>
        Trabalhar com desenvolvimento significa atualização constante. Cuidado com os detalhes, sempre atento com a qualidade, entendendo as necessidades do cliente e suprindo cada uma delas. Isso faz parte da arte do desenvolvimento.<span className={styles.tagColor}>{"</p>"}</span>
      </p>

    

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Sobre' },
  };
}

export default AboutPage;
