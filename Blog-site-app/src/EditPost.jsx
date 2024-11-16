import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './api/posts';
import { format } from 'date-fns';
import { useContext } from "react";
import DataContext from "./context/DataContext";

const EditPost = () => {

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const { posts, setPosts } = useContext(DataContext);

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [posts, setEditBody, setEditTitle])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
          const response = await api.put(`/posts/${id}`, updatedPost);
          setPosts(posts.map(post => post.id === id ? {...response.data} : post));
          setEditTitle('');
          setEditBody('');
          navigate('/');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }

    return (
        <main className="NewPost">
            {editTitle && 
                <>
                    <h1>Edit Post</h1>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="editTitle">Title</label>
                        <input 
                            type="text"
                            id="editTitle"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)} 
                        />
                        <label htmlFor="editBody">Post:</label>
                        <textarea 
                            id="editBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            } 
            {!editTitle && 
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's dissappointing</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>

            }   
        </main>
        

    )
}

export default EditPost