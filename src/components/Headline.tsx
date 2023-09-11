import { useLocation } from 'solid-start';
import { Show } from 'solid-js';

export default function Headline() {
  const location = useLocation();
  const guest = location.hash.substring(1);
  return (
    <div class="grid grid-cols-5 text-white relative md:h-5/6 min-h-44 md:min-h-200">
      <div class="col-span-5 md:col-span-3 bg-[url('https://static.wixstatic.com/media/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg/v1/fill/w_592,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg')] bg-cover md:h-full h-96 relative bg-fixed">
        <div class="absolute inset-0 opacity-50 bg-slate-600"></div>
        <div class="relative pt-16 md:pt-32 md:pl-20">
          <Show when={guest != null && guest.length > 0}>
            <div class="text-left text-2xl pl-6 md:pl-0">Dear: {guest}</div>
          </Show>
          <div class="text-center md:text-left text-xl md:text-3xl pt-4 md:pt-12 pb-2 font-extralight">
            We are delighted to invite you to the marriage of
          </div>
          <div class="text-7xl hidden md:block py-2">Miiw &</div>
          <div class="text-7xl hidden md:block py-2">Meng</div>
          <div class="flex justify-center">
            <div class="text-center md:hidden text-4xl pt-2 md:pt-12 pb-2">
              Miiw & Meng
            </div>
          </div>

          <div class="text-center md:text-left text-xl py-2 md:pt-9 font-extralight">
            on Saturday, October 28, 2023
          </div>
        </div>
      </div>

      <div class="col-span-5 md:col-span-2 bg-[url('https://static.wixstatic.com/media/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg/v1/fill/w_592,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg')] bg-cover md:h-full h-72 bg-fixed"></div>
      <div class="absolute right-1/4 top-3/4 -translate-y-3/4 md:top-1/2 md:-translate-y-1/2">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
          <img src="/images/headline-img.jpeg" class="h-60 md:h-96"></img>
        </div>
      </div>
    </div>
  );
}
