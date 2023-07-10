import { Html, Head, Main, NextScript } from 'next/document';
import * as process from 'process';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src="./index.js"></script>
        <script
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&callback=initMap`}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
