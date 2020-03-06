import React,{ useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import {v4 as uuidv4} from 'uuid';
import EditUserForm from './components/EditUserForm'

function App() {

  //Data mockUp
  const userData = [
    { id: uuidv4(), name: 'Tania', username: 'floppdiskette'},
    { id: uuidv4(), name: 'Rodo', username: 'bigharddrive'},
    { id: uuidv4(), name: 'Karla', username: 'silliconi'}
  ]

  //state de el componente
  const [users, setUsers] = useState(userData);

  //Agregar usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  }

  //Eliminar usuarios
  const deletUser = id => {
    const arrayFiltrado = users.filter(user => user.id !== id)
    setUsers(arrayFiltrado);
  }

  //Editar Usuario
  const [editing, setEditing] = useState(false);
  const [currentUser,setCurrentUser] = useState({
    id: null, 
    name: '', 
    username: ''
  })

  const editUser = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => user.id === id ? updateUser : user))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? 
            ( <div>
                <h2>Edit User</h2>
                <EditUserForm
                  currentUser = {currentUser}
                  updateUser = {updateUser}
                />
              </div>
            ): 
            (
              <div>
                <h2>Add user</h2>
                <AddUserForm
                  addUser = {addUser}
                />
              </div>
            )
          
          }
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users = {users}
            deletUser = {deletUser}
            setEditing = {setEditing}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
