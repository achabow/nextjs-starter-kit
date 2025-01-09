import { ArrowRight, Github } from 'lucide-react';
import { Button } from "../ui/button";



export default function HeroSection() {
    return (
        <div className='flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 pt-16 gap-8'>
            {/* Główny nagłówek */}
            <h1 className='text-5xl md:text-7xl font-bold text-white'>
                Twórz Wyjątkowe 
                <span className='block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
                    Listy Prezentów
                </span>
            </h1>

            {/* Opis */}
            <p className='text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed'>
                Organizuj wydarzenia i zarządzaj listami prezentów w jednym miejscu. 
                Koniec z powtarzającymi się prezentami i niezręcznymi sytuacjami.
            </p>

            {/* Przyciski CTA */}
            <div className='flex flex-col sm:flex-row gap-4 pt-8'>
                <Button 
                    size="lg"
                    className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 text-lg font-semibold">
                    Rozpocznij za darmo
                    
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>

            {/* Statystyki */}
            <div className='flex items-center gap-8 pt-12 text-white/90'>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-400'>2000+</div>
                    <div className='text-sm'>Użytkowników</div>
                </div>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-400'>5000+</div>
                    <div className='text-sm'>Wydarzeń</div>
                </div>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-400'>15000+</div>
                    <div className='text-sm'>Prezentów</div>
                </div>
            </div>
        </div>
    );
}
