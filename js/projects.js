/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO FILL YOUR PORTFOLIO.
   See guide.html for a step-by-step explanation.
   ============================================================ */

window.SITE = {
  name: "Your Name",
  tagline: "Game developer. Programming and design today, cinematics tomorrow.",
  about: "Write two or three sentences about yourself here: who you are, what you build and why cinematics are your next goal.",
  email: "you@example.com",
  links: [
    { label: "GitHub", url: "https://github.com/your-user" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-user" },
    { label: "itch.io", url: "https://your-user.itch.io" }
  ]
};

/* Each project ("module") has: title, subtitle, description, media,
   and optionally link. media.type can be "image", "video" or "youtube". */

window.PROJECTS = {

  top3: [
    {
      title: "Project name one",
      subtitle: "Unity · Solo · 2025",
      description: "What the game is, what you did on it, and what you learned.\n\nA blank line starts a new paragraph.",
      media: { type: "image", src: "", alt: "Gameplay screenshot of project one" },
      link: { label: "Play on itch.io", url: "https://your-user.itch.io/project" }
    },
    {
      title: "Project name two",
      subtitle: "Unreal Engine · Team of 4",
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
