import React from 'react'
import data from '../../../content/data'
import createMailLink from '../../utils/createMailLink'
import Content from '../Content'
import MeetRow from '../MeetRow'

import content from '../Content/content.module.css'
import styles from './meet.module.css'




const Meet = () => {
    return (
        <section id="connect" className={styles.section} data-section>
            <div className={styles.content}>
                <Content>
                    <h2
                        className={`${content.title} ${content.whiteFill}`}
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-duration="600"
                        data-sal-easing="ease-out-bounce"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1028.7 116"><path d="M917.8 5.2h106.1v14.4H979v91.2h-16.1V19.7h-45.1V5.2zM637.7 5.2h89.1v14.6h-72.9v23.9h61.2v14.6h-61.4.1v38.1h76.5v14.4h-92.7l.1-105.6zM99.2 37.9c-6-13.7-18-20.7-34.8-20.7-12.2 0-21.8 3.7-30.1 11.6-8.4 8.1-12.6 17.8-12.6 29.9 0 24.2 17.3 41 42 41 10.3 0 19.9-3 27.2-8.6 4.1-3.2 6.8-6.2 11.6-12.9l12.9 8.4c-6.4 8.4-10.7 12.7-17 17-9.4 6-21.9 9.7-34.3 9.7-18.3 0-29.9-4-40.5-13.2-11-9.9-17.3-24.8-17.3-40.5 0-33.4 22.9-56.1 56.6-56.1 12.6 0 25 3.3 35.1 9.2 7.6 4.5 12.6 9.7 17 18l-15.8 7.2zM262 19.9c10.2 9.9 15.7 23.5 15.7 38.6 0 32-24.6 54.9-59.5 54.9-36.7 0-62.8-22.9-62.8-54.9 0-31.8 26.2-55 62.5-55 18.3 0 32.8 5.4 44.1 16.4zm-89.7 38.5c0 24.8 18.1 41.5 45.5 41.5 25 0 43.1-17.3 43.1-41.5 0-11-4.1-21.3-11.3-28.8-8.1-8.6-18.6-12.7-32.1-12.7-27 0-45.2 16.7-45.2 41.5zM325 5.4h21.9L402.6 74c6.2 7.8 7.5 9.2 12.6 16.5l.5-.3c-.5-8.6-.6-10.8-.6-20.7V5.4h15.4v106.1h-18L353 38.7c-6.2-7.6-7.5-9.2-12.6-16.5l-.6.3c.8 8.6.8 10.8.8 20.5v68.5H325V5.4zM481.3 5.4h21.9L558.9 74c6.2 7.8 7.5 9.2 12.6 16.5l.5-.3c-.5-8.6-.6-10.8-.6-20.7V5.4h15.4v106.1h-18l-59.5-72.8c-6.2-7.6-7.5-9.2-12.6-16.5l-.6.3c.8 8.6.8 10.8.8 20.5v68.5h-15.6V5.4zM865.6 37.9c-6-13.7-18-20.7-34.8-20.7-12.2 0-21.8 3.7-30.1 11.6-8.4 8.1-12.6 17.8-12.6 29.9 0 24.2 17.3 41 42 41 10.3 0 19.9-3 27.2-8.6 4.1-3.2 6.8-6.2 11.6-12.9l12.9 8.4c-6.4 8.4-10.7 12.7-17 17-9.4 6-21.9 9.7-34.3 9.7-18.3 0-29.9-4-40.5-13.2-11-9.9-17.3-24.8-17.3-40.5 0-33.4 22.9-56.1 56.6-56.1 12.6 0 25 3.3 35.1 9.2 7.6 4.5 12.6 9.7 17 18l-15.8 7.2z"/></svg>
                    </h2>
                    <p
                        className={`${content.center} ${content.white} ${content.ttu} ${content.intro} ${content.introLg} ${content.copy}`}
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-duration="600"
                        data-sal-easing="ease-out-bounce"
                    >
                        {data.connect.title}
                    </p>

                    <MeetRow
                        title={data.connect.crit.title}
                        copy={data.connect.crit.copy}
                        listItems={data.connect.crit.listItems}
                        clickHandler={() => {
                            if (!window.Calendly) return false;
                            window.Calendly.showPopupWidget(data.calendly);
                            return false;
                        }}
                    />
                    <MeetRow
                        title={data.connect.mission.title}
                        copy={data.connect.mission.copy}
                        listItems={data.connect.mission.listItems}
                        clickHandler={(e) => {
                            e.preventDefault();
                            window.open(createMailLink(data.connect.mission.email));
                        }}
                    />
                </Content>

            </div>
        </section>
    )
}

export default Meet