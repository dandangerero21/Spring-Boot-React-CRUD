import { useState } from 'react';
import axios from 'axios';

interface Props {
    onUserCreated: () => void;
}

export default function UserForm({ onUserCreated }: Props) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!name || !message) {
            alert('Please fill in all fields');
            return;
        }
        try {
            await axios.post('http://localhost:8080/api/users', { name, message });
            onUserCreated();
            setName('');
            setMessage('');
        } catch (error) {
            console.error('Error creating user:', error);
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
                const status = error.response?.status || 'Unknown';
                alert(`Error creating user (Status: ${status}): ${errorMessage}`);
                console.error('Response data:', error.response?.data);
            } else {
                alert(`Error creating user: ${error}`);
            }
        }
    }

    return (
        <div className="user-form-container">
            <form onSubmit={handleSubmit} className="user-form" autoComplete="off">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input
                        id="message"
                        type="text"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-input"
                        autoComplete="off"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add to Forum
                </button>
            </form>
        </div>
    )
}