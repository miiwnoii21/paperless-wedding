export default function Display() {
  return (
    <div class="grid grid-cols-5 text-terracotta-600 relative md:h-5/6">
      <div class="col-span-5 md:col-span-3 font-josef-in-sans">
        <div>Miiw &</div>
        <div>Meng</div>
        <div>We're getting married</div>
        <div>Saturday, October 28, 2023</div>
      </div>

      <div class="col-span-5 md:col-span-2 bg-[url('https://static.wixstatic.com/media/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg/v1/fill/w_592,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_37a6262eeb2e45c88f75a5b79ffeec9a~mv2.jpg')] bg-cover md:h-full">
        2
      </div>
      <div class="absolute right-1/4 top-1/2 -translate-y-1/2">
        <img
          src="../../static/images/headline-img.jpeg"
          class="h-60 md:h-96"
        ></img>
      </div>
    </div>
  );
}
