import React from 'react';
import { Link} from 'react-router-dom';
class Header extends React.Component{
    render() {
        return(
        <div>     
        <header class="master-header container-fluid row-eq-height">
        <div class="container">
           <nav class="navbar navbar-expand-lg">
           <Link class="navbar-brand" to="/"><img src="assets/images/logo.png" alt=""/></Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"><img src="assets/images/menu-bar.png" alt=""/></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                    <li class="nav-item"><a class="nav-link" href="#how-it">How It Works</a></li>
                    <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
                    <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
                    <li class="nav-item"><Link class="nav-link" to="/sign-in">Sign in</Link></li>
                    <li class="nav-item"><Link  class="nav-link get-btn" to="/sign-up">Get Started</Link></li>
                 </ul>
              </div>
           </nav>
        </div>
        </header>
     </div>
     )
  }
}
export default Header;