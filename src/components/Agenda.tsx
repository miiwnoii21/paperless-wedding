export default function Agenda() {
  return (
    <div class="grid grid-cols-3 relative md:h-140 min-h-44 md:min-h-64 md:px-32 pt-0 md:pt-2.5 font-thai text-2xl bg-[#ecd2c4]">
      <div
        class="col-span-3 md:col-span-2 bg-[url('../../public/images/agenda-img.jpeg')] bg-cover h-60 md:h-120 md:w-200"
        data-aos="fade-down-right"
        data-aos-duration="3000"
      ></div>
      <div class="col-span-3 md:col-span-1 pl-10">
        <ol class="border-l-2 border-neutral-400 dark:border-neutral-500">
          <li class="group">
            <div class="flex-start flex items-center pt-6">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] group-hover:-ml-[8px] group-hover:h-[15px] group-hover:w-[15px] rounded-full bg-neutral-400 dark:bg-neutral-500 ring-offset-2 ring-2 transition-all"></div>
              <p class="text-neutral-600 dark:text-neutral-300">8:29 AM</p>
            </div>
            <div class="mb-6 ml-4 mt-2">
              <h4 class="mb-1.5 font-semibold">พิธีแห่ขันหมาก</h4>
            </div>
          </li>
          <li class="group">
            <div class="flex-start flex items-center pt-2">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] group-hover:-ml-[8px] group-hover:h-[15px] group-hover:w-[15px] rounded-full bg-neutral-400 dark:bg-neutral-500 ring-offset-2 ring-2 transition-all"></div>
              <p class="text-neutral-600 dark:text-neutral-300">9:09 AM</p>
            </div>
            <div class="mb-6 ml-4 mt-2">
              <h4 class="mb-1.5 font-semibold">พิธีหมั้น และรับไหว้</h4>
            </div>
          </li>
          <li class="group">
            <div class="flex-start flex items-center pt-2">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] group-hover:-ml-[8px] group-hover:h-[15px] group-hover:w-[15px] rounded-full bg-neutral-400 dark:bg-neutral-500 ring-offset-2 ring-2 transition-all"></div>
              <p class="text-neutral-600 dark:text-neutral-300">10.00 AM</p>
            </div>
            <div class="ml-4 mt-2 pb-5">
              <h4 class="mb-1.5 font-semibold">พิธีหลั่งน้ำพระพุทธมนต์</h4>
            </div>
          </li>
          <li class="group">
            <div class="flex-start flex items-center pt-2">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] group-hover:-ml-[8px] group-hover:h-[15px] group-hover:w-[15px] rounded-full bg-neutral-400 dark:bg-neutral-500 ring-offset-2 ring-2 transition-all"></div>
              <p class="text-neutral-600 dark:text-neutral-300">11.00 AM</p>
            </div>
            <div class="ml-4 mt-2 pb-2">
              <h4 class="mb-1.5 font-semibold">ฉลองมงคลสมรส(โต๊ะจีน)</h4>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
