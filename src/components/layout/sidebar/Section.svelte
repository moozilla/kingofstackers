<script>
  let className;
  export { className as class };
  export let label;
</script>

<!-- <section class="collapsed"> -->
<section class={className}>
  <h3 class="icon-left-chevron">{label}</h3>
  <slot />
</section>
