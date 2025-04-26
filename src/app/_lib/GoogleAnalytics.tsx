import Script from 'next/script';

const GoogleAnalytics = () => {
  const Id = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js
				?id=${Id}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${Id}');
		`,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
