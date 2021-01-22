<script>
  import NavItem from "./NavItem.svelte";

  let className;
  export { className as class };
  export let segment;

  let links = [
    { route: "about", label: "About" },
    { route: "vs", label: "VS" },
    { route: "pc-challenge", label: "PC Challenge" },
    { route: "replays", label: "Replays" },
    { route: "profile", label: "Members" },
  ];
</script>

<nav class={className}>
  <ul>
    <!-- TODO use aria-current instead of 'active' class -->
    {#each links as { route, label }}
      <NavItem {route} {label} active={segment === route} />
    {/each}
  </ul>
</nav>
