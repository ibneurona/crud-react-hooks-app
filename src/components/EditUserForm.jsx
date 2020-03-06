import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name);
  setValue('username', props.currentUser.username);

  const onSubmit = (data, e) => {
    // console.log(data);
    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id,data)
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register(
          { require: { value: true, message: 'Valor requerido' } }
        )}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        // value={user.username}
        ref={
          register({ require: { value: true, message: 'Valor requerido' } })
        }
      />
      <span>{errors?.username?.message}</span>
      <button>Edit user</button>
    </form> 
  );
}
 
export default EditUserForm;