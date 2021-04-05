import React from 'react';
import Nav from './Nav'
import '../css/Nav.css';
const NavComponent = () => {
    return (
        <div>
            <div>
        <nav class=" nav-top navbar navbar-light navbar-expand-md sticky-top navigation-clean-button"
            style={{height:"80px",backgroundColor:"#37434d", color:"#ffffff"}}>
            <div class="container-fluid"><a class="navbar-brand color-white" href="#"><i
                        class="fa fa-globe"></i>&nbsp; Free-to-Lance</a><button data-toggle="collapse" class="navbar-toggler"
                    data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link active" style={{color:"#ffffff"}} href="#"><i
                                    class="fa fa-home"></i>&nbsp;Home</a></li>
                        <li class="nav-item"><a class="nav-link active" style={{color:"#ffffff"}} href="#"><i
                                    class="fa fa-wpexplorer"></i>&nbsp;Explore</a></li>
                        <li class="nav-item"><a class="nav-link active" style={{color:"#ffffff"}} href="#"><i
                                    class="fa fa-star-o"></i>&nbsp;Features</a></li>
                        <li class="nav-item"><a class="nav-link active" style={{color:"#ffffff"}} href="#"><i
                                    class="fa fa-user-circle-o"></i>&nbsp;Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link active" style={{color:"#ffffff"}} href="#"><i
                                    class="fa fa-sign-in"></i>&nbsp;Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
        </div>
    )
}

export default NavComponent;





