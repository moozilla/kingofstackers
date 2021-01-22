<script>
  export let route,
    label,
    active = false;
</script>

<li class:active>
  <a href={route}>{label}</a>
</li>
