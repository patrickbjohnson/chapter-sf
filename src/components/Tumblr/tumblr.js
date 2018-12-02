import React, { Component } from 'react'
import axios from "axios";
import chunk from 'lodash.chunk'

import JoinUs from '../JoinUs'
import styles from './tumblr.module.css'

class Tumblr extends Component {
    constructor(props) {
        super(props)

        this.ALLOWED_TAG = 'chapterwebsiteimagery'
        this.storage = window.localStorage;
        this.state = {
            photos: null,
        }
    }

    componentDidMount() {
        this.storage.removeItem('photos')
        const storagePhotos = this.storage.getItem('photos');
        if (storagePhotos) {
            this.setState({
                success: true,
                photoSets: chunk(JSON.parse(storagePhotos), 2)
            })
        } else {
            axios.get(
                'http://api.tumblr.com/v2/blog/progresslabs.tumblr.com/posts?api_key=Yv0jdl1xx597BX1E0Pesb3xoMzy3Apk8166zaSHdPwVOxIbvOw', 
                {headers: {'Accept': 'application/json'}}
            )
            .then((response) => {
                console.log(response)
                this.setState({
                    success: (response.status === 200 && response.statusText === 'OK')
                })
    
                this.processPosts(response.data.response.posts)
            })
            .catch((error) => {
                console.log(error)
            });
        }    
    }

    processPosts = (posts) => {
        let photos = [];

        posts.map((post) => {
            console.log(post)
            if (post.type === 'photo' && post.tags.includes(this.ALLOWED_TAG)) {
                photos.push({
                    alt: post.summary,
                    caption: post.caption,
                    src: post.photos[0].original_size,
                    url: post.short_url
                })
            }
        })

        this.storage.setItem('photos', JSON.stringify(photos));

        this.setState({
            photoSets: chunk(photos, 2)
        })

        return photos
    }

    render() {
        console.log(this.state.photoSets && this.state.photoSets[0])
        console.log(this.state.photoSets && this.state.photoSets[1])
        return (
            <>
                {(this.state.photoSets && this.state.photoSets[0].length == 2) &&
                    <section className={styles.section}>
                    {this.state.photoSets[0].map((photo, i) => {
                        return (
                            <div 
                                className={styles.imageWrap}
                                key={i}
                                style={{
                                    backgroundImage: `url(${photo.src.url})`
                                }}
                            >
                                {photo.caption && 
                                    <a className={styles.caption} href={photo.url}>
                                        <p dangerouslySetInnerHTML={
                                            {__html: photo.caption}
                                        }></p>
                                    </a>
                                }
                            </div>
                        )
                    })}
                    </section>
                }

                <JoinUs />

                {(this.state.photoSets && this.state.photoSets[1].length == 2) &&
                    <section className={styles.section}>
                    {this.state.photoSets[1].map((photo, i) => {
                        return (
                            <div 
                                className={styles.imageWrap}
                                key={i}
                                style={{
                                    backgroundImage: `url(${photo.src.url})`
                                }}
                            >
                                {photo.caption && 
                                    <a className={styles.caption} href={photo.url}>
                                        <p dangerouslySetInnerHTML={
                                            {__html: photo.caption}
                                        }></p>
                                    </a>
                                }
                            </div>
                        )
                    })}
                    </section>
                }
            </>
        )
    }
}

export default Tumblr