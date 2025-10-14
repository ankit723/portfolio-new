import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Ankit Biswas - Full Stack Developer & Innovator',
  description = 'Ankit Biswas is an 18-year-old Full Stack Developer from India, specializing in React, Node.js, AI/ML, and modern web technologies. Founder of Tech Morphers with 4+ years of experience and 20+ projects delivered.',
  image = '/assets/ankit-biswas.jpg',
  url = 'https://ankitbiswas.dev',
  type = 'website',
  author = 'Ankit Biswas',
  keywords = 'Ankit Biswas, Full Stack Developer, Web Developer, React Developer, Node.js Developer, Tech Morphers, AI Developer, Machine Learning, Bhubaneshwar Developer, India Developer, Software Engineer'
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ankit Biswas',
    alternateName: 'AB',
    description: description,
    image: image,
    url: url,
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Tech Morphers',
      url: 'https://techmorphers.com'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'C.V. Raman Global University',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhubaneshwar',
        addressRegion: 'Odisha',
        addressCountry: 'India'
      }
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhubaneshwar',
      addressRegion: 'Odisha',
      addressCountry: 'India'
    },
    sameAs: [
      'https://github.com/ankitbiswas',
      'https://linkedin.com/in/ankitbiswas',
      'https://twitter.com/ankitbiswas'
    ],
    knowsAbout: [
      'Full Stack Development',
      'React',
      'Node.js',
      'Python',
      'Machine Learning',
      'Artificial Intelligence',
      'Web Development',
      'Mobile Development',
      'Cloud Computing',
      'DevOps'
    ],
    award: [
      'Conducted 2 web development bootcamps with 80-100 attendees',
      'Delivered 20+ real-world projects',
      'Founded Tech Morphers development studio'
    ]
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ankit Biswas - Portfolio',
    url: url,
    description: description,
    author: {
      '@type': 'Person',
      name: 'Ankit Biswas'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tech Morphers',
    url: 'https://techmorphers.com',
    logo: '/assets/tech-morphers-logo.png',
    founder: {
      '@type': 'Person',
      name: 'Ankit Biswas'
    },
    description: 'A development studio focused on building modern web and app solutions'
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Ankit Biswas - Full Stack Developer" />
      <meta property="og:site_name" content="Ankit Biswas Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ankitbiswas" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00d4ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
};

export default SEO;

