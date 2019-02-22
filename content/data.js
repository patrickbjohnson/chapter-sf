import { withPrefix } from 'gatsby'

const siteContent = {
    "calendly": "https://calendly.com/critroulette/15min",
    "phone": "+1 415 529 2529",
    "phoneLink": "tel:+14155292529",
    "email": "info@chaptersf.com",
    "social": [
        {
            name: 'medium',
            url: 'https://medium.com/chaptersf'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/company/chapter-sf/'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/chapter_sf'
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/chaptersf'
        },

        {
            name: 'spotify',
            url: 'https://open.spotify.com/user/chaptersf?si=ycNkMRiySWiQUM1XgMG8dw'
        },
    ],
    "hero": {
        "settings": {
            infinite: true,
            speed: 500,
            arrows: false,
            dots: false,
            autoplay: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        "slides": [
            {
              "img": `${withPrefix('01-ThomasHeinser.jpg')}`,
              "credit": 'Thomas Heinser',
              "url": 'https://thomasheinser.com',
            },
            {
              "img": `${withPrefix('02-Bonanza.jpg')}`,
              "credit": 'Bonanza',
              "url": 'http://bonanzallc.co/',
            },
            {
              "img": `${withPrefix('03-ChristBurnett.jpg')}`,
              "credit": 'Chris Burnett',
              "url": 'http://chrisbur.net',
            },
            {
              "img": `${withPrefix('04-RichGiligan.jpg')}`,
              "credit": 'Rich Giligan',
              "url": 'http://www.richgilligan.com',
            },
            {
              "img": `${withPrefix('05-ChristBurnett.jpg')}`,
              "credit": 'Chris Burnett',
              "url": 'http://chrisbur.net',
            },
        ]
    },
    "newKind": {
        "title" :"Only the human friendly will thrive",
        "first": "Today, people expect more from their brands. Those expectations may seem unreasonable but they have been reset for good. Brands can no longer draw comfort from being a bit better than their direct competitors or doing what they’ve always done. They need a new playbook to not just meet but set new expectations. To be human friendly not just human like.",
        "second": "Chapter is a new type of creative studio focused on designing soulful brands that thrive in today’s world of unreasonable expectations. We focus our energy on rethinking products, communications and the way they work together to bring brands to life in more joyful, unexpected and human friendly ways.",
        "third": "We do this by colliding commercial and brand rigor, human empathy and multidisciplinary design to help businesses seize the right opportunity, reset their direction and reinvent themselves and the categories they operate in."
    },
    "about": {
        "title": "WE’RE BUILDING A HOME FOR BRILLIANT MISFITS",
        "bottom": "Our experience has led us to do things a bit differently. We act as an agent of change not an agency of record. We’re obsessed in finding the human opportunity or problem and solving or seizing it in whatever shape it takes. We break down silos. We move fast. We’re open. We show the thing. We’re fearless, optimistic explorers of the path less traveled."
    },
    "partner": {
        "title": "We partner with a select number of changemakers who know they need to change what they do to meet the unreasonable expectations people have today",
        "desc": "What keeps you up at night?",
        "cta": {
            "text": "Talk To Us",
            "email": {
                "to": 'hello@chaptersf.com',
                "subject": 'talk to us',
                "cc": false,
                "body": false,
            }
        }

    },
    "clients": {
        "title": "We Partner with Pioneers",
        "list": [
            {
                name: 'Google',
                info: 'go to market',
            },
            {
                name: 'Airbnb',
                info: 'brand design',
            },
            {
                name: 'Sonos',
                info: 'naming',
            },
            {
                name: 'Dropbox',
                info: 'product strategy',
            },
            {
                name: 'Oculus',
                info: 'experience design',
            },
            {
                name: 'Uber',
                info: 'communications design',
            },
            {
                name: 'Domo',
                info: 'story design',
            },
            {
                name: 'Kodak',
                info: 'end to end experience',
            },
            {
                name: 'Facebook',
                info: 'brand design',
            },
            {
                name: 'PayPal',
                info: 'product design',
            },
            {
                name: 'Target',
                info: 'End To End Experience',
            },
            {
                name: 'Pillpack',
                info: 'go to market',
            },
        ],
        "email": {
            to: 'info@chapter.com',
            subject: 'hello',
            cc: false,
            body: false,
        }
    },
    "projects": {
        "title": "Some Things We Make",
        "list": [
            'Experiences',
            'Products',
            'Systems',
            'Campaigns',
            'Environments',
            'Prototypes',
            'Events',
            'Documentaries'
        ]
    },
    "bios": [
        {
            "name": "Gareth Kay",
            "title": "Founding Partner",
            "desc": "Ex-Chief Strategy Officer of Goodby, Silverstein & Partners. Left a 20-year career at some of the world’s best ad agencies to apply strategic creativity more expansively. Failed musician.",
            "linkedin:": "https://www.linkedin.com/in/garethkaysf/",
            "twitter": "https://twitter.com/garethk",
            "image": `${withPrefix('gareth.jpg')}`,
        },
        {
            "name": "Neil Robinson",
            "title": "Founding Partner",
            "desc": "Ex-ECD AQKA San Francisco. After helping to build one of the best agencies in the world for 17 years hit the reset button to build something from the ground up that's designed to do the right thing.",
            "linkedin:": "https://www.linkedin.com/in/neilrobinson/",
            "twitter": "https://twitter.com/dnrobinson",
            "image": `${withPrefix('neil.jpg')}`
        },
        {
            "name": "Sue Murphy",
            "title": "partner",
            "desc": "Ex-Design Director Wieden+Kennedy, Wolff Olins and Ogilvy. The odd-shaped maverick swapping sides of the fence in advertising, branding and design studios. Pulling pints since age 6.",
            "linkedin:": "https://www.linkedin.com/in/howsueisnow/",
            "twitter": "https://twitter.com/howsueisnow",
            "image": `${withPrefix('sue.jpg')}`
        },
    ],
    "join": {
        "title": "Curious, optimistic, misfits wanted",
        "rows": [
            {
                "title": "Crew",
                "desc": "We’re a bunch of designers, writers, producers and strategists restlessly dissatisfied with how brands, agencies and consultancies act today. If you feel like you’re a misfit, let’s change things together.",
                "message": "Join the crew",
                "cta": {
                    "text": "Join",
                    "email": {
                        to: 'join@chaptersf.com',
                        subject: 'join the crew',
                        cc: false,
                        body: false,
                    }
                }
            },
            {
                "title": "League",
                "desc": "Most places just want to buy your time. We want you to join our league of diverse freelance talent from which we custom build teams to match extraordinary people with extraordinary projects.",
                "message": "Join the league",
                "cta": {
                    "text": "Join",
                    "email": {
                        to: 'join@chaptersf.com',
                        subject: 'join the league',
                        cc: false,
                        body: false,
                      }
                }
            },
            {
                "title": "Apprentice",
                "desc": "This is not an internship. It’s an always-on crash course in solving real problems, open to talent all over the world, done 10 weeks at a time.",
                "message": "Apply for the apprenticeship",
                "cta": {
                    "text": "Apply",
                    "email": {
                        to: 'join@chaptersf.com',
                        subject: 'apply for the apprenticeship',
                        cc: false,
                        body: false,
                      }
                }
            },
        ]

    },
    "connect": {
        "title": "Get better by doing things together",
        "crit": {
            "title": "Critroulette",
            "copy": "Book a portfolio review",
            "listItems": ['You have work.', 'We have thoughts.', 'Every Tuesday.', 'On Google Hangouts.']
        },
        "mission": {
            "title": "The Mission",
            "copy": "Join us to solve something <br> that matters together",
            "listItems": ['Three hours.', 'A few pizzas.', 'Solving a problem for good in the world.', 'Quarterly at Chapter.'],
            "email": {
                to: 'book@chaptersf.com',
                subject: 'book the mission',
                cc: false,
                body: false,
            }
        }

    }
}

export default siteContent