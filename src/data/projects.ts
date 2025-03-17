
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  fullDescription?: {
    challenge?: string;
    approach?: string;
    outcome?: string;
    additionalContent?: string;
  };
}

export const projects: Project[] = [
  // {
  //   id: 7,
  //   title: "Groove Composer App",
  //   description: "Rethinking drum groove writing with an intuitive web-based interface for musicians and producers.",
  //   category: "Web App",
  //   image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  //   slug: "groove-composer-app",
  //   fullDescription: {
  //     challenge: "Musicians and music producers often struggle with traditional drum programming interfaces that are complex and unintuitive. The challenge was to create a web application that simplifies the process of creating drum grooves while maintaining the flexibility professional users need.",
  //     approach: "We took a user-centered design approach, conducting interviews with musicians of varying skill levels. The interface was designed to be visually representative of musical patterns, using a grid-based system that aligns with how musicians conceptualize rhythm. We implemented real-time audio feedback and emphasized keyboard shortcuts for power users.",
  //     outcome: "The resulting application has been well-received by both amateur and professional musicians. Users report a 60% reduction in the time needed to program complex grooves compared to traditional DAW interfaces. The application now serves over 5,000 active users and continues to grow through word-of-mouth.",
  //     additionalContent: "## Design Process\n\n![Design process whiteboard](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)\n\nOur design process involved multiple iterations and user testing sessions. We started with low-fidelity wireframes that focused on the core functionality: creating and editing drum patterns.\n\n## Key Features\n\n1. **Intuitive Grid Editor** - Visual representation of drum patterns that musicians intuitively understand\n2. **Real-time Audio Preview** - Instant feedback while creating and editing\n3. **Extensive Sound Library** - High-quality samples for various musical styles\n4. **Pattern Library** - Save and reuse favorite patterns\n5. **Export Options** - Seamless integration with popular DAWs\n\n## User Feedback\n\n> \"This is exactly what I've been looking for. It's so much faster than my previous workflow!\" - Alex, Music Producer\n\n> \"The visual approach makes rhythm programming so much more intuitive.\" - Maya, Drummer\n\n## Future Directions\n\nBased on user feedback, we're exploring several enhancements for future releases:\n\n- Collaborative editing features\n- AI-assisted pattern generation\n- Mobile app version\n- Integration with hardware controllers"
  //   }
  // }
];
