interface HeadingProps {
    headOne: string;
    headTwo: string;
    headThree: string;
}

export default function Heading({ headOne, headTwo, headThree }: HeadingProps) {
    return (
        <div className="flex flex-col items-center text-center">

            {/* Large Heading */}
            <h1
                data-aos="fade-up"
                className="my-1 max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 text-center font-semibold"
            >
                {/* headOne stays black */}
                <span className="text-black">{headOne} </span>

                {/* headTwo with Taakra gradient */}
                <span className="bg-gradient-to-r from-[#3d6b1f] via-[#4a7c2a] to-[#3d6b1f] bg-clip-text text-transparent">
                    {headTwo}
                </span>

                {/* headThree stays black */}
                <span className="text-black"> {headThree}</span>
            </h1>

        </div>
    );
}
