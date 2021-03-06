import { useAuth } from '../context/AuthContext';


const BasicForm= () => {
  const { user  } = useAuth();
    return(
        <div className="form">
        <form name="contact" method="post" className="basicForm">
        <input type="hidden" name="form-name" value="contact" />
          
            <label htmlFor="name">Name</label> 
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name here" 
                required/>
          
           
            <label htmlFor="email" >Email</label>  
            <input type="email" name="email" id="email" placeholder="Enter your email here" value={user.email} required />
         
            
            <label htmlFor="message" className="msgText"   >Message</label> 
            <textarea  name="message" id="message" cols="41" rows="10" required></textarea>
            
          {/* <div data-netlify-recaptcha="true"></div> */}
           
          <button type="submit" className="formButton">Send</button>
           
     
        </form>
      </div>
    
    )
}
export default BasicForm