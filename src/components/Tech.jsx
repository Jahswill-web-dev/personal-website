import Image from "next/image";
import tailwindImage from "../../public/images/tailwindcss-logotype.png";
import nextImage from "../../public/images/nextjslogo.png";
import reactImage from "../../public/images/react-logo.png";

function Tech() {
    return ( 
        <div className="mt-10" id="tech">
            <p className="text-3xl text-primary text-center mb-5">
                Tech Stack
            </p>
            <div className="grid place-content-center gap-3 place-items-center sm:grid-cols-3">
            <Image src={tailwindImage} width={500} height={500} className="w-60"/>
            <Image src={nextImage} width={500} height={500} className="w-36"/>
            <Image src={reactImage} width={500} height={500} className="w-60"/>
            
            </div>
        </div>
     );
}

export default Tech;