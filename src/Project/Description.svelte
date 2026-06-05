<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<p>{@render children()}</p>

<style>
  p {
    margin: 0;
  }
</style>
