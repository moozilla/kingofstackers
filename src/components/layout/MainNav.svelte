<script>
  export let segment;
</script>

<nav class="main-nav">
  <ul>
    <!-- TODO use aria-current instead of 'active' class -->
    <li class={segment === "about" ? "active" : undefined}>
      <a href="about">About</a>
    </li>
    <li class={segment === "vs" ? "active" : undefined}>
      <a href="vs">Vs</a>
    </li>
    <li class={segment === "pc-challenge" ? "active" : undefined}>
      <a href="pc-challenge">PC Challenge</a>
    </li>
    <li class={segment === "replays" ? "active" : undefined}>
      <a href="replays">Replays</a>
    </li>
    <li class={segment === "profile" ? "active" : undefined}>
      <a href="profile">Members</a>
    </li>
  </ul>
</nav>
