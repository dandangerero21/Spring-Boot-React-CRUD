import { useEffect, useState } from "react";
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import type { User } from './components/User';
import axios from "axios";
import './App.css';

function App() {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get<User[]>("http://localhost:8080/api/users");
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="app">
            <header className="app-header">
                <h1>User Messages Board</h1>
                <p>Share your thoughts with the community</p>
            </header>
            <UserForm onUserCreated={fetchUsers}/>
            <UserList 
                users={users}
                onUserDeleted={fetchUsers}
                onUserUpdated={fetchUsers}
            />
        </div>
    );
}

export default App;