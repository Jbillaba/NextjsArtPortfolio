import Image from 'next/image';
import sabinePortrait from '@/public/assets/sabineportrait.png'

export default function Page() {

    return (
      <div className='flex flex-row space-y-10' >
            <div className="px-10" >
                <Image src={sabinePortrait}
                  alt="self portrait of Andreia de matos"
                  width={800}
                  height={800}
                />
            </div>
            <div className="space-y-5" >
                <p>
                    Andreia de Matos (b. 1997, Lisbon, Portugal) is a multi-disciplinary illustrator based in North New Jersey. They hold a BFA in Illustration with a Concentration in Theatre from the Maryland Institute College of Art. They have worked with local community business owners to create signage and illustrations for their shops.
                </p>
                <p>
                    Their favorite work to make is centered at the intersections of food, culture, and fashion. In addition, they love exploring different mediums and when available to them, they also use CAD/CNC to engrave and cut wooden art pieces. Regardless of medium, they make work with an eye toward design with punchy color and juicy shapes.
                </p>
            </div>
        </div>
    )
}
