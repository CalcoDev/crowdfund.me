import AnimationLoader from '../../managers/animation-loader/animation-loader.manager'
import Navigation from '../../components/navigation/navigation.component'
import BnWImage from '../../components/bw-image/bw-image.component'

const About = () => {
    return (
        <div className="bg-cfm-light-grey">
            <AnimationLoader />
            <Navigation className="cfm-enter-top cfm-delay-2 once" />

            <section
                className="
                    spacer bg-[url('/contact-wave.svg')] h-screen
                    grid grid-cols-9 gap-2 grid-rows-9
                "
            >
                <div className="cfm-enter-top once col-start-3 col-end-8 row-start-[2] row-end-[4] flex flex-col justify-center items-center">
                    <h1 className="cfm-header text-center">ABOUT US</h1>
                    <hr className="text-cfm-white border-2 rounded-md w-1/5 max-w-[2rem] mx-auto" />
                </div>

                <div className="cfm-enter-left cfm-delay-1 once col-start-2 col-end-5 row-start-[3] row-end-[9] flex justify-center items-center">
                    <BnWImage src="/images/about/founders.png" alt="Founders" />
                </div>

                <p className="cfm-enter-right cfm-delay-1 once col-start-6 col-end-9 row-start-[3] row-end-[9] cfm-subheader text-sm flex justify-center items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nisl metus, viverra id rutrum et, facilisis eget
                    ligula. Mauris interdum viverra suscipit. Nullam ac lectus
                    quis magna ultrices eleifend ac vel lorem.
                    <br />
                    <br />
                    Nullam dapibus, ipsum ut blandit sollicitudin, leo justo
                    volutpat orci, vitae viverra neque ligula condimentum risus.
                    Sed urna leo, blandit at laoreet et, bibendum in odio.
                </p>

                <img
                    onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('secondary').scrollIntoView()
                    }}
                    className="
                        cfm-enter-bottom once cfm-delay-3
                        transition duration-300 ease-in-out 
                        transform absolute bottom-8 left-1/2 -translate-x-1/2
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
                `}
            >
                <p className="cfm-enter-left once col-start-2 col-end-5 cfm-subheader text-sm flex justify-center items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nisl metus, viverra id rutrum et, facilisis eget
                    ligula. Mauris interdum viverra suscipit. Nullam ac lectus
                    quis magna ultrices eleifend ac vel lorem.
                    <br />
                    <br />
                    Nullam dapibus, ipsum ut blandit sollicitudin, leo justo
                    volutpat orci, vitae viverra neque ligula condimentum risus.
                    Sed urna leo, blandit at laoreet et, bibendum in odio.
                </p>

                <div className="cfm-enter-right once col-start-6 col-end-9">
                    <BnWImage
                        src="/images/about/crowdfundme.png"
                        alt="Founders"
                    />
                </div>
            </section>
        </div>
    )
}

export default About
