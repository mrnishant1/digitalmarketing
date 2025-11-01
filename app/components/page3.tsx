export default function Page3() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF9F2] to-[#FDEAD5] md:scale-[1] scale-[0.8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-extrabold text-[#003566] text-3xl md:text-4xl lg:text-5xl mb-4">
          Impact on Business Growth Through People’s Voice
        </h2>
        <p className="text-[#003566]/80 text-base md:text-lg lg:text-xl mb-16">
          Real numbers. Real trust. Real growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#003566]/10 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-6xl font-extrabold text-[#003566] mb-3">72%</h3>
            <p className="text-lg font-semibold text-[#003566]/80 mb-2">
              User Trust
            </p>
            <p className="text-[#2a3e40]/80 text-sm md:text-base">
              People rely on Reddit and social media for honest information.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-[#003566]/10 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-6xl font-extrabold text-[#003566] mb-3">4X</h3>
            <p className="text-lg font-semibold text-[#003566]/80 mb-2">
              Return on Investment
            </p>
            <p className="text-[#2a3e40]/80 text-sm md:text-base">
              Every $1 invested in word-of-mouth drives 4× the return.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#003566]/10 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-6xl font-extrabold text-[#003566] mb-3">73%</h3>
            <p className="text-lg font-semibold text-[#003566]/80 mb-2">
              Conversion Impact
            </p>
            <p className="text-[#2a3e40]/80 text-sm md:text-base">
              Word-of-mouth boosts e-commerce conversions by up to 2.5×.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
