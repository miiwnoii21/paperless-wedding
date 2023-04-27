export default function Headline() {
  return (
    <div class="grid grid-cols-5 text-white relative md:h-5/6 min-h-44 md:min-h-200">
      <div class="col-span-5 md:col-span-3 bg-[url('https://static.wixstatic.com/media/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg/v1/fill/w_592,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg')] bg-cover md:h-full h-72 relative bg-fixed">
        <div class="absolute inset-0 opacity-50 bg-slate-600"></div>
        <div class="relative pt-16 md:pt-32 md:pl-20">
          <div class="text-7xl hidden md:block py-2">Miiw &</div>
          <div class="text-7xl hidden md:block py-2">Meng</div>
          <div class="flex justify-center">
            <div class="text-center md:hidden text-4xl pt-2 md:pt-12 pb-2">
              Miiw & Meng
            </div>
          </div>
          <div class="text-center md:text-left text-2xl md:text-3xl pt-2 md:pt-12 pb-2">
            We're getting married
          </div>
          <div class="text-center md:text-left text-xl py-2 font-extralight">
            Saturday, October 28, 2023
          </div>
        </div>
      </div>

      <div class="col-span-5 md:col-span-2 bg-[url('https://static.wixstatic.com/media/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg/v1/fill/w_592,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg')] bg-cover md:h-full h-96 bg-fixed"></div>
      <div class="absolute right-1/4 top-1/2 -translate-y-1/2">
        <img
          src="../../static/images/headline-img.jpeg"
          class="h-60 md:h-96"
        ></img>
      </div>
    </div>
  );
}
