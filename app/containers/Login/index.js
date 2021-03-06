import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <section>
      <div class="sidenav">
    
        
    
      </div>
      <div class="container">
        <div class="main">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="login-form">
              <form>
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-8x"></i></h3>
                  <h2 class="text-center">Login </h2>
                  <br />
                  <div class="panel-body">

                    

                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                        <input id="email" name="email" placeholder="Email" class="form-control here" type="text" required pattern="opine_cue@gmail.com" autocomplete="email" />

                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                        <input type="password" placeholder="Password" id="password" class="form-control" name="password" required minlength="8" required pattern="123456789" aria-describedby="passwordHint" autocomplete="current-password" />
                        
                      </div>
                    </div>
  
                    <div class="form-group">

                      <Link to='/dashboard' class="btn btn-info " type="submit" value="Login"> Login</Link>
                    </div>
                    <label class="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>

                    <br />
                    <Link to='/forget' class="pull-right">Forgot Password?</Link>
                    <input type="hidden" class="hide" name="token" id="token" value="" />

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