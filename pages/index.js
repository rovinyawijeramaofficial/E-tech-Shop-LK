import { Poppins } from 'next/font/google';

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Load specific weights
});

export default function HomePage() {
  return (
    <div className={`${poppins.className} w-full h-screen flex items-center justify-center`}>
      <input
        type="text"
        placeholder='Try searching "Smart TV"'
        className="w-[266px] h-[30px] px-6 bg-transparent focus:outline-none placeholder-black text-left text-[18px] leading-[29.12px] text-black font-light border border-black"
      />
    </div>
  );
}
