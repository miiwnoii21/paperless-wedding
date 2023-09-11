export default function NotFound() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl uppercase my-16">Not Found</h1>
      <p class="my-8 text-4xl font-thai">
        ไม่พบหน้าที่ต้องการ พบแต่หน้าเจ้าสาวคร้าบบบบ
      </p>
      <img src="/images/error-img.jpg" class="mx-auto h-60 md:h-96"></img>
      <a
        href="/"
        class="inline-block button rounded-full border-2 m-8 p-3 border-terracotta-600 bg-bg-terracotta-50 text-terracotta-600 transition
          hover:bg-terracotta-600 hover:text-terracotta-50"
      >
        Home page
      </a>
    </main>
  );
}
