import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#790003" />
        <meta name="msapplication-TileColor" content="#790003" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="preload" as="image" href="/images/interior-hero.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Keep hidden forms in static markup for Netlify/Zapier form detection */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="address" />
          <textarea name="message"></textarea>
        </form>

        <form
          name="schedule"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="address" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </Html>
  );
}
