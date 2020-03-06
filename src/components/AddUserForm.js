import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    data.id = null;
    props.addUser(data);
    e.target.reset();
  }


  return ( 
    <form onSubmit = {handleSubmit(onSubmit)}>
      <label>Name</label>
      <input 
        type="text" 
        name="name" 
        ref ={ register(
          {require: {value: true, message: 'Valor requerido'}}
        )} 
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input 
        type="text" 
        name="username" 
        // value={user.username}
        ref={
          register({ require: { value: true, message: 'Valor requerido' }})
        }
      />
      <span>{errors?.username?.message}</span>
      <button>Add new user</button>
    </form> 
  );
}
 
export default AddUserForm;