import React, {useEffect, useState } from "react";
import Search from "./Search";
import "./Home.css";
import Fetching from "./Fetching";
import CommentContainer from './CommentContainer';
import CommentPost from './CommentPost';
import { Link } from 'react-router-dom'

function Home() {
    const apiComment = "http://localhost:9292/create_comments";
    const [commentList, setCommentList] = useState([]);
    const [hideComment, setHideComment] = useState([true]);

    function handleHideComment() {
        setHideComment(!hideComment);
    };

    useEffect(() => {
        fetch(apiComment)
            .then(res => res.json())
            .then(setCommentList);
        
    }, []);
    
    function addComment(newComment) {
        setCommentList((commentList) => [...commentList, newComment]);
    }

    function deleteComment(commentToDelete) {
        setCommentList(commentList.filter((comento)=>comento.id !== commentToDelete.id));
     }



    return (
        <div className="Home">
            <div className="Main_Page">
                <ul className="Sidebar_Sect_Left">
                    <li className="Side_Bar_Links">
                        <Link to='/' className='Nav_Links'>Home</Link>
                    </li>
                    <li className="Side_Bar_Links">
                        <Link to='/' className='Nav_Links'>Explore</Link>                        
                    </li>
                    <li className="Side_Bar_Links">
                        <Link to='/signup' className='Nav_Links'>Signup</Link>
                    </li>
                    <li className="Side_Bar_Links">
                        <Link to='/contact' className='Nav_Links'>Contact Us</Link>
                    </li>
                    
                </ul>

                <div className="Main_Area">                
                    <div className="Hero_Head">
                        <h1>CAHAYO TECH BLOGS</h1>
                        <h3>Get Updates on Modern Technology</h3>  
                        <div className="Hero_Line">
                    </div>
                </div>
                    <Search />

                    <Fetching />
                    <div className="CommentsApp">
                        <button className="Hide_Show_Btn" onClick={ handleHideComment }>
                            Show/Hide form
                        </button>
                        { hideComment ? <CommentPost addComment={addComment } /> : null}
                    </div>

                    <CommentContainer commentList = {commentList} deleteComment={deleteComment} />


                    <div className="FooterNote">
                        By Earnest
                    </div>
                </div>
                
                <div className="Sidebar_Sect_Right">
                    <div className="Account_Info">
                        <img className="Account_Image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fd3LvBNTzUGkRTqBX2UMvbrbzNuzShL4ll3pI5YUZg&s"
                            alt="example"
                        />
                        <p>Welcome Back!</p>
                        <h3>Earnest!</h3>
                        <div className="Logout-Btn">
                            <Link to='/login' className='Nav_Links'>Logout</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;