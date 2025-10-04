// Button Component
export function Button({
children,
className = "",
variant = "solid",
...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }) {
const baseStyles =
"px-4 py-2 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";


const variants = {
solid: "bg-green-400 text-black hover:bg-green-500 focus:ring-green-400",
outline:
"border border-white text-white hover:bg-white hover:text-black focus:ring-white",
};


return (
<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
{children}
</button>
);
}


// Card Component
export function Card({
children,
className = "",
}: React.HTMLAttributes<HTMLDivElement>) {
return (
<div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg ${className}`}>
{children}
</div>
);
}