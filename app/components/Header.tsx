import '../ui/global.css';

export default function Header() {
 return (
       <div className="flex justify-between items-center w-full px-8 pt-2 pb-2">
        <div className="flex gap-x-16">
         <span>🔥</span>
         <span>🥇</span>
        </div>

        <div className="flex gap-x-16">
         <span>⚙️</span>
         <span>👤</span>
        </div>
      </div>
 );
}

