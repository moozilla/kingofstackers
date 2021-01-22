<script>
  // if from isn't set, message is from the logged in user
  export let from, message, time;
</script>

<p class={from ? "from-opponent" : "from-user"}>
  <span class="message">{message}</span>
  <span class="time">
    {#if from}{from} — {/if}
    {time}
  </span>
</p>
