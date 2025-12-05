import { useState, useEffect } from 'react';
import type { User } from './User';
import axios from 'axios';

interface Props {
    user: User;
    isOpen: boolean;
    onClose: () => void;
    onUserUpdated: () => void;
}

export default function EditUserModal({ user, isOpen, onClose, onUserUpdated }: Props) {
    const [name, setName] = useState(user.name);
    const [message, setMessage] = useState(user.message);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setName(user.name);
            setMessage(user.message);
        }
    }, [user, isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !message) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);
        try {
            await axios.put(`http://localhost:8080/api/users/${user.id}`, { name, message });
            onUserUpdated();
            onClose();
        } catch (error) {
            console.error('Error updating user:', error);
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
                alert(`Error updating user: ${errorMessage}`);
            } else {
                alert(`Error updating user: ${error}`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Edit User</h2>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit} className="user-form" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="edit-name">Name</label>
                        <input
                            id="edit-name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input"
                            disabled={isSubmitting}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edit-message">Message</label>
                        <input
                            id="edit-message"
                            type="text"
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-input"
                            disabled={isSubmitting}
                            autoComplete="off"
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="cancel-button" onClick={onClose} disabled={isSubmitting}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

