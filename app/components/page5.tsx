import React from "react";
import {
  SignalMedium,
  MessageCircleMore,
  Handshake,
  Megaphone,
  LucideIcon,
} from "lucide-react";

const processSteps = [
  {
    icon: SignalMedium,
    title: "Monitoring Reddit 24/7",
    description:
      "Our AI scans subreddits nonstop to spot intent, demand, and unanswered questions where your product fits best—so you never miss a lead.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: MessageCircleMore,
    title: "Make a Conversation",
    description:
      "Instead of spamming links, our AI starts real, value-driven chats that address pain points and qualify leads naturally.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Handshake,
    title: "Build Trust & Authority",
    description:
      "By helping first and selling later, we make your brand feel human and credible—creating stronger, high-intent engagement.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Megaphone,
    title: "Position Your Brand",
    description:
      "Finally, we introduce your product as the clear solution within the conversation—delivering warm, ready-to-buy leads.",
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
  },
];


const ProcessCard = ({
  icon: Icon,
  title,
  description,
  color,
  bg,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}) => {


  return (
    <div
      className="flex flex-col p-6 bg-[#708F92] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden"
      style={{ maxHeight: "100%" }}
    >
      <div
        className={`w-14 h-14 ${bg} ${color} rounded-full flex items-center justify-center mb-5 shadow-inner`}
      >
        <Icon size={24} strokeWidth={2.5} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      <p
        className={`text-gray-50 text-xs lg:text-xl font-sans leading-relaxed transition-all duration-300`}
      >
        {description}
      </p>

      <button
        className="text-sm text-white mt-3 underline md:hidden">
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-[60vh] flex justify-center p-4 sm:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-4">
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
