// @refresh reload
import { onMount, Suspense } from 'solid-js';
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './root.css';

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? 'border-terracotta-600'
      : 'border-transparent hover:border-terracotta-600';

  onMount(() => {
    AOS.init();
  });

  return (
    <Html lang="en" class="bg-terracotta-50 text-terracotta-600">
      <Head>
        <Title>#MiiwMengOnTheCloudNine</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {/* <nav class="bg-terracotta-50">
              <ul class="container flex items-center p-3 text-terracotta-500">
                <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                  <A href="/">Home</A>
                </li>
                <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
                  <A href="/about">About</A>
                </li>
              </ul>
            </nav> */}
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
