export default function Gallery() {
  return (
    <div
      class=" md:px-32 py-10 md:py-20 font-thai bg-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div class="grid grid-cols-3 gap-3 relative">
        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100">
          <div class="col-span-3 md:col-span-1 h-80 md:h-116 hover:scale-[1.05] ease-in duration-500 bg-[url('../../public/images/gallery-04.jpeg')] bg-cover my-0.5 md:m-1"></div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="500">
          <div class="col-span-3 md:col-span-1 h-80 md:h-116 hover:scale-[1.05] ease-in duration-500 bg-[url('../../public/images/gallery-05.jpeg')] bg-cover my-0.5 md:m-1"></div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
          <div class="col-span-3 md:col-span-1 h-80 md:h-116 hover:scale-[1.05] ease-in duration-500 bg-[url('../../public/images/gallery-06.jpeg')] bg-cover my-0.5 md:m-1"></div>
        </div>
      </div>
      <div class="text-4xl pt-10 px-10 md:px-0 md:text-right">
        "คนนี้แหละค่ะ ผู้ชายที่ทำให้ไม่ต้องไปดูดวงอีกเลย ;P"
      </div>
    </div>
  );
}
