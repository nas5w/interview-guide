<template>
  <div class="tip custom-block" style="margin: 3rem 0; padding: 1.5rem 1rem">
    <h3 style="margin: 0px 0px 1rem">💌 Subscribe to the newsletter!</h3>
    <p>
      I'm beyond excited to announce the launch of the InterviewGuide.dev
      Newsletter. In this free newsletter, I'll be sharing:
    </p>
    <ul>
      <li>Additional interview tips</li>
      <li>Curated jobs + other opportunities to land tech jobs</li>
      <li>Ways to get feedback from me directly</li>
    </ul>

    <p>No spam. Unsubscribe any time. Sound good?</p>

    <form
      action="https://tinyletter.com/interviewguide"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/interviewguide', 'popupwindow', 'scrollbars=yes,width=800 height=600');return true"
    >
      <p><label for="tlemail">Email address</label></p>
      <p>
        <input
          type="email"
          style="
            width: 20rem;
            max-width: 100%;
            border: 1px solid var(--vp-custom-block-tip-text);
            padding: 5px;
            font-size: 1.2rem;
          "
          name="email"
          id="tlemail"
          required
        />
      </p>
      <input type="hidden" value="1" name="embed" />
      <input
        style="
          display: block;
          border: 1px solid var(--vp-custom-block-tip-text);
          padding: 5px 20px;
          border-radius: 2rem;
          margin-top: 1rem;
          text-decoration: none;
          padding: 5px;
          font-size: 1rem;
        "
        type="submit"
        value=" Sign me up "
      />
    </form>
  </div>
</template>
