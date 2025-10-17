import React from 'react';
import { SignalMedium, MessageCircleMore, Handshake, Megaphone, LucideIcon } from 'lucide-react';

// Data for the four steps
const processSteps = [
  {
    icon: SignalMedium,
    title: "Monitoring Reddit 24/7",
    description: "Our AI engines continuously scan relevant subreddits and forums for latent demand, intent signals, and unanswered questions where your product is the perfect solution. Never miss a potential client again.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: MessageCircleMore,
    title: "Make a Conversation",
    description: "We don't just drop links. Our conversational AI initiates genuine, human-like dialogue, providing value, addressing pain points, and gently qualifying the lead based on their immediate needs.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: Handshake,
    title: "Build Trust & Authority",
    description: "By engaging authentically and solving problems first, we position your brand as a helpful expert, not a sales pitch. This approach establishes immediate credibility and high-intent engagement.",
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    icon: Megaphone,
    title: "Position Your Brand",
    description: "The final step is to seamlessly introduce your product or service as the ultimate solution within the context of the conversation, resulting in high-quality, pre-warmed leads for your sales team.",
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50"
  },
];

const ProcessCard = ({ icon:Icon, title, description, color, bg }:{icon: LucideIcon, title:string, description:string, color:string, bg:string}) => {
    return (
        <div className="flex flex-col p-6 h-full bg-[#708F92] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className={`w-14 h-14 ${bg} ${color} rounded-full flex items-center justify-center mb-5 shadow-inner`}>
                <Icon size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-50 font-sans leading-relaxed flex-grow">{description}</p>
        </div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen flex items- justify-center p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">

                {/* 4-Column Responsive Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, index) => (
                        <ProcessCard 
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            color={step.color}
                            bg={step.bg}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;