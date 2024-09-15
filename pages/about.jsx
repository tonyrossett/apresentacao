import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <h3 className={styles.title}>Um pouco mais de mim</h3>
      <p className={styles.textLine1}>
        Trabalho com tecnologia tem muito tempo e sempre gostei de fazer as coisas funcionarem, me traz uma sensação de "Missão cumprida". Desenvolver páginas e sistemas funcionais traz muito mais satisfação, motivando a buscar e fazer sempre o melhor possível.
      </p>

      <p className={styles.textLine2}>
        Trabalhar com desenvolvimento significa atualização constante. Cuidado com os detalhes, sempre atento com a qualidade, entendendo as necessidades do cliente e suprindo cada uma delas. Isso faz parte da arte do desenvolvimento.
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
