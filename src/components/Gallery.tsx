export default function Gallery() {
  return (
    <div class=" md:px-32 py-10 md:py-20 font-thai bg-white">
      <div class="grid grid-cols-3 relative">
        <div class="col-span-3 md:col-span-1 h-80 md:h-116 bg-[url('../../public/images/agenda-img.jpeg')] bg-cover my-0.5 md:m-1"></div>
        <div class="col-span-3 md:col-span-1 h-80 md:h-116 bg-[url('../../public/images/agenda-img.jpeg')] bg-cover my-0.5 md:m-1"></div>
        <div class="col-span-3 md:col-span-1 h-80 md:h-116 bg-[url('../../public/images/agenda-img.jpeg')] bg-cover my-0.5 md:m-1"></div>
      </div>
      <div class="text-4xl pt-10 px-10 md:px-0 md:text-right">
        "คนนี้แหละค่ะ ผู้ชายที่ทำให้ไม่ต้องไปดูดวงอีกเลย ;P"
      </div>
    </div>
  );
}
