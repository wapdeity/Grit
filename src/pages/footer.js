import React from 'react';
import { Link} from 'react-router-dom'
class Footer extends React.Component{
    render() {
        return(
        <div>     
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
                       <h4>Subscribe</h4>
                       <p>Subscribe to our newsletter & stay updated</p>
                       <form>
                       <input type="text" name="" placeholder="Your Email*"/>
                       <button>Submit</button>
                    </form>
                    </div>
                 </div>
              </div>
              <h5>© 2020 All Rights Reserved Grit, Inc. | <a href="#">Privacy & Policy</a> </h5>
           </div>
        </div>
     </footer>
     </div>
     )
  }
}
export default Footer;