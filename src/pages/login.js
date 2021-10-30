import React from 'react';
import { Link} from 'react-router-dom'

class Login extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        hidden: true,
      };
      this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow() {
      this.setState({ hidden: !this.state.hidden });
    }
    render() {
        return(
        <div>     
      <header class="master-header container-fluid row-eq-height">
         <div class="container">
            <nav class="navbar navbar-expand-lg">
               <a class="nav-link" href="/#home"><img src="assets/images/logo.png" alt=""/></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"><img src="assets/images/menu-bar.png" alt=""/></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item"><a class="nav-link" href="/#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#how-it">How It Works</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#features">Features</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#faq">FAQ</a></li>
                    <li class="nav-item"><Link class="nav-link" to="/sign-in">Sign in</Link></li>
                    <li class="nav-item"><Link  class="nav-link get-btn" to="/sign-up">Get Started</Link></li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
      <div class="signup-section">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 m-auto">
                  <div class="sigup-form-sign1 login-form">
                     <div class="sigup-form-sign">
                        <h3>Hello ! Welcome back.</h3>
                        <p>Log in with your data that you entered duruing Your registration</p>
                        <form>
                           <div class="form-row">
                              <div class="col-sm-12">
                                 <input type="text" class="form-control" placeholder="Email  Address *"/>
                              </div>
                              <div class="col-sm-12">
                                 <input type={this.state.hidden ? 'password' : 'text'} class="form-control" placeholder="Password *"/>
                                 <a onClick={this.toggleShow} style={{ display: (this.state.hidden ? 'none' : 'block') }}> <i class="fa fa-eye"></i></a>
                                 <a onClick={this.toggleShow} style={{ display: (this.state.hidden ? 'block' : 'none') }}> <i class="fa fa-eye-slash"></i></a>
                                 <a href="#" class="forgot-btn">Forgot Password</a>
                              </div>
                              <div class="col-sm-12">
                                 <button type="submit" class="">Start Now !</button>
                                 <p>Don’t have an account? <Link to='/sign-up'>Sign up</Link></p>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>)
    }
}

export default Login;