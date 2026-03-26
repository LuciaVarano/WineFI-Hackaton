export default function Hero() {
    return(
        <section className="bg-[#FDFBF7] py-5 px-5 h-[90vh] flex justify-center items-center"> 
            <div className="mr-30">
                <p className="py-1 px-8 rounded-3xl bg-[#8a5a5f] text-[#FDFBF7] border border-[#72575a] inline-block text-xs translate-y-12">BLOCKCHAIN</p>
                <h1 className="text-[180px]">WineFI</h1>
                <p className="text-3xl -translate-y-10">Invierte en el futuro de las mejores cosechas. <br/>
                Tokenización de vino sobre Rootstock.
                </p>
            
                <button className="rounded-2xl py-2 px-6 shadow bg-[#58181F] text-[#FDFBF7] mr-7 hover:scale-98 cursor-pointer">Explorar cosechas →</button>
                <button className="rounded-2xl py-2 px-6 shadow bg-[#e0ded9] hover:scale-98 cursor-pointer">Como funciona</button>
            </div>

            <div className="relative">
                <img src="/images/wine.jpg" className="h-180 rounded-3xl drop-shadow-2xl rotate-4 " />
                <img src="/images/card.png" className="absolute h-50 rounded-3xl -translate-45 -rotate-3 drop-shadow-xl"/>
            </div>

            <img src="/images/chevron.svg" className="absolute right-1/30 -translate-x-1/2 bottom-5 size-20 animate-bounce"/>
        </section>
        
    );
}