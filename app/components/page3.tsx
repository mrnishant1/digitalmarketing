export default function Page3() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className=" font-bold text-white text-2xl md:text-3xl lg:text-5xl mb-8 transition-all duration-300 ">
                       Impact on Business Growth Through words of people
                    </h2>
                    <p className="text-xs md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-7 md:mb-10 lg:mb-16">
                        Let's talk about numbers.
                    </p>
                    
                    <div className=" flex flex-col md:flex-row  justify-evenly gap-10 mt-12">
                        {/* Market Trust Card */}
                        <div className="bg-[#D6E8DC] basis-0 grow-1  p-8 text-black rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        style={{
                            boxShadow: "8px 8px black"
                        }}>
                            <div className="text-center  ">
                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4">72%</h2>
                                <h3 className="text-slate-800 text-sm md:text-xl font-semibold mb-3">Users Trust</h3>
                                <p className="text-[#2a3e40] text-xs md:text-xl lg:text-2xl font-bold">
                                    Reddit/Other social media, for "getting information".
                                </p>
                            </div>
                        </div>

                        {/* ROI Card */}
                        <div className="bg-[#D6E8DC] basis-0 grow-1  p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        style={{
                            boxShadow: "8px 8px black"
                        }}>
                            <div className="text-center ">
                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4">4X</h2>
                                <h3 className="text-slate-800 text-sm md:text-xl font-semibold mb-3">ROI</h3>
                                <p className="text-[#2a3e40] text-xs md:text-xl font-bold">
                                    For every $1 invested.
                                </p>
                            </div>
                        </div>

                        {/* Consumer Confidence Card */}
                        <div className="bg-[#D6E8DC] basis-0 grow-1 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        style={{
                            boxShadow: "8px 8px black"
                        }}>
                            <div className="text-center ">
                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4">73%</h2>
                                <h3 className="text-slate-800 text-sm md:text-xl font-semibold mb-3">Conversion Impact</h3>
                                <p className="text-[#2a3e40] text-xs md:text-xl font-bold">
                                    In e-commerce, word-of-mouth has conversion rates 2x to 2.5x higher.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
