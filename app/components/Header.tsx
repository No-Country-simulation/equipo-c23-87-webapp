import '../ui/global.css';
import Image from "next/image";


export default function Header() {
 return (
       <div className="flex justify-between items-center w-full px-8 pt-2 pb-2">
        <div className="flex gap-x-16">
         <Image src="/icon_fire.png" alt="Flame" width={18} height={18} />
         <Image src="/icon-medal.png" alt="Medal" width={18} height={18} />
        </div>

        <div className="flex gap-x-16">
         <Image src="/icon-settings.png" alt="Settings" width={18} height={18} />
         <Image src="/icon-user.png" alt="User" width={18} height={18} />
        </div>
      </div>
 );
}

