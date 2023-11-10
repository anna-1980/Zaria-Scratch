<button onClick={onDeleteBtn(_id)} className="btn-del">
X
</button>

const signedUser = JSON.parse(localStorage.getItem("user"));
// const {_id: user} = JSON.parse(signedUser);

const onDeleteBtn = (id, adminId) => {
  // alert(`Are you sure you want to delete this project   ${id} ??`);
  // write a function to delete project with specific id

  console.log("ID >>>", id);
  console.log("USER ID >>>", signedUser);
  deleteProject(id, signedUser);
};