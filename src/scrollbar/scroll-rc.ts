import { writable } from "svelte/store";

const scrollRc = writable(0);
scrollRc.subscribe((rc) => {
  if (rc > 0) {
    document.body.classList.add("scrolling");
  } else {
    document.body.classList.remove("scrolling");
  }
});

export function captureScroll() {
  scrollRc.update((rc) => rc + 1);
}

export function releaseScroll() {
  scrollRc.update((rc) => rc - 1);
}
