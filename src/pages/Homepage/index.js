import React, { Component} from 'react'

class Homepage extends Component {
    render(){
        const mainBanner = {
        backgroundColor: "white",
        padding: "10px",
        marginTop:"18px"
        };
        


        return (
            <div className="row">
                <div className="col s12" style={mainBanner}><h2 className="brown-text text-darken-3 center">Coffee, anyone ? </h2></div>
                    <div class="col s12 m4 l2"></div>

                <div className="col s12 m4 l8">
                    <div className="col s6">
                        <div className="card hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="https://images.unsplash.com/photo-1604935113440-d2e87e1d1dfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal transparent orange lighten-5">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card hoverable ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="https://images.unsplash.com/photo-1604935113440-d2e87e1d1dfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal  transparent orange lighten-5">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card hoverable small">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="https://images.unsplash.com/photo-1604935113440-d2e87e1d1dfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4 transparent">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal  transparent orange lighten-5">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card hoverable small" style={{padding:"0"}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="https://images.unsplash.com/photo-1604935113440-d2e87e1d1dfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal  transparent orange lighten-5">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                </div>                
                
            </div>
        )
    }
}

export default Homepage