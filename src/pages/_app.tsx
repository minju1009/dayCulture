
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import 'styles/globalStyle.css'

import Head from 'next/head';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
 

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Head>
            <title>MyCulture</title>
          </Head>
          <Layout>          
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
