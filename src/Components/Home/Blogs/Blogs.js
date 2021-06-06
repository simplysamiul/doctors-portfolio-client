import React from 'react';
import './Blogs.css';
import wilson from '../../../images/wilson.png';
import aliza from '../../../images/aliza.png';
import ema from '../../../images/ema.png';
import BlogPost from '../BlogPost/BlogPost';

const blogsData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: ema,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: aliza,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="container blogs p-5">
            <div className="blogs-title pb-5 text-center">
                <h5>OUR BLOGS</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="blogs-post card-deck">
                <div className="row">
                    {
                        blogsData.map(blogsData => <BlogPost blogsData={blogsData} key={blogsData.name}></BlogPost>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Blogs;