import Navigation from '../../components/navigation/navigation.component'
import OfferCard from '../../components/offer-card/offer-card.component'
import AnimationLoader from '../../managers/animation-loader/animation-loader.manager'

const offers = [
    {
        title: 'Title',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus ultricies nulla. Etiam blandit sem sit amet scelerisque sodales. Curabitur erat purus, maximus id nibh eget, suscipit tincidunt mi. Etiam eu commodo nunc. Integer luctus in lorem et ullamcorper.',
        owner: 'Owner',
        price: 168.88,
    },
    {
        title: 'Title',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus ultricies nulla. Etiam blandit sem sit amet scelerisque sodales. Curabitur erat purus, maximus id nibh eget, suscipit tincidunt mi. Etiam eu commodo nunc. Integer luctus in lorem et ullamcorper.',
        owner: 'Owner',
        price: 168.88,
    },
    {
        title: 'Title',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus ultricies nulla. Etiam blandit sem sit amet scelerisque sodales. Curabitur erat purus, maximus id nibh eget, suscipit tincidunt mi. Etiam eu commodo nunc. Integer luctus in lorem et ullamcorper.',
        owner: 'Owner',
        price: 168.88,
    },
]

const Offers = () => {
    return (
        <div className="bg-cfm-light-grey">
            <AnimationLoader />
            <Navigation className="cfm-enter-top cfm-delay-2 once" />

            <section
                id="primary"
                className="
                    spacer bg-[url('/contact-wave.svg')]
                    flex flex-col pt-[12vh] items-center
                    pb-24
                "
            >
                <div className="cfm-enter-top once col-start-3 col-end-8 row-start-[2] row-end-[4] flex flex-col justify-center items-center">
                    <h1 className="cfm-header text-center">OFFERS</h1>
                    <hr className="text-cfm-white border-2 rounded-md w-1/5 max-w-[2rem] mx-auto" />
                </div>

                <div className="w-1/2 mt-20 flex flex-col gap-8">
                    {offers.map((offer, index) => (
                        <OfferCard
                            key={index}
                            title={offer.title}
                            description={offer.description}
                            owner={offer.owner}
                            price={offer.price}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Offers
