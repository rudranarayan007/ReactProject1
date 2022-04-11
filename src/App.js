function App () {
    return (  

     <div class="wrapper">
    <div class="title">
      SIGN-UP FORM
    </div>
    <div class="form">

       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"  id="fname" />
       </div>  

        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input" id="lname" />
       </div> 

       <div class="inputfield">
          <label>Email Id</label>
          <input type="text" class="input" id="email" />
       </div> 


       <div class="inputfield">
        <label>DOB</label>
        <input type="date" class="input" id="dob" />
     </div> 

     <div class="inputfield">
        <label>Gender</label>
        <div class="custom_select">
          <select id="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Qualification</label>
        <div class="custom_select">
          <select id="qualification">
            <option value="">Select</option>
            <option value="Btech">B.Tech</option>
            <option value="Mtech">M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>
     </div> 

     <div class="inputfield">
        <label> Password</label>
        <input type="password" class="input" id="pw" required />
     </div> 

      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input" id="pwa" required/>
       </div> 

      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div>

      <div class="inputfield">
        <a href="login.html">
            <button type="button" onclick="signup()" class="btn"> SignUp </button>
        </a>
      </div>
    </div>

    <div class="wrapper">
        <div class="title">
          LOGIN 
        </div>
        <div class="form">

           <div class="inputfield">
              <label>Email Id</label>
              <input type="text" class="input" id="email"/>
           </div> 
         <div class="inputfield">
            <label> Password</label>
            <input type="password" class="input" id="pass"/>
         </div> 
          <div class="inputfield">
            <button type="button" onclick="login()" class="form-control btn btn-primary"> Login </button>
          </div>


        </div>
    </div>	
</div>
) 
}

export default App;

