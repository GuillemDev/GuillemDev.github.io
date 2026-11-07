/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO FILL YOUR PORTFOLIO.
   See guide.html for a step-by-step explanation.
   ============================================================ */

window.SITE = {
  name: "Guillem Martínez Aparicio",
  tagline: "Programmer and Designer striving to specialise in cinematics.",
  about: "Play and responsibility are two sides of the same coin.\n\nFinding or creating an environment where both are integrated is always my ultimate goal.",
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
      description: "Roles: Producer, Director, Camera Programmer, UI Programmer. \n\nAs a class of 15 people and 4 months of development, we created an amazing experience that was nominated at Indie Dev Day 2026 in Barcelona. We considered it a huge win given that we were competing against bigger, more experienced teams, all while being the only ones developing our own engine for the game.",
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
      title: "Poke AR",
      subtitle: "Augmented Reality · Team of 4" · 2026,
      description: "Roles: Pokeball Mechanic Design & Programming, Plane Detection Programming. \n\nThis project is a recreation of a Pokédex but with the turn that we use Unity AR Foundations to provoke the feeling that instead of a mobile phone, you have a device from the Pokemon world. The aim was learning about the implementations of AR while doing a game that detects real cards like in Invizimals, all within the Pokemon world.",
      media: { type: "youtube", src: "ctDrizS42F0", alt: "Guide-through recorded in vertical format." }
    }
    {
      title: "Punch Them All",
      subtitle: "Virtual Reality · Team of 3" · 2026,
      description: "Roles: Game Loop Programming, Integrated UI Design & Programming, Plane Detection Programming. \n\nThis project is a recreation of a Pokédex but with the turn that we use Unity AR Foundations to provoke the feeling that instead of a mobile phone, you have a device from the Pokemon world. The aim was learning about the implementations of AR while doing a game that detects real cards like in Invizimals, all within the Pokemon world.",
      media: { type: "youtube", src: "4vkUoSXss8c", alt: "Gameplay recorded in Meta Quest 2 glasses." }
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
      title: "Fable Of The Eclipse",
      subtitle: "Nominee Best Academic Game at Indie Dev Day · Class Project · 2026",
      description: "Roles: Producer, Director, Camera Programmer, UI Programmer. \n\nAs a class of 15 people and 4 months of development, we created an amazing experience that was nominated at Indie Dev Day 2026 in Barcelona. We considered it a huge win given that we were competing against bigger, more experienced teams, all while being the only ones developing our own engine for the game.",
      media: { type: "youtube", src: "kG2pwS_ptjM", alt: "Release Trailer Video" },
      link: { label: "Play on itch.io", url: "https://mini-knight-studio.itch.io/fable-of-the-eclipse" }
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
