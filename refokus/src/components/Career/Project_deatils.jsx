import React, { useState } from 'react'
import style from './project-details.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function Project_deatils() {
    let [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        let handleScroll = () => {
            let isScrolled = window.scrollY > 2300
            setScrolled(isScrolled)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    let { name } = useParams()
    return (
        <>
            <div className={style.container + ' ' + (scrolled ? style.scrolled : '')}>
                <div className={style.heading}>
                    <div>{name}</div>
                </div>
                <div className={style.par}>
                    <section className={style.section1}>
                        <div className={style.flex_left}>
                            <div className={style.position}>
                                position details
                            </div>
                        </div>
                        <div className={style.flex_right}>
                            <p>We are looking for highly motivated, independent thinker to join our team as a Content & Community Marketing addition (part-time). This position is all about telling Refokus’ story and engaging with our audience on every channel we are working on: socials, blog, campaigns, and more. You will work directly with our founders, Leo and Steffi, and get key insights of fast-scaling an agency in a unique way.</p>
                        </div>
                    </section>
                </div>
                <div className={style.par}>
                    <section className={style.section1}>
                        <div className={style.flex_left}>
                            <div className={style.position}>
                                natural habit
                            </div>
                        </div>
                        <div className={style.flex_right}>
                            <p style={{ marginBottom: '1rem', marginTop: '3rem' }}>Make sure to stuff our content channels: our blog, our newsletter, our website, and our socials (especially LinkedIn, Instagram, and X (Twitter)) with valuable content that will make our audience love us. Ultimately, you are constantly telling Refokus’ story and engaging with our audience.</p>
                            <ul className={style.ul} role="list">
                                <li className={style.li}>Manage our socials, from sharing our stories to filtering other stories we should be paying attention to and reacting to.</li>
                                <li className={style.li}>Collaborate with our co-founders to create editorial content (articles, ebooks, podcasts and more).</li>
                                <li className={style.li}>Collaborate with the team to create case studies and success stories from the work we do.</li>
                                <li className={style.li}>Collaborate with our co-founders and the team to create stories on agency life and our unique perspective on agencies.</li>
                                <li className={style.li}>Maintain and evolve our voice, and use it to talk about what we believe, what we can do, and what makes us different.</li>
                                <li className={style.li}>Develop a content marketing strategy that drives engagement, brand awareness, and leads across all our digital channels.</li>
                                <li className={style.li}>Use data-driven insights to see what strategies are working, then use those findings to refine &amp; improve our content game.</li>
                                <li className={style.li}>Be our brand advocate, responding to comments and direct messages on social media in an engaging way.</li>
                                <li className={style.li}>Create interesting press releases and ideas to get attention from important news sources.</li>
                                <li className={style.li}>Plan, create and manage PR campaigns with the goal of enriching our company's and founder’s position within the public eye.</li>
                                <li className={style.li}>Work with our co-founders to create and polish promotional materials.</li>
                                <li className={style.li}>Stay up-to-date with digital marketing trends and potential new channels and strategies.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className={style.par}>
                    <section className={style.section1}>
                        <div className={style.flex_left}>
                            <div className={style.position}>
                                about you
                            </div>
                        </div>
                        <div className={style.flex_right}>
                            <p style={{ marginBottom: '1rem', marginTop: '3rem' }}>This position is perfect if you have a background in copywriting and storytelling combined with experience in the digital world. We are looking for someone that can think creatively and execute flawlessly. You love to go around searching for cool stories to tell. </p>
                            <ul className={style.ul} role="list">
                                <li className={style.li}>Passionate about design and the digital world.</li>
                                <li className={style.li}>Background in copywriting and storytelling (in English)</li>
                                <li className={style.li}>You write for humans, creating emotional connections with our audience.</li>
                                <li className={style.li}>You have a knack for simplifying complex information and presenting it in a way that's easy to understand.</li>
                                <li className={style.li}>You have a strong eye for detail and a commitment to creating high-quality work.</li>
                                <li className={style.li}>You're a team player who enjoys collaborating with others, but you're great at working independently and getting things done on your own.</li>
                                <li className={style.li}>You're always looking to learn and improve, whether it's mastering a new tool or staying updated on the latest industry trends.</li>
                                <li className={style.li}>You're adaptable and can easily pivot your strategy in response to changing circumstances or feedback.</li>
                                <li className={style.li}>You believe in our brand and are excited to represent it to the world.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className={style.par}>
                    <section className={style.section1}>
                        <div className={style.flex_left}>
                            <div className={style.position}>
                                refokus
                                <div style={{ marginTop: '16px' }}><svg class="refokus-copyright" width="36" height="98" viewBox="0 0 36 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.21663 14.5049C2.83881 12.9428 5.46888 12.9428 7.09106 14.5049L34.7834 41.1716C36.4055 42.7337 36.4055 45.2663 34.7833 46.8284C33.1612 48.3905 30.5311 48.3905 28.9089 46.8284L1.21663 20.1618C-0.405545 18.5997 -0.405544 16.067 1.21663 14.5049Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60421e-07 4C3.60421e-07 1.79086 1.85974 0 4.15385 0L31.8462 0C34.1403 0 36 1.79086 36 4C36 6.20914 34.1403 8 31.8462 8L4.15385 8C1.85974 8 3.60421e-07 6.20914 3.60421e-07 4Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.30769 21.3333L8.30769 44C8.30769 46.2091 6.44795 48 4.15385 48C1.85974 48 2.58995e-06 46.2091 2.48968e-06 44L2.88853e-07 17.3333C2.40698e-07 16.2725 0.437637 15.2551 1.21663 14.5049C1.99563 13.7548 3.05218 13.3333 4.15385 13.3333L31.8462 13.3333C34.1403 13.3333 36 15.1242 36 17.3333C36 19.5425 34.1403 21.3333 31.8462 21.3333L8.30769 21.3333Z" fill="currentColor"></path>
                                    <path d="M17.9756 98C15.4356 98 13.0746 97.549 10.8928 96.647C8.71099 95.7127 6.80597 94.4403 5.17775 92.8295C3.54953 91.1866 2.27951 89.2698 1.36771 87.0792C0.455902 84.8564 0 82.4886 0 79.9758C0 77.4309 0.455902 75.0792 1.36771 72.9208C2.27951 70.7302 3.54953 68.8295 5.17775 67.2188C6.83854 65.5758 8.74356 64.3034 10.8928 63.4013C13.0746 62.4671 15.4356 62 17.9756 62C20.5156 62 22.8765 62.4671 25.0583 63.4013C27.2402 64.3034 29.1452 65.5758 30.7734 67.2188C32.4342 68.8295 33.7205 70.7302 34.6323 72.9208C35.5441 75.0792 36 77.4309 36 79.9758C36 82.4886 35.5441 84.8564 34.6323 87.0792C33.7205 89.2698 32.4342 91.1866 30.7734 92.8295C29.1452 94.4403 27.2402 95.7127 25.0583 96.647C22.8765 97.549 20.5156 98 17.9756 98ZM17.9756 95.4389C20.1574 95.4389 22.1764 95.0523 24.0326 94.2792C25.8887 93.506 27.5007 92.4268 28.8684 91.0416C30.2687 89.6242 31.3433 87.9812 32.0923 86.1127C32.8738 84.2121 33.2646 82.1664 33.2646 79.9758C33.2646 77.753 32.8738 75.7074 32.0923 73.8389C31.3433 71.9705 30.2687 70.3436 28.8684 68.9584C27.5007 67.5409 25.8887 66.4617 24.0326 65.7208C22.1764 64.9476 20.1574 64.5611 17.9756 64.5611C15.8263 64.5611 13.8236 64.9476 11.9674 65.7208C10.1113 66.494 8.48304 67.5893 7.08277 69.0067C5.71506 70.3919 4.64043 72.0188 3.85889 73.8872C3.10991 75.7557 2.73541 77.7852 2.73541 79.9758C2.73541 82.1664 3.10991 84.2121 3.85889 86.1127C4.64043 87.9812 5.71506 89.6242 7.08277 91.0416C8.48304 92.4268 10.095 93.506 11.9186 94.2792C13.7748 95.0523 15.7938 95.4389 17.9756 95.4389ZM9.03664 80.0725C9.03664 78.1396 9.42741 76.4483 10.209 74.9987C10.9905 73.5168 12.0814 72.3732 13.4817 71.5678C14.9145 70.7302 16.5265 70.3114 18.3175 70.3114C20.4993 70.3114 22.3392 70.8913 23.8372 72.051C25.3351 73.1785 26.2795 74.7248 26.6703 76.6899H23.4464C22.7951 74.2738 21.1018 73.0658 18.3664 73.0658C16.5427 73.0658 15.0448 73.7101 13.8725 74.9987C12.7001 76.2872 12.114 77.9624 12.114 80.0242C12.114 82.0859 12.6676 83.745 13.7748 85.0013C14.9145 86.2577 16.3962 86.8859 18.2198 86.8859C20.9878 86.8859 22.7463 85.7101 23.4953 83.3584H26.6703C26.4098 84.6148 25.8725 85.7262 25.0583 86.6926C24.2768 87.6591 23.2999 88.4 22.1275 88.9154C20.9552 89.4309 19.6526 89.6886 18.2198 89.6886C16.3962 89.6886 14.8005 89.2859 13.4328 88.4805C12.0651 87.6752 10.9905 86.5476 10.209 85.098C9.42741 83.6483 9.03664 81.9732 9.03664 80.0725Z" fill="currentColor"></path>
                                </svg></div>
                            </div>
                        </div>
                        <div className={style.flex_right}>
                            <h3 style={{ marginBottom: '1rem', marginTop: '3rem' }}>Refokus is a digital branding agency that creates amazing websites for ambitious brands, surrounded by a crew of incredibly talented, international people.  </h3>
                            <p>Our remote setup fosters freedom, collaboration and connection where our teamwork thrives. We’re driven by our core values, and only bring on board people who are passionate about their craft and genuinely care about their teammates.<br />&zwj;<br />We can't help but be blown away by the incredible possibilities that emerging technologies offer to revolutionize design. That's why we're all about embracing a forward-thinking mindset. Our culture is about fostering innovation, constantly learning, experimenting, and growing personally. It's this drive that keeps us buzzing with excitement and motivates us to push boundaries and try new things.</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
