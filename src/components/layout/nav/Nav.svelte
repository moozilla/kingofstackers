<script>
  import NavItem from "./NavItem.svelte";

  let className;
  export { className as class };
  export let segment, links;
</script>

<nav class={className}>
  <ul>
    <!-- TODO use aria-current instead of 'active' class -->
    {#each links as { route, label }}
      <NavItem {route} {label} active={segment === route} />
    {/each}
  </ul>
</nav>
