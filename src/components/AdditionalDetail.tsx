export default function AdditionalDetail() {
  return (
    <div class="grid grid-cols-3 pt-10 pb-20 md:px-32 px-5">
      <div class="col-span-3 md:col-span-2">
        <div class="text-2xl md:text-3xl">Location</div>
        <div class="pt-3 pb-6 font-thai text-2xl md:text-2xl">
          A' gave gala พุทธมณฑลสาย 2, กรุงเทพฯ
        </div>
        <a
          href="https://www.google.com/maps/place/A+gave+gala/@13.7716766,100.4007258,17z/data=!3m1!4b1!4m6!3m5!1s0x30e291d974bf5c07:0x52692e9b54a84136!8m2!3d13.7716766!4d100.4029145!16s%2Fg%2F11t8dmy00f"
          class="button rounded-full border-2 p-3 border-terracotta-600 bg-bg-terracotta-50 text-terracotta-600 transition
          hover:bg-terracotta-600 hover:text-terracotta-50"
          target="_blank"
        >
          Open on map
        </a>
      </div>
      <div class="col-span-3 md:col-span-1 md:h-64 h-44 py-10 md:pt-0">
        <div class="text-2xl md:text-3xl">Wedding Colors</div>
        <div class="md:py-6">
          <div class="rounded-full h-8 w-8 bg-[#D5B690] inline-block m-1.5"></div>
          <div class="rounded-full h-8 w-8 bg-[#D7D98A] inline-block m-1.5"></div>
          <div class="rounded-full h-8 w-8 bg-[#D3DCBC] inline-block m-1.5"></div>
          <div class="rounded-full h-8 w-8 bg-[#ECD6CE] inline-block m-1.5"></div>
          <div class="rounded-full h-8 w-8 bg-[#CD8A6E] inline-block m-1.5"></div>
          <div class="rounded-full h-8 w-8 bg-[#F89372] inline-block m-1.5"></div>
        </div>
      </div>
    </div>
  );
}
