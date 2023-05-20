import { useEffect } from 'react'

const AnimationLoader = () => {
    useEffect(() => {
        console.log('Loading animations...')
        loadAnimations()
    }, [])

    const loadAnimations = () => {
        loadAnimation('enter-left')
        loadAnimation('enter-right')
        loadAnimation('enter-top')
        loadAnimation('enter-bottom')
        loadAnimation('enter-center')
    }

    const loadAnimation = (animation) => {
        console.log(`Loading animation: ${animation}`)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let delay = 0
                    entry.target.classList.forEach((classEntry) => {
                        if (!classEntry.includes('cfm-delay-')) return
                        delay = classEntry.split('-')[2] * 1000
                    })

                    entry.target.classList.add('opacity-0')
                    setTimeout(() => {
                        entry.target.classList.remove('opacity-0')
                        entry.target.classList.add(`animate-${animation}`)
                    }, delay)
                } else {
                    if (entry.target.classList.contains('once')) {
                        entry.target.classList.add
                        return
                    }

                    entry.target.classList.remove(`animate-${animation}`)
                }
            })
        })
        const elements = document.querySelectorAll(`.cfm-${animation}`)
        elements.forEach((element) => {
            observer.observe(element)
        })
    }

    return <></>
}

export default AnimationLoader
