/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO FILL YOUR PORTFOLIO.
   See guide.html for a step-by-step explanation.
   ============================================================ */

window.SITE = {
  name: "Guillem Martínez Aparicio",
  tagline: "Programmer and Designer striving to specialise in cinematics.",
  about: "Play and responsibility are two sides of the same coin.\nFinding or creating an environment where both are integrated is always my ultimate goal.",
  email: "guillem.ma.dev@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/GuillemDev" },
    { label: "LinkedIn", url: "https://linkedin.com/in/guillem-martinez-aparicio" },
    { label: "itch.io", url: "https://guillemdev.itch.io" }
  ]
};

/* Each project ("module") has: title, subtitle, description, media,
   and optionally link. media.type can be "image", "video" or "youtube". */

window.PROJECTS = {

  top3: [
    {
      title: "Fable Of The Eclipse",
      subtitle: "Nominee Best Academic Game at Indie Dev Day · Custom Engine · Class Project · 2026",
      description: "As a class of 15 people and 4 months of development, we created an amazing experience that was nominated at Indie Dev Day 2026 in Barcelona. We considered it a huge win given that we were competing against bigger, more experienced teams, all while being the only ones developing our own engine for the game.",
      media: { type: "youtube", src: "kG2pwS_ptjM", alt: "Release Trailer Video" },
      link: { label: "Play on itch.io", url: "https://mini-knight-studio.itch.io/fable-of-the-eclipse" }
    },
    {
      title: "Project name two",
      subtitle: "Custom Engine · Team of 4",
      description: "Replace this text. Mention your role: programming, design, cinematics...",
      media: { type: "image", src: "", alt: "" }
    },
    {
      title: "Project name three",
      subtitle: "Godot · Game jam",
      description: "Replace this text.",
      media: { type: "image", src: "", alt: "" }
    }
  ],

  unity: [
    {
      title: "Unity project title",
      subtitle: "Short line about it",
      description: "Describe the project here.",
      media: { type: "image", src: "", alt: "" }
    }
  ],

  unreal: [
    {
      title: "Unreal project title",
      subtitle: "Short line about it",
      description: "Describe the project here.",
      media: { type: "image", src: "", alt: "" }
    }
  ],

  godot: [
    {
      title: "Godot project title",
      subtitle: "Short line about it",
      description: "Describe the project here.",
      media: { type: "image", src: "", alt: "" }
    }
  ],

  custom: [
    {
      title: "Custom engine project title",
      subtitle: "Short line about it",
      description: "Describe the project here: language, what the engine does, your role.",
      media: { type: "image", src: "", alt: "" }
    }
  ],

  /* Used only by guide.html as a live example. */
  example: [
    {
      title: "Title of the project",
      subtitle: "Subtitle: engine, role, year",
      description: "The description goes here. Leave a blank line for a new paragraph.\n\nThe media above is empty on purpose, so you see the placeholder.",
      media: { type: "image", src: "", alt: "" },
      link: { label: "Optional link", url: "https://example.com" }
    }
  ]
};
