<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<h4>{@render children()}</h4>

<style>
  h4 {
    background-image: linear-gradient(45deg, #e6a, #fac);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;

    margin: 0;
  }
</style>
