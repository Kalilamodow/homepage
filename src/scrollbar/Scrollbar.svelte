<script lang="ts">
  import { captureScroll, releaseScroll } from "./scroll-rc";

  const SCROLLBAR_OFFSET = 16;
  const inPx = (num: number) => `${num}px`;

  let element = $state<HTMLElement>();
  let container = $derived(element?.parentElement);

  const reposition = () => {
    if (!(element && container)) return;

    const trackHeight = container.scrollHeight;
    const viewHeight = container.clientHeight;
    const scrollbarHeight = (viewHeight / trackHeight) * viewHeight;

    element.style.height = inPx(scrollbarHeight - SCROLLBAR_OFFSET * 2);

    const handleOffset = (container.scrollTop / trackHeight) * viewHeight;
    element.style.top = inPx(container.scrollTop + handleOffset + SCROLLBAR_OFFSET);
  };

  // setup stuff
  $effect(() => {
    if (!(element && container)) return;

    reposition();
    container.addEventListener("scroll", reposition);

    let isDragging = false;
    element.addEventListener("pointerdown", () => {
      isDragging = true;
      captureScroll();
    });

    window.addEventListener("pointermove", (evt) => {
      if (!isDragging) return;
      const ratio = container.scrollHeight / container.clientHeight;
      container.scrollTop += evt.movementY * ratio;
    });

    window.addEventListener("pointerup", () => {
      if (!isDragging) return;

      isDragging = false;
      releaseScroll();
    });

    const resizeObserver = new ResizeObserver(() => reposition());
    resizeObserver.observe(container);
    window.addEventListener("resize", () => reposition());
  });
</script>

<div id="scrollbar" bind:this={element}></div>

<style>
  #scrollbar {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 16px;
    width: 8px;
    height: 32px;
    background-image: linear-gradient(45deg, #e6a, #fac);
    border-radius: 24px;
    touch-action: none;

    opacity: 30%;
    transition: opacity 150ms;
  }

  #scrollbar:hover {
    opacity: 80%;
  }
</style>
