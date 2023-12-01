// AddPostForm.tsx
import React, { useState, useEffect } from 'react';
import axiosApi from '../../axiosApi.ts';
import { Post } from '../../type';
import { useNavigate } from 'react-router-dom';

interface Props {
    initialData?: { title: string; content: string };
    onPostSubmit: (newPost: Post) => void;
    isEditMode?: boolean;
}

const AddPostForm: React.FC<Props> = ({ initialData, onPostSubmit, isEditMode }) => {
    const navigate = useNavigate();
    const [newPostTitle, setNewPostTitle] = useState(initialData?.title || '');
    const [newPostContent, setNewPostContent] = useState(initialData?.content || '');

    useEffect(() => {
        if (initialData && isEditMode) {
            setNewPostTitle(initialData.title);
            setNewPostContent(initialData.content);
        }
    }, [initialData, isEditMode]);

    const isFormValid = newPostTitle.trim() !== '' && newPostContent.trim() !== '';

    const handleAddPost = async () => {
        try {
            if (!isFormValid) {
                console.error('Please fill out all fields.');
                return;
            }

            const response = await axiosApi.post('/posts.json', {
                title: newPostTitle,
                content: newPostContent,
                date: new Date().toLocaleString(),
            });

            const newPost = {
                id: response.data.name,
                title: newPostTitle,
                content: newPostContent,
                date: new Date().toLocaleString(),
            };

            navigate('/');
            onPostSubmit(newPost);
            setNewPostTitle('');
            setNewPostContent('');



        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleEditPost = async () => {
        if (!isFormValid) {
            console.error('Please fill out all fields.');
            return;
        }

        const updatedPost = {
            id: initialData?.id,
            title: newPostTitle,
            content: newPostContent,
            date: new Date().toLocaleString(),
        };
        onPostSubmit(updatedPost);
        navigate('/');
    };

    const handleSubmit = isEditMode ? handleEditPost : handleAddPost;

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="postTitle" className="form-label">
                    Title:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="postTitle"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="postContent" className="form-label">
                    Content:
                </label>
                <textarea
                    className="form-control"
                    id="postContent"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                />
            </div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!isFormValid}
            >
                {isEditMode ? 'Edit Post' : 'Add Post'}
            </button>
        </form>
    );
};

export default AddPostForm;






