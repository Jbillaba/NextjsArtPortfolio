import Image from 'next/image';
import Logo from '@/public/assets/andreia_logo.png';


export default function SabineLogo() {
    return (
        <div>
            <Image src={Logo} alt="Andreia De Matos Logo" loading="eager"/>
        </div>
    );
}