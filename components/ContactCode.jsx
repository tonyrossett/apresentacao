import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'nitinranganath.me',
  //   href: 'https://nitinranganath.me',
  // },
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
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
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
