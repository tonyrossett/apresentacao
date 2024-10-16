import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tony Rossett desenvolve sites funcionais e responsivos com tecnologia moderna e confiável."
      />
      <meta
        name="keywords"
        content="tony rossett, rossett, , web developer portfolio, desenvolvedor web, portfolio do tony rossett, portfolio do vscode"
      />
      <meta property="og:title" content="Portfolio de Tony Rossett" />
      <meta
        property="og:description"
        content="Um desenvolvedor de sites funcionais e responsivos."
      />
      <meta property="og:image" content="https://i.imgur.com/V9Ye2BI.png" />
      <meta property="og:url" content="https://apresentacao-theta.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Tony Rossett',
};
