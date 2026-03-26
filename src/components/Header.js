export default function Header() {
    return(
        <header className="py-4 px-6">
            <nav className="flex justify-between items-center">
                <p className="font-bold text-2xl text-[#58181F]">WineFI</p>

                <div className="flex justify-end items-center gap-7">
                    <a href="#">Comprar Tokens</a>
                    <a href="#">Mis Inversiones</a>
                    <button className="rounded-2xl bg-[#58181F] text-[#FDFBF7] py-2 px-6 cursor-pointer hover:scale-98 transform">Conectar Wallet</button>
                </div>
            </nav> 
        </header>
    );
}