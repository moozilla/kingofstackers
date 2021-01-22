<script>
  import Nav from "./nav/Nav.svelte";
  export let segment, links;

  let date = new Date();
  let currentYear = date.getFullYear();
</script>

<footer>
  <div class="frame">
    <Nav {segment} {links} class="footer-nav" />
    <div class="copyright toggle-dark-theme">
      &copy; {currentYear} King of Stackers. All Rights Reserved.
      <br />
      <!-- TODO: convert to nav component? -->
      <ul>
        <li><a href="legal">Terms & Conditions</a></li>
        <li><a href="legal">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</footer>
