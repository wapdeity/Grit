import React from 'react';
import { Link} from 'react-router-dom'
class Registeration extends React.Component{
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
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="sigup-form1">
                     <div class="sigup-up1">
                        <h2>Join 68+ million people<br/> on Grit</h2>
                        <p>Buy, sell, and manage your crypto on the<br/>
                           world’s most trusted crypto exchange
                        </p>
                        <ul>
                           <li>Choose your round-up style</li>
                           <li>Choose your crypto</li>
                           <li>Pause your roundups anytime</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="sigup-form-sign1">
                     <div class="sigup-form-sign">
                        <h3>Create your account today</h3>
                        <p>Required fields have an asterisk: *</p>
                        <form>
                           <div class="form-row">
                              <div class="col-sm-6">
                                 <input type="text" class="form-control" placeholder="First name *"/>
                              </div>
                              <div class="col-sm-6">
                                 <input type="text" class="form-control" placeholder="Last name *"/>
                              </div>
                              <div class="col-sm-12">
                                 <input type="text" class="form-control" placeholder="Email *"/>
                              </div>
                              <div class="col-sm-12">
                                 <input type="Password" class="form-control" placeholder="Password *"/>
                              </div>
                              <div class="col-sm-12">
                                 <select>
                                    <option>Select State</option>
                                    <option>Western New York</option>
                                    <option>Central New York</option>
                                    <option>population </option>
                                    <option>Seneca County</option>
                                 </select>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                 <label class="form-check-label" for="gridCheck">
                                 I certify that I am 18 years of age or older, and agree to the <a href="#">User Agreement</a> and <a href="#">Privacy Policy.</a>
                                 </label>
                              </div>
                              <div class="col-sm-12">
                                 <button type="submit" class="">Create account</button>
                              </div>
                           </div>
                     
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="security-sign">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="security-sign-img">
                     <img src="assets/images/sign-botton.png" alt=""/>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="security-sign-text1">
                     <div class="security-sign-text">
                        <h2>Security and<br/>
                           simplicity, all in<br/>
                           one place
                        </h2>
                        <div class="security-sign-box">
                           <img src="assets/images/view-icon1.png" alt=""/>
                           <div class="security-txt">
                              <h3>View your portfolio</h3>
                              <p>See how your crypto is performing and<br/> overall market gains and losses</p>
                           </div>
                        </div>
                        <div class="security-sign-box">
                           <img src="assets/images/view-icon2.png" alt=""/>
                           <div class="security-txt">
                              <h3>Set automatic recurring buys</h3>
                              <p>Invest in cryptocurrency slowly over time by<br/> scheduling buys daily, weekly, or monthly</p>
                           </div>
                        </div>
                        <div class="security-sign-box">
                           <img src="assets/images/view-icon3.png" alt=""/>
                           <div class="security-txt">
                              <h3>Access your crypto anywhere</h3>
                              <p>Buy, sell, and manage your crypto on the go<br/> with our top-rated apps</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     </div>)
    }
}

export default Registeration;