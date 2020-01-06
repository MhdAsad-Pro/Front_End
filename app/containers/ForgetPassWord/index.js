import React from 'react';
import './ForgetPassword.css';
//import { Container } from 'react-bootstrap';
export default  function ForgetPassword(props){
return(

  <section>
  <div class="sidenav">
           <div class="login-main-text">
              <h2>Application<br/> Login Page</h2>
              <p>Login  from here to access.</p>
           </div>
        </div>
        <div class="container">
        <div class="main">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="login-form">
                 <form>
                 <div class="text-center">
                    <h3><i class="fa fa-lock fa-8x"></i></h3>
                    <h2 class="text-center">Reset Password </h2>
                    <br/>
                    <div class="panel-body">
      
                      
      
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                            <input id="email" name="email" placeholder="Email" class="form-control"  type="mail"required/>
                          </div>
                        </div>
                        
                       
                        <div class="form-group">
                          <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Send" type="submit"/>
                        </div>
                        
                        <input type="hidden" class="hide" name="token" id="token" value=""/> 
                      
      
                    </div>
                  </div>
                
  
          
                 </form>
              </div>
           </div>
        </div>
        </div>
        </section>    
);
} 