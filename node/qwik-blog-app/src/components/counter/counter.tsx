import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <button class="counter" type="button" onClick$={() => count.value++}>
      Increment {count.value}
    </button>
  );
});
