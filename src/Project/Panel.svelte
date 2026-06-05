<script lang="ts">
  import type { Snippet } from "svelte";

  import { setHoverContext } from "./context";

  type Props = {
    children: Snippet;
    link: string;
  };

  let { children, link }: Props = $props();

  let isHovering = $state({ hovering: false });
  // svelte-ignore state_referenced_locally
  setHoverContext(isHovering);
</script>

<a
  class="project-panel"
  href={link}
  onmouseenter={() => (isHovering.hovering = true)}
  onmouseleave={() => (isHovering.hovering = false)}
>
  {@render children()}
</a>

<style>
  a.project-panel {
    background-image: none;
    background-clip: unset;
    -webkit-text-fill-color: unset;

    background-color: #fff1;
    border: 1px solid var(--border-muted);
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 16px;

    text-decoration: none;
    color: var(--foreground-primary);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow: clip;

    box-shadow: 0 0 16px 2px #0002;
    transition:
      transform 150ms,
      background-color 250ms,
      filter 250ms,
      box-shadow 250ms,
      border-color 150ms;
  }

  a.project-panel:hover {
    transform: translateY(-1px);
    background-color: #e8a2;
    box-shadow: 0 0 16px 2px #e8a2;
    filter: brightness(115%);
    border-color: var(--border-muted-more);
  }
</style>
