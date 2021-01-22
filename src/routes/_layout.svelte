<script>
  import Nav from "../components/layout/nav/Nav.svelte";

  // used for copyright, TODO: move to footer component
  let date = new Date();
  let currentYear = date.getFullYear();

  export let segment;
</script>

<div class="wrapper">
  <header>
    <div class="frame">
      <Nav {segment} class="mobile-nav" />

      <div class="logo" title="King of Stackers">
        <h1><a href="/">King of Stackers</a></h1>
      </div>

      <button class="toggle-mobile-nav"><span /></button>

      <nav class="user-nav">
        <ul>
          <li><a href="login">Login</a></li>
          <li><a href="sign-up">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="content">
    <div class="frame">
      <Nav {segment} class="main-nav" />

      <!-- TODO: make this a <main> tag? -->
      <div class="page-content homepage">
        <slot />
      </div>
    </div>

    <aside class="sidebar" />
  </div>

  <div class="push clear" />
</div>

<footer>
  <div class="frame">
    <nav class="footer-nav">
      <ul>
        <li><a href="footer-link">IRC</a></li>
        <li><a href="footer-link">Forum</a></li>
        <li><a href="footer-link">Support</a></li>
      </ul>
    </nav>
    <div class="copyright toggle-dark-theme">
      &copy; {currentYear} King of Stackers. All Rights Reserved.
      <br />
      <ul>
        <li><a href="legal">Terms & Conditions</a></li>
        <li><a href="legal">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</footer>
