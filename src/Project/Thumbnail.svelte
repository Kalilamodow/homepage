<script lang="ts">
  import { fade } from "svelte/transition";
  import { getHoverContext } from "./context";

  type Props = {
    src: string;
  };

  let { src }: Props = $props();

  let hoverContext = getHoverContext();
</script>

{#if hoverContext.hovering}
  <img transition:fade={{ duration: 300 }} {src} alt="Project thumbnail" />
{/if}

<style>
  img {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    object-position: left center;

    z-index: -1;
    mask-image: linear-gradient(to left, #fac8, transparent);

    opacity: 80%;
  }
</style>
