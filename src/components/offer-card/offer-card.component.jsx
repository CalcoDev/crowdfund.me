import CfmButton from '../cfm-button/cfm-button.component'

const OfferCard = ({ title, description, owner, price }) => {
    return (
        <div className="min-h-[18rem] rounded-lg bg-cfm-white flex flex-col md:flex-row overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
            <div className="md:w-2/3 w-full p-4 text-cfm-dark-grey flex flex-col justify-between">
                <div>
                    <h1 className="font-cfm-spartan text-3xl font-bold">
                        {title}
                    </h1>
                    <p className="font-cfm-cormorant text-base font-semibold">
                        {description}
                    </p>
                </div>
                <h2 className="font-cfm-spartan text-lg">{owner}</h2>
            </div>

            <div className="md:w-1/3 w-full bg-cfm-light-yellow flex flex-col">
                <div
                    className="
                    p-4
                    flex-1 flex flex-col justify-center items-center
                    font-cfm-spartan text-cfm-dark-grey
                "
                >
                    <h1 className="font-bold text-4xl">{price}</h1>
                    <h2 className="font-semibold text-2xl">RON</h2>
                </div>
                <div
                    className="
                    bg-cfm-yellow flex justify-center items-center h-2/5
                    p-8
                    "
                >
                    <CfmButton
                        className="
                        text-cfm-dark-grey hover:bg-cfm-dark-grey
                        border-cfm-dark-grey hover:text-cfm-yellow border-[3px] font-semibold
                    "
                    >
                        INVEST
                    </CfmButton>
                </div>
            </div>
        </div>
    )
}

export default OfferCard
