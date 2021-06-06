import React from 'react';
import './BlogPost.css';
const BlogPost = (props) => {
    const { authorImg, author, date, title, description } = props.blogsData;
    return (
        <div className="col-md-4 card">
            <div className="blog-card p-2">
                <div className="bloger-area">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={authorImg} alt="" className="mx-3" />
                        </div>
                        <div className="col-md-7">
                            <h5>{author}</h5>
                            <p className="text-secondary">{date}</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <h5 className="pb-2">{title}</h5>
                    <p className="text-secondary pb-3">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default BlogPost;