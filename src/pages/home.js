import React from 'react';
import { Link} from 'react-router-dom';

class Home extends React.Component{
 
   // constructor(props) {
   //    super(props);
   //    this.state = {value: ''};
  
   //    this.handleChange = this.handleChange.bind(this);
   //    this.handleSubmit = this.handleSubmit.bind(this);
   //  }
  
   //  handleChange(event) {
   //    this.setState({value: event.target.value});
   //  }
  
   // handleSubmit(event) {
   //    console.log(this.state.value);
   //    event.preventDefault();
   // }
   
   handleSubmit = e => {
      e.preventDefault();
      let emailAddress = this.email.value;
      let path = `sign-up?email=${emailAddress}`;
      // this is the part !!!
      this.props.history.push(path);
    };

    
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
     <div class="slider-bar">
        <div class="container" id="home">
           <div class="row your-crypto-re">
              <div class="col-lg-6 col-md-12 col-sm-12">
                 <div class="slider-text">
                    <div class="slider-box">
                       <h2>Crypto Investing<br/><b>made <span>simple.</span></b> </h2>
                       <p>automatically round up transactions, payroll, bills, or credit payments and invest in crypto strategies</p>
                       <div class="slider-btn">
                          <a href="#" class="slider-btn-hover"><i class="fab fa-apple"></i>  App Store</a>  <a href="#"> <i class="fab fa-google-play"></i> Google Play</a>
                       </div> 
                    </div>
                 </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                 <div class="slid-mobile">
                    <div class="slid-mobile1">
                       <img src="assets/images/slider-mobile.png"/>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <img src="assets/images/slider-bottom.png" width="100%" alt=""/>
     <div class="makes-buying" id="how-it">
        <div class="container">
           <h2>Grit makes buying crypto</h2>
           <h5>easy & fun</h5>
           <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                 <div class="makes-box">
                    <div class="makes-box1">
                       <i class="fa fa-credit-card"></i>
                       <h3>Securely link your debit or credit card...</h3>
                       <p>Grit is compatible with hundreds of
                          banks and credit cards. How awesome
                          is that? 
                       </p>
                    </div>
                 </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                 <div class="makes-box makes-1">
                    <div class="makes-box1">
                       <i class="fa fa-shopping-cart"></i>
                       <h3>Make your normal purchases...</h3>
                       <p>Grit rounds up from your normal
                          spending to the nearest dollar, and
                          invests in the crypto you choose. 
                       </p>
                    </div>
                 </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                 <div class="makes-box makes-2">
                    <div class="makes-box1">
                       <i class="fas fa-chart-line"></i>
                       <h3>Easily track the growth of your investments </h3>
                       <p>Manage your portfolio all without
                          leaving the app. You can even snooze
                          investing at anytime. 
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div class="great-time-all" id="features">
        <div class="container">
           <h2>Now is a great time to start...<br/>
              your future-self with thank you 
           </h2>
           <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                 <div class="great-time-1">
                    <img src="assets/images/great-time-1.png" alt=""/>
                 </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                 <div class="great-tabing-divmain">
                    <div class="great-tabing-div">
                       <img src="assets/images/icon_automation_1.png" alt=""/>
                       <p>Automation helps you grow your account without the hassle.</p>
                    </div>
                    <div class="great-tabing-div great-tabing-divb">
                       <img src="assets/images/icon_coins_2.png" alt=""/>
                       <p>Your funds are kept in your own wallet with our amazing exchange partner</p>
                    </div>
                    <div class="great-tabing-div great-tabing-divb">
                       <img src="assets/images/icon_control_3.png" alt=""/>
                       <p>This means that you have full control, nope...we don't lock up your crypto. </p>
                    </div>
                    <div class="great-tabing-div great-tabing-divb">
                       <img src="assets/images/icon_safe _3.png" alt=""/>
                       <p>Grit makes it safe, secure, and hassle free to buy crypto </p>
                    </div>
                 </div>
              </div>
           </div>
           <div class="row your-crypto-row your-crypto-re">
              <div class="col-lg-6 col-md-6 col-sm-12">
                 <div class="your-crypto1">
                    <div class="your-crypto">
                       <h2>Choose your roundup type & choose your crypto.</h2>
                       <p>Want to grow faster? You can choose traditional, 50 cent,
                          or $1 round ups for every transaction. 
                       </p>
                       <ul>
                          <li>Choose your round-up style</li>
                          <li>Choose your crypto</li>
                          <li>Pause your roundups anytime</li>
                       </ul>
                       <Link to='/sign-up'>Get Started</Link>
                    </div>
                 </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                 <div class="great-time-1">
                    <img src="assets/images/your_crypto.png" alt=""/>
                 </div>
              </div>
           </div>
           <div class="row your-crypto-row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                 <div class="great-time-1">
                    <img src="assets/images/your_crypto2.png" alt=""/>
                 </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                 <div class="your-crypto1">
                    <div class="your-crypto">
                       <h2>Buy more crypto anytime you like! </h2>
                       <p>Automation is great, but sometimes you just need
                          to up your investment game and buy more right
                          now! Rest assured, we got you covered there too. 
                       </p>
                       <ul>
                          <li>Buy more crypto anytime</li>
                          <li>Up to $10K per transaction</li>
                          <li>You're in control</li>
                       </ul>
                       <Link to='/sign-up'>Get Started</Link>
                       
