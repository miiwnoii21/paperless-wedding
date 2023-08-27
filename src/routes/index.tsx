import Counter from '~/components/Counter';
import Subtitle from '~/components/Subtitle';
import Headline from '~/components/Headline';
import Agenda from '~/components/Agenda';
import AdditionalDetail from '~/components/AdditionalDetail';
import Gallery from '~/components/Gallery';
import CelebrateToggle from '~/components/CelebrateToggle';

//function
export default function Home() {
  return (
    <main class="mx-auto md:h-screen">
      <Headline />
      <Subtitle text="#MiiwMengOnTheCloudNine" />
      <Agenda />
      <Gallery />
      <AdditionalDetail />
      <CelebrateToggle />
      {/* <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter text="home" />
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {' - '}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{' '}
      </p> */}
    </main>
  );
}
