const CompanyMemberCard = ({
    className,
    name,
    role,
    imgSrc,
    description,
    linkedIn,
}) => {
    return (
        <div
            className={`
            ${className}
            rounded-lg bg-cfm-card-bg flex flex-col overflow-hidden hover:scale-105 transition duration-300 ease-in-out
            p-4
            
            justify-between
            items-center
            
            font-cfm-spartan text-cfm-dark-grey
        `}
        >
            <div className="flex flex-col items-center w-full">
                <img
                    className="w-1/3 rounded-full aspect-square object-cover"
                    src={imgSrc}
                    alt={name}
                />
                <h1 className="font-semibold text-xl w-full text-center">
                    {name}
                </h1>
                <h2 className="font-semibold text-sm mb-4 w-full text-center">
                    {role}
                </h2>

                <p className="text-sm">{description}</p>
            </div>

            <div
                className="bg-cfm-yellow w-[calc(100%_+_2rem)] h-16 translate-y-[1.1rem] flex justify-center items-center
                    p-2
                    text-cfm-dark-grey font-semibold"
            >
                <img
                    className="transition duration-300 ease-in-out hover:cursor-pointer h-6 w-6 mr-2 hover:scale-125"
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    onClick={() => window.open(linkedIn)}
                />
            </div>
        </div>
    )
}

export default CompanyMemberCard
