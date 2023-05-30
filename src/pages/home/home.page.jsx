import { Link } from 'react-router-dom'
import CfmButton from '../../components/cfm-button/cfm-button.component'
import Navigation from '../../components/navigation/navigation.component'
import { useEffect, useState } from 'react'
import AnimationLoader from '../../managers/animation-loader/animation-loader.manager'

const secondaries = [
    {
        left: 'Agricultura este una dintre cele mai importante industrii din lume, iar Crowd Fund Me își propune să faciliteze accesul la investiții în acest domeniu. ',
        right: 'Platforma noastră conectează fermierii și antreprenorii agricoli care caută capital cu investitorii interesați de a obține randamente atractive și de a contribui la dezvoltarea sectorului agricol.',
        image: '/images/landing-secondary/test.png',
    },
]

function Home() {
    const [sIdx, setSIdx] = useState(0)

    return (
        <div className="bg-cfm-light-grey">
            <AnimationLoader />
            <Navigation className="cfm-enter-top cfm-delay-3 once" />

            <section
                id="primary"
                className="
                    spacer bg-[url('/landing-wave.svg')] h-screen
                    flex justify-center items-center
                    relative
                "
            >
                <div className="text-center h-[fit-content]">
                    <h1 className="cfm-header cfm-enter-bottom once">
                        CROWDFUND.ME
                    </h1>
                    <p className="cfm-subheader cfm-enter-bottom once cfm-delay-1 mb-4">
                        Romanian investing company
                    </p>
                    <CfmButton className="cfm-enter-bottom once cfm-delay-2">
                        <Link to="/offers">OFFERS</Link>
                    </CfmButton>
                </div>

                <img
                    onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('secondary').scrollIntoView()
                    }}
                    className="
                        cfm-enter-bottom once cfm-delay-3
                        absolute bottom-8 transition duration-300 ease-in-out 
                        hover:scale-125 hover:cursor-pointer active:scale-90
                    "
                    src="/misc/arrow.svg"
                />
            </section>

            <section
                id="secondary"
                className={`
                    h-screen-fill
                    bg-cfm-dark-grey
                    grid grid-cols-9 gap-2
                    items-center
                    relative
                `}
            >
                <p className="cfm-enter-left once cfm-delay-2 col-start-2 col-end-4 cfm-subheader text-base leading-5 pr-[25%]">
                    {secondaries[sIdx].left}
                </p>

                <div className="col-start-4 col-end-7 flex">
                    <div className="flex-1 flex items-center justify-start once cfm-enter-right cfm-delay-1">
                        <img
                            className="
                                rotate-90 w-1/2 max-w-[26px] min-2-[12px] 
                                transition duration-300 ease-in-out 
                                hover:scale-125 hover:cursor-pointer active:scale-90
                            "
                            onClick={() =>
                                setSIdx((sIdx - 1) % secondaries.length)
                            }
                            src="/misc/arrow.svg"
                            alt="Cycle image left"
                        />
                    </div>

                    <div className="flex-[3] relative">
                        <img
                            className="cfm-enter-center once flex-1"
                            src={secondaries[sIdx].image}
                        />

                        <div className="absolute bottom-0 w-full h-12 origin-top translate-y-full">
                            <div className="cfm-enter-bottom once cfm-delay-2 w-full h-full flex justify-around items-center">
                                {secondaries.map((_, idx) =>
                                    idx === sIdx ? (
                                        <div key={idx}>
                                            <img
                                                src="/misc/line-active.svg"
                                                alt="Active image"
                                                className="
                                                transition duration-300 ease-in-out 
                                                hover:scale-125 hover:cursor-pointer active:scale-90
                                            "
                                                onClick={() => setSIdx(idx)}
                                            />
                                        </div>
                                    ) : (
                                        <div key={idx}>
                                            <img
                                                src="/misc/line.svg"
                                                alt="Inactive image"
                                                className="
                                                transition duration-300 ease-in-out 
                                                hover:scale-125 hover:cursor-pointer active:scale-90
                                            "
                                                onClick={() => setSIdx(idx)}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-end once cfm-enter-left cfm-delay-1">
                        <img
                            className="
                            -rotate-90 w-1/2 max-w-[26px] min-2-[12px] 
                            transition duration-300 ease-in-out 
                            hover:scale-125 hover:cursor-pointer active:scale-90
                        "
                            onClick={() =>
                                setSIdx((sIdx + 1) % secondaries.length)
                            }
                            src="/misc/arrow.svg"
                            alt="Cycle image right"
                        />
                    </div>
                </div>

                <p className="once cfm-enter-right cfm-delay-2 col-start-7 col-end-9 cfm-subheader text-base leading-5 pl-[25%] text-end">
                    {secondaries[sIdx].right}
                </p>
            </section>
        </div>
    )
}

export default Home
