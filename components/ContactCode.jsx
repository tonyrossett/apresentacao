import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'whatsapp',
    link: 'Envie uma mensagem',
    href: 'https://wa.me//5511989858447?text=Cheguei%20através%20do%20seu%20portfolio',
  },
  {
    social: 'email',
    link: 'tonyrossett@hotmail.com',
    href: 'mailto:tonyrossett@hotmail.com',
  },
  {
    social: 'github',
    link: 'tonyrossett',
    href: 'https://github.com/tonyrossett',
  },
  {
    social: 'linkedin',
    link: 'tonyrossett',
    href: 'https://www.linkedin.com/in/tonyrossett/',
  },
  {
    social: 'instagram',
    link: 'tonyrossett',
    href: 'https://www.instagram.com/tonyrossett',
  },
    {
    social: 'telegram',
    link: 'tonyrossett',
    href: 'https://t.me/tonyrossett',
  },
  {
    social: 'codepen',
    link: 'tonyrossett',
    href: 'https://codepen.io/tonyrossett',
  },
 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
