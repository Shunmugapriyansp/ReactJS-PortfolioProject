import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile2.jpg';

class App extends Component {
    state={displayBio: false};
 /***    constructor(){
        super();
        this.state={displayBio: false}
        this.toggleDisplayBio= this.toggleDisplayBio.bind(this)
    }*/

   toggleDisplayBio= () =>{
            this.setState({displayBio: !(this.state.displayBio)}); 
   }
    
    render(){
       
        return (
        <div>
            <img src = {profile} alt ='profile' className='profile'/>
            <h1>Hello!</h1>
            <p>My name is Shunmugapriyan. Im a Test Automation Architect.</p>
            <p>I'm always looking forward to working on challenging projects</p>
            {
                this.state.displayBio?(
                    <div>
                        <p>I live in Pasadena, CA and I test pretty much everyday.</p>
                        <p>My strengths are API  testing, Selenium, UFT. Programming languages I know are Java, Groovy,VBScript, Python and Javascript.</p>
                        <p>Besides all that I enjoy listening music, driving long and staying at Beach! </p>
                        <button onClick = {this.toggleDisplayBio}>Show Less</button>
                    </div>
                    ):(
                        <div>
                            <button onClick = {this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
            }
            <hr/>
            <Projects />
            <hr/>
            <SocialProfiles />
        </div>
        )
    }
}
export default App;