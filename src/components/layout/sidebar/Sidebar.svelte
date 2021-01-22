<script>
  import Section from "./Section.svelte";
  import ChatMessage from "./ChatMessage.svelte";
  import Challenge from "./Challenge.svelte";

  // example data, would come from API
  let chatMessages = [
    {
      message:
        "Woah, I wasn't expecting that — I thought I had you this time. Good game!",
      time: "12:27 PM",
    },
    {
      from: "YaoHe",
      message:
        "Yeah, I really got lucky with that last combination. You played well — maybe next time. :)",
      time: "12:48 PM",
    },
    {
      message: "Yeah, next time! ;)",
      time: "12:49 PM",
    },
  ];
  let challenges = [
    {
      challenger: "FieryLight",
      // TODO: make this a standard format timestamp
      time: "6:28pm",
      date: "Aug 27, 2015",
    },
    {
      challenger: "YaoHe",
      time: "3:07pm",
      date: "Jul 14, 2015",
    },
    {
      challenger: "pwn",
      time: "4:20pm",
      date: "Jan 22, 2021",
    },
  ];
</script>

<aside class="sidebar">
  <button class="toggle-sidebar icon-left-chevron" />
  <button class="toggle-mobile icon-close"><h4>Close</h4></button>

  <Section label="Chat" class="chat">
    {#each chatMessages as message}
      <ChatMessage {...message} />
    {/each}

    <form name="message" class="message" action="">
      <input name="user-message" type="text" class="user-message" size="150" />
      <input
        name="submit-message"
        type="submit"
        class="submit-message"
        value="Send"
      />
    </form>
  </Section>
  <Section label="Challenges">
    <ul>
      {#each challenges as challenge}
        <Challenge {...challenge} />
      {/each}
    </ul>
  </Section>
  <Section label="Recent Games" />
  <Section label="Active Members" />
</aside>
