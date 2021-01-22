<script>
  export let challenger, time, date;
</script>

<li>
  <p>
    from: <a href="profile/{challenger}">{challenger}</a>&nbsp;&nbsp;&nbsp;on:
    <span class="time-date">{time}&nbsp;&nbsp;{date}</span>
  </p>
  <button>Decline</button>
  <button>Accept</button>
</li>
