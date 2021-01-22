<script>
  import Nav from "./nav/Nav.svelte";
  export let segment, mainNavLinks, userNavLinks;
</script>

<header>
  <div class="frame">
    <Nav {segment} links={mainNavLinks} class="mobile-nav" />

    <div class="logo" title="King of Stackers">
      <h1><a href="/">King of Stackers</a></h1>
    </div>

    <button class="toggle-mobile-nav"><span /></button>

    <Nav {segment} links={userNavLinks} class="user-nav" />
  </div>
</header>
