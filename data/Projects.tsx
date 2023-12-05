import Project from "@/types/Project";

//TODO: fill projects
const Projects: Project[] = [
    {
        title: "Developer Portfolio",
        tech: ["Next.js", "React.js", "Tailwind-CSS"],
        image: "/portfolio.png",
        url: "https://www.github.com/giorgosathanasopoulos/portfolio",
    },
    {
        title: "Ertflix.gr Desktop Clone",
        tech: ["C++", "SDL"],
        image: "/ertflix.png",
        url: "https://www.github.com/giorgosathanasopoulos/aueb-cpp-ergasia1",
    },
    {
        "title": "Visual Morse Exercises",
        "tech": ["Svelte", "SvelteKit"],
        "image": "/visual-morse-exercises.png",
        "url": "https://wolfpack-morse-exercises.vercel.app"
    },
    {
        "title": "Visual Morse Tool",
        "tech": ["Godot", "Gdscript"],
        "image": "/visual-morse.png",
        "url": "https://github.com/GiorgosAthanasopoulos/VisualMorse",
    },
    {
        "title": "Chess",
        "tech": ["C", "C++", "Raylib"],
        "image": "/raylib-chess.png",
        "url": "https://github.com/GiorgosAthanasopoulos/raylib-chess",
    },
];

export default Projects;