                    </div>
                 </div>
              </div>
           </div>
           <div class="row your-crypto-row your-crypto-re">
              <div class="col-lg-6 col-md-6 col-sm-12">
                 <div class="your-crypto1">
                    <div class="your-crypto">
                       <h2>Your phone, and bank, that's all you need!</h2>
                       <p>All the power of automation in your pocket. Roundup,
                          Buy More and withdraw anytime with ease.  
                       </p>
                       <div class="slider-btn crypto-btn">
                          <a href="#" class="slider-btn-hover"><i class="fab fa-apple"></i>  App Store</a>  <a href="#"> <i class="fab fa-google-play"></i> Google Play</a>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                 <div class="great-time-1">
                    <img src="assets/images/your_crypto3.png" alt=""/>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div class="faq-section" id="faq">
        <div class="container">
           <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                 <div class="faq-box1">
                    <div class="faq-box">
                       <h2>Frequently asked questions</h2>
                       <p>You have the questions...we have the answers </p>
                       <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li class="nav-item">
                             <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Support</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Fees</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">General</a>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                 <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      
                       <div id="accordion" class="faq-section-accordion">
                          <div class="card">
                             <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                   <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   How to contact with Customer Service?
                                   </button>
                                </h5>
                             </div>
                             <div id="collapseOne" class="collapse show faq-collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                   You can find the support bubble at the bottom right of this website, or in the app under settings.
                                </div>
                             </div>
                          </div>
                          <div class="card">
                             <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   How delete my account?
                                   </button>
                                </h5>
                             </div>
                             <div id="collapseTwo" class="collapse faq-collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                   You can delete your account in app settings by verifying your identity. You can also contact customer support.
                                </div>
                             </div>
                          </div>
                       </div>


                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                       
                       <div id="accordion" class="faq-section-accordion">
                          <div class="card">
                             <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                   <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                                   Does Grit keep my cryptocurrency?
                                   </button>
                                </h5>
                             </div>
                             <div id="collapseOne1" class="collapse show faq-collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                  Grit doesn’t hold any of your funds or cryptocurrency. We use a third party custodian to keep your coins more safe than a pirates treasure map. You can also send your coins to your preferred wallet or bank account at any time.
                                </div>
                             </div>
                          </div>
                          <div class="card">
                             <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                   Is there any customer pricing system?
                                   </button>
                                </h5>
                             </div>
                             <div id="collapseTwo2" class="collapse faq-collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                   We charge a flat fee of $5 per month. This allows us to keep transaction rates lower than anyone else and provide all the amazing features within the app.
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                     
                       <div id="accordion" class="faq-section-accordion">
                          <div class="card">
                             <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                   <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne">
                                   How much will I be able to make with Grit?
                                   </button>
                                </h5>
                             </div>
                             <div id="collapseOne11" class="collapse show faq-collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                   Let’s say you chose to round up $0.50 cents on every purchase; You would invest an average of $1.50/day which is $45/month. If you used Grit for one month in 2013, you would have made $6787. :) 
                                </div>
                             </div>
                          </div>
                          <div class="card">
                             <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo22" aria-expanded="false" aria-controls="collapseTwo">
                                   Can I send my crypto to an external wallet source?
                                   </button>
                                </h5>
                             </div>
                             <div id="collapseTwo22" class="collapse faq-collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                   Of course. You can withdraw your funds in fiat or crypto to either a bank account or an external wallet that supports the type of crypto.
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <footer>
        <div class="footer-section">
           <div class="container">
              <div class="row">
                 <div class="col-lg-4 col-md-6 col-sm-12">
                    <h4>Press</h4>
                    <ul>
                       <li><a href="#">Product Hunt</a></li>
                       <li><a href="#">CES</a></li>
                       <li><a href="#">CNBC</a></li>
                    </ul>
                 </div>

                 <div class="col-lg-4 col-md-6 col-sm-12">
                     <div class="news-letter">
                       <p>Take control of your money Start your portfolio today andget $5 in Bitcoin with code 21OCT5 →</p>
                       <form onSubmit={this.handleSubmit}>
                          <input type="email" ref={input => (this.email = input)}  placeholder="Your Email*" required/>
                          <button type="submit" value="Submit" >SignUp</button>
                        </form>
                    </div>
                 </div>
              </div>
              <h5>© 2020 All Rights Reserved Grit, Inc. | <a href="#">Privacy & Policy</a> </h5>
           </div>
        </div>
     </footer>
     </div>)
    }
}

export default Home;