<script lang="ts">
  import Footer from "./Footer.svelte";
  import * as Project from "./Project";
  import Scrollbar from "./scrollbar/Scrollbar.svelte";
</script>

<svelte:head>
  <title>kmdw.dev</title>
</svelte:head>

<main>
  <h1>Welcome to kmdw.dev!</h1>
  <p>
    This is my personal server. Most of my frontend-only projects live here for
    the world to see, but only a few of the ones with backends are public.
  </p>
  <h2>Projects</h2>
  <h3>Fullstack</h3>

  <Project.Panel link="https://pbb.kmdw.dev/">
    <Project.Title>pbb</Project.Title>
    <Project.Description>
      Create and edit "billboards" in realtime with friends.
    </Project.Description>

    <Project.Thumbnail src="/thumbnails/pbb.jpg" />
  </Project.Panel>

  <Project.Panel link="https://mqm.kmdw.dev/">
    <Project.Title>Mapquizmaker</Project.Title>
    <Project.Description>
      Create maps and quiz yourself on them. You can also upload them to share
      them with friends.
    </Project.Description>
    <Project.Thumbnail src="/thumbnails/mqm.jpg" />
  </Project.Panel>

  <h3>Static</h3>

  <Project.Panel link="https://s.kmdw.dev/tracing/">
    <Project.Title>Tracing</Project.Title>
    <Project.Description>
      Load images to trace for art practice.
    </Project.Description>
    <Project.Thumbnail src="/thumbnails/tracing.jpg" />
  </Project.Panel>

  <Project.Panel link="https://s.kmdw.dev/slope/">
    <Project.Title>Slope mirror</Project.Title>
    <Project.Description>Ad-free Slope 1.2.4 mirror.</Project.Description>
    <Project.Thumbnail src="/thumbnails/slope.jpg" />
  </Project.Panel>

  <Project.Panel link="https://s.kmdw.dev/ttbls/">
    <Project.Title>TTBLS</Project.Title>
    <Project.Description>Times tables learning tool.</Project.Description>
    <Project.Thumbnail src="/thumbnails/ttbls.jpg" />
  </Project.Panel>

  <Project.Panel link="https://s.kmdw.dev/robo-sched/">
    <Project.Title>robo sched</Project.Title>
    <Project.Description>Small week-long calendar creator.</Project.Description>
    <Project.Thumbnail src="/thumbnails/robosched.jpg" />
  </Project.Panel>

  <Project.Panel link="https://s.kmdw.dev/codeeditor/">
    <Project.Title>code editor</Project.Title>
    <Project.Description>
      A simple code editor for TypeScript built with Shiki with basic tabbed
      editing and syntax highlighting.
    </Project.Description>
    <Project.Thumbnail src="/thumbnails/codeeditor.jpg" />
  </Project.Panel>

  <Project.Panel link="https://s.kmdw.dev/cornellnotes/">
    <Project.Title>Cornell Notes Maker</Project.Title>
    <Project.Description>
      An app for making cornell notes for school.
    </Project.Description>
    <Project.Thumbnail src="/thumbnails/cornellnotes.jpg" />
  </Project.Panel>

  <Project.Panel link="https://s.kmdw.dev/time/">
    <Project.Title>Clock</Project.Title>
    <Project.Description>A digital clock.</Project.Description>
    <Project.Thumbnail src="/thumbnails/time.jpg" />
  </Project.Panel>

  <p>
    You can check out my
    <a href="https://github.com/Kalilamodow">GitHub</a> for more projects.
  </p>
  <h2>About me</h2>
  <p>
    I am a fullstack web dev, mainly with Python on the backend. I enjoy using
    Svelte on the frontend.
  </p>
  <p>
    I am on FRC team 4778 (where I am the programming lead) and FTC team 9415.
    <a href="https://chanrobotics.org/">https://chanrobotics.org/</a>
  </p>
  <p>
    I would like to get into more low-level programming in the future, and so
    far I have done a little bit of C/C++.
  </p>
  <p>
    You can contact me at kalilamodow@gmail.com or kmdw on Discord. Have a nice
    day!
  </p>

  <Footer />

  <Scrollbar />
</main>

<style>
  main {
    position: relative;

    backdrop-filter: blur(var(--blur-amount));
    background-color: var(--main-bg);
    border: 1px solid var(--border-main);
    border-radius: 24px;
    width: clamp(0px, 80vw, 600px);
    height: clamp(0px, 90svh, 800px);

    padding: 16px 32px;
    color: var(--foreground-primary);

    overflow-y: scroll;
    scrollbar-width: none;
  }
</style>
