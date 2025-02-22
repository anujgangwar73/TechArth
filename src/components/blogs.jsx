import React from 'react'
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';

const Blogs = () => {
    return (
        <>
            <div className='blog-article-cont'>
                <div className='blog-cont'>
                    <div>
                        <img src={blog2} width={"320px"} height={"250px"} />
                    </div>
                    <div className='date-text'>
                        November 20, 2024
                    </div>
                    <div className='blog-heading'>
                        Innovators Spotlight:
                        Revolutionized their
                        Industry with 3D
                        Printing
                    </div>
                    <div className='blog-content-text'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa...
                    </div>
                </div>
                <div className='blog-cont'>
                    <div>
                        <img src={blog1} width={"320px"} height={"250px"} />
                    </div>
                    <div className='date-text'>
                        November 28, 2024
                    </div>
                    <div className='blog-heading'>
                        Choosing the right
                        Fliament: A guide to
                        3D print materials
                        section
                    </div>
                    <div className='blog-content-text'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa...
                    </div>
                </div>
                <div className='more-blog-cont'>
                    <div>
                        Blog & Article
                    </div>
                    <div>
                        Latest Blogs
                    </div>
                    <div>
                        Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                    </div>
                    <div>
                        <button>
                            View More
                            <Icon path={mdiArrowRight} size={1} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs