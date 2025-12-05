import { useState } from 'react';
import type { User } from './User';
import EditUserModal from './EditUserModal';

interface Props {
    users: User[];
    onUserDeleted: () => void;
    onUserUpdated: () => void;
}

export default function UserList({users, onUserDeleted, onUserUpdated}: Props) {
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }

        try {
            const axios = (await import('axios')).default;
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            onUserDeleted();
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user. Please try again.');
        }
    };

    const handleEdit = (user: User) => {
        setEditingUser(user);
    };

    const handleCloseModal = () => {
        setEditingUser(null);
    };

    return (
        <>
            <div className="user-list-container">
                <h2 className="user-list-header">Forum</h2>
                {users.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-state-icon">💬</div>
                        <p className="empty-state-text">No messages yet. Be the first to share!</p>
                    </div>
                ) : (
                    <ul className="user-list">
                        {users.map((u) => (
                            <li key={u.id} className="user-item">
                                <div className="user-content">
                                    <span className="user-name">{u.name}</span>
                                    <span className="user-message">{u.message}</span>
                                </div>
                                <div className="user-actions">
                                    <button 
                                        className="edit-button" 
                                        onClick={() => handleEdit(u)}
                                        title="Edit"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDelete(u.id)}
                                        title="Delete"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    isOpen={true}
                    onClose={handleCloseModal}
                    onUserUpdated={onUserUpdated}
                />
            )}
        </>
    );
}