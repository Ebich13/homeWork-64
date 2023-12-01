// EditPostForm.tsx
import React, { useState, useEffect } from 'react';
import axiosApi from '../../axiosApi.ts';
import { Post } from '../../type';
import AddPostForm from "../AddPostForm/AddPostForm.tsx";
import { useParams, useNavigate } from 'react-router-dom';  // Импортируем useParams и useNavigate

interface Props {
    onPostUpdated: (updatedPost: Post) => void;
}

const EditPostForm: React.FC<Props> = ({ onPostUpdated }) => {
    const { id } = useParams();  // Получаем значение postId с помощью useParams
    const [post, setPost] = useState<Post | null>(null);
    const navigate = useNavigate();  // Используем хук useNavigate

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosApi.get(`/posts/${id}.json`);
                const postData = response.data;
                const postDetails: Post = postData ? { id, ...postData } : null;
                setPost(postDetails);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        fetchPost();
    }, [id]);

    const handleUpdatePost = async (updatedPost: Post) => {
        try {
            await axiosApi.put(`/posts/${id}.json`, updatedPost);
            onPostUpdated(updatedPost);
            navigate('/');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div className="container mt-5">
            {post ? (
                <>
                    <h2>Edit Post</h2>
                    <AddPostForm
                        initialData={{ title: post.title, content: post.content }}
                        onPostSubmit={handleUpdatePost}
                        isEditMode
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditPostForm;

