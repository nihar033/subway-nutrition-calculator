
import React from 'react';
import { Helmet } from 'react-helmet';

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}

const BlogPostSchema = ({ 
  title, 
  description, 
  url, 
  datePublished, 
  dateModified, 
  authorName = "Subway Nutrition Calculator Team" 
}: BlogPostSchemaProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://subway-nutrition-calculator.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Subway Nutrition Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://subway-nutrition-calculator.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": [
      "low calorie subway sandwiches",
      "healthy subway options",
      "subway weight loss",
      "subway nutrition",
      "subway calories",
      "healthy fast food"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://subway-nutrition-calculator.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://subway-nutrition-calculator.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": url
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="low calorie subway sandwiches, healthy subway options, subway weight loss, subway nutrition, subway calories" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
