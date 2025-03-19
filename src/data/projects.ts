
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
  {
    id: 7,
    title: "Groove Composer App",
    description: "Rethinking drum groove writing with an intuitive web-based interface for musicians and producers.",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    slug: "groove-composer-app",
    fullDescription: {
      challenge: "Musicians and music producers often struggle with traditional drum programming interfaces that are complex and unintuitive. The challenge was to create a web application that simplifies the process of creating drum grooves while maintaining the flexibility professional users need.",
      approach: "We took a user-centered design approach, conducting interviews with musicians of varying skill levels. The interface was designed to be visually representative of musical patterns, using a grid-based system that aligns with how musicians conceptualize rhythm. We implemented real-time audio feedback and emphasized keyboard shortcuts for power users.",
      outcome: "The resulting application has been well-received by both amateur and professional musicians. Users report a 60% reduction in the time needed to program complex grooves compared to traditional DAW interfaces. The application now serves over 5,000 active users and continues to grow through word-of-mouth.",
      additionalContent: "## Design Process\n\n![Design process whiteboard](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80)\n\nOur design process involved multiple iterations and user testing sessions. We started with low-fidelity wireframes that focused on the core functionality: creating and editing drum patterns.\n\n## Key Features\n\n1. **Intuitive Grid Editor** - Visual representation of drum patterns that musicians intuitively understand\n2. **Real-time Audio Preview** - Instant feedback while creating and editing\n3. **Extensive Sound Library** - High-quality samples for various musical styles\n4. **Pattern Library** - Save and reuse favorite patterns\n5. **Export Options** - Seamless integration with popular DAWs\n\n## User Feedback\n\n> \"This is exactly what I've been looking for. It's so much faster than my previous workflow!\" - Alex, Music Producer\n\n> \"The visual approach makes rhythm programming so much more intuitive.\" - Maya, Drummer\n\n## Future Directions\n\nBased on user feedback, we're exploring several enhancements for future releases:\n\n- Collaborative editing features\n- AI-assisted pattern generation\n- Mobile app version\n- Integration with hardware controllers\n\n[Visit the live application](https://groovecomposer.app)"
    }
  },
  {
    id: 6,
    title: "Healthcare Patient Portal",
    description: "Reimagining the patient experience for a major healthcare provider with a focus on accessibility and ease of use.",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    slug: "healthcare-patient-portal",
    fullDescription: {
      challenge: "The existing patient portal for a healthcare provider with over 2 million patients had poor usability metrics and accessibility issues. Patients struggled with basic tasks like finding test results and scheduling appointments, resulting in increased call center volume and patient frustration.",
      approach: "We conducted extensive user research including interviews with diverse patient populations, accessibility audits, and journey mapping. The redesign focused on clear information architecture, consistent navigation patterns, and robust accessibility features. We implemented a progressive disclosure approach to manage complex health information without overwhelming users.",
      outcome: "The redesigned portal launched to overwhelmingly positive feedback, with task completion rates increasing by 42% and average time-to-completion decreasing by 3 minutes. Call center volume related to portal issues decreased by 67%, and patient satisfaction scores improved by 28 points.",
      additionalContent: "## Research Insights\n\n![User interview session](https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80)\n\nOur research revealed several key insights that guided the redesign:\n\n1. Patients were overwhelmed by medical terminology and complex data presentation\n2. Different user groups (chronic condition patients, parents, elderly users) had distinct needs and priorities\n3. Mobile usage was significantly higher than desktop, contrary to stakeholder assumptions\n4. Many users relied on screen readers and other assistive technologies\n\n## Design System Development\n\nWe created a comprehensive design system that ensured consistency while meeting accessibility requirements. The system included:\n\n- **Color palette** with WCAG AAA compliant contrast ratios\n- **Typography** optimized for readability\n- **Component library** with robust accessibility features\n- **Content guidelines** for writing clear, patient-friendly information\n\n## Key Improvements\n\n### Before & After\n\n| Feature | Before | After |\n|---------|--------|-------|\n| Appointment Scheduling | 9 steps, 4+ minutes | 3 steps, under 1 minute |\n| Finding Test Results | 70% success rate | 98% success rate |\n| Mobile Experience | Limited functionality | Full feature parity |\n| Accessibility | Failed WCAG 2.1 AA | Passed WCAG 2.1 AAA |\n\n## Testimonial\n\n> \"The redesigned portal has transformed how we interact with patients. We've seen dramatic improvements in digital engagement and significant operational savings.\" - Dr. Sarah Johnson, Chief Digital Officer"
    }
  }
];
