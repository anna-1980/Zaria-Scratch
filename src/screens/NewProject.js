import { Outlet, Link } from "react-router-dom";

const NewProject = () => {
  return (
    <div className="container-column">
        <div className='textAlignCenter'>
            <h3 >Add New Project </h3>
        </div>
        <form  autoComplete='off'>
            <div className='formFields'>
                <label htmlFor='Title' >
                Title:
                </label>
                <input type='text' />
            </div>
            <div className='formFields'>
                <label htmlFor='description' >
                Description:
                </label>
                <input type='text' cols="40" rows="10" />
            </div>
            <div className='formFields'>
                <label htmlFor='url'  >
                Link:
                </label>
                <input type='text'/>
            </div>
           
            <button type='submit' className='submitButton' >
            submit
            </button>
            <Link to={`/userProfile`} >
                <button className='backToUserProfile' >
                &#x003C;  
                    <button className="tiptext"  >back to Profile</button>
                </button>
            </Link>
            </form>


    </div>
  )
}

export default NewProject