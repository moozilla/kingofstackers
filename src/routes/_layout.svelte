<script>
  import Nav from "../components/layout/nav/Nav.svelte";
  import Header from "../components/layout/Header.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import Sidebar from "../components/layout/sidebar/Sidebar.svelte";

  let mainNavLinks = [
    { route: "about", label: "About" },
    { route: "vs", label: "VS" },
    { route: "pc-challenge", label: "PC Challenge" },
    { route: "replays", label: "Replays" },
    { route: "profile", label: "Members" },
  ];
  let userNavLinks = [
    { route: "login", label: "Login" },
    { route: "sign-up", label: "Sign Up" },
  ];
  let footerLinks = [
    { route: "discord", label: "Discord" },
    { route: "support", label: "Support" },
  ];

  export let segment;
</script>

<div class="wrapper">
  <Header {segment} {mainNavLinks} {userNavLinks} />

  <!-- <div class="content"> -->
  <div class="content show-sidebar">
    <div class="frame">
      <!-- TODO: rearrange so this can go in Header component -->
      <Nav {segment} links={mainNavLinks} class="main-nav" />
      <!-- TODO: make this a <main> tag? -->
      <div class="page-content homepage">
        <slot />
      </div>
    </div>

    <Sidebar />
  </div>

  <div class="push clear" />
</div>

<Footer {segment} links={footerLinks} />
