import { createContext }  from "react";

export interface Post {
    postTitle: string;
    postDescription: string;
    postCategory: string,
    postLink?: string;
    postDate: string;
}

//SAMPLE DATA for MVP
const initialUpdateList = [
    {
        postTitle: "AI Prompt Builder v2.0 Launch",
        postDescription: "Successfully launched the new AI prompt builder with enhanced template library and real-time validation. Beta testing shows 85% user satisfaction rate. Ready for full production rollout next week.",
        postCategory: "Product",
        postLink: "https://github.com/yourcompany/ai-prompt-builder",
        postDate: "12/1/2025",
    },
    {
        postTitle: "Q1 Marketing Campaign Results",
        postDescription: "Social media campaign exceeded targets with 15K new followers and 45% engagement increase. LinkedIn posts generated 200+ qualified leads. Preparing Q2 content calendar focused on educational webinars.",
        postCategory: "Marketing",
        postLink: "https://analytics.google.com/campaign-q1",
        postDate: "12/24/2025",
    },
    {
        postTitle: "Partnership with Boys & Girls Clubs Finalized",
        postDescription: "Closed deal to provide AI training curriculum to 12 locations across California. Contract signed for $150K annual value. First training session scheduled for next month with 200+ youth participants.",
        postCategory: "Sales",
        postLink: "https://docs.google.com/presentation/partnership-bgc",
        postDate: "01/08/2026",
    },
    {
        postTitle: "Customer Onboarding Process Redesign",
        postDescription: "Implemented new interactive onboarding flow reducing time-to-first-value by 60%. NPS score improved from 72 to 85. Added in-app tutorials and AI-powered help system with 90% resolution rate.",
        postCategory: "Customer Success",
        postLink: "https://app.yourcompany.com/onboarding",
        postDate: "01/01/2026",
    },
    {
        postTitle: "Infrastructure Migration to AWS Complete",
        postDescription: "Successfully migrated all services to AWS with zero downtime. Reduced hosting costs by 35% while improving load times by 40%. Implemented automated backup and disaster recovery protocols.",
        postCategory: "Operations",
        postLink: "https://console.aws.amazon.com/dashboard",
        postDate: "12/01/2025",
    },
    {
        postTitle: "Series A Funding Round Closed - $2.5M",
        postDescription: "Secured Series A funding led by EdTech Ventures with participation from AI Innovation Fund. Runway extended to 24 months. Capital allocated: 40% Product, 30% Sales/Marketing, 20% Operations, 10% Reserve.",
        postCategory: "Finance",
        postLink: "https://techcrunch.com/your-funding-announcement",
        postDate: "01/07/2026",
    }
];

interface PostListContextType {
    postList: Post[];
    setPostList: (postList: Post[]) => void;
}

const PostListContext = createContext<PostListContextType>({
    postList: initialUpdateList,
    setPostList: () => {}
})

export default PostListContext;
