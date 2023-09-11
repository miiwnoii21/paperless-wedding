import { createSignal } from 'solid-js';
import '../celebrate-toggle.css';

export default function CelebrateToggle() {
  const [isCelebrate, setCelebrate] = createSignal(false);
  console.log('DisplayFailling');

  return (
    <div class="fixed top-2 right-2">
      <div class="p-2 rounded bg-rose-50 bg-opacity-75">
        <label
          for="celebrate-toggle"
          class="flex items-center cursor-pointer font-thai"
        >
          <div class="relative">
            <input
              type="checkbox"
              id="celebrate-toggle"
              class={isCelebrate() ? 'sr-only' : 'sr-only unchecked'}
              onChange={(e) => {
                setCelebrate(!isCelebrate());
              }}
            />
            <div class="block bg-[#CD8A6E] w-8 h-5 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
          </div>
          <div class="ml-3 text-2xl">Celebrate with us</div>
        </label>
      </div>
      {isCelebrate() && (
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">♡</div>
          <div class="snowflake">❀</div>
          <div class="snowflake">✧</div>
          <div class="snowflake">ꕤ</div>
          <div class="snowflake">✿</div>
          <div class="snowflake">❀</div>
          <div class="snowflake">✧</div>
          <div class="snowflake">❀</div>
          <div class="snowflake">✿</div>
          <div class="snowflake">♡</div>
        </div>
      )}
    </div>
  );
}
