import { useState } from 'react'
import CfmButton from '../../components/cfm-button/cfm-button.component'
import CfmInput from '../../components/cfm-input/cfm-input.component'
import Navigation from '../../components/navigation/navigation.component'
import AnimationLoader from '../../managers/animation-loader/animation-loader.manager'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="bg-cfm-light-grey">
            <AnimationLoader />
            <Navigation className="cfm-enter-top cfm-delay-2 once" />

            <section
                id="primary"
                className="
                    spacer bg-[url('/contact-wave.svg')] h-screen
                    grid grid-cols-9 grid-rows-9 gap-2
                "
            >
                <div className="cfm-enter-left once col-start-2 col-end-5 row-start-[4] row-end-[8] flex flex-col">
                    <CfmInput
                        className="w-full mb-4"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <CfmInput
                        className="w-full mb-6"
                        label="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CfmInput
                        className="w-full flex-1"
                        label="Message"
                        type="textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div className="mt-12">
                        <CfmButton
                            onClick={() => {
                                // TODO(calco): Actually do stuff

                                setName('')
                                setEmail('')
                                setMessage('')
                            }}
                        >
                            SEND
                        </CfmButton>
                    </div>
                </div>

                <div className="col-start-6 col-end-9 row-start-[4] row-end-[8] h-[30vh] flex flex-col justify-center">
                    <h1 className="cfm-enter-right once cfm-header text-center">
                        CONTACT
                    </h1>
                    <p className="cfm-enter-top once cfm-delay-1 cfm-subheader text-cfm-lighter-grey text-base leading-5">
                        Email: crowd.fund.me.business@gmail.com
                        <br />
                        Adress: Bd. Pache Protopopescu Nr. 62
                        <br />
                        Phone number: 0723 240 466
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Contact
