import AnimationLoader from '../../managers/animation-loader/animation-loader.manager'
import Navigation from '../../components/navigation/navigation.component'
import BnWImage from '../../components/bw-image/bw-image.component'
import CompanyMemberCard from '../../components/company-member-card/company-member-card.component'

const people = [
    {
        name: 'Andrei Dumitru-Munteanu',
        role: 'Co-Founder',
        imgSrc: '/people/andu.jpg',
        description:
            'Sunt un elev de liceu în vârstă de 16 ani și una dintre caracteristicile mele principale este pasiunea pentru antreprenoriat.',
        linkedIn: 'not-yet',
    },
    {
        name: 'Daniel Nica',
        role: 'Co-Founder',
        imgSrc: '/people/dan.jpg',
        description:
            'Sunt mereu dornic să descopăr lucruri noi și să explorez diverse domenii de cunoaștere.',
        linkedIn: 'not-yet',
    },
    {
        name: 'Serban Rosca',
        role: 'Senior Programmer',
        imgSrc: '/people/me.jpg',
        description:
            'Sunt un elev de 16 ani pasionat de programare. Mi-am propus sa imi ajut colegii si sa realizez partea de programare, datorita pasiunii pentru antreprenoriat si a potentialul experientei valoarease obtinute.',
        linkedIn: 'not-yet',
    },
]

const About = () => {
    return (
        <div className="bg-cfm-light-grey">
            <AnimationLoader />
            <Navigation className="cfm-enter-top cfm-delay-2 once" />

            <section
                className="
                    spacer bg-[url('/contact-wave.svg')] h-screen
                    flex flex-col pt-[12vh] items-center
                    pb-24
                "
            >
                <div className="cfm-enter-top once flex flex-col justify-center items-center">
                    <h1 className="cfm-header text-center">ABOUT US</h1>
                    <hr className="text-cfm-white border-2 rounded-md w-1/5 max-w-[2rem] mx-auto" />
                </div>

                <div className="mt-20 flex h-4/5 w-3/5 gap-8">
                    {people.map((person, index) => (
                        <CompanyMemberCard
                            className="flex-1"
                            key={index}
                            name={person.name}
                            role={person.role}
                            imgSrc={person.imgSrc}
                            description={person.description}
                            linkedIn={person.linkedIn}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About
