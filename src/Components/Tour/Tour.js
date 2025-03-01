import React, { Component } from 'react'
import"./tour.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default class Tour extends Component {
    state = {
        showInfo:false
    };
    handleInfo = () =>{
        this.setState({
            showInfo: !this.state.showImfo
        });
    }
    render() {
        const{id,city,img,name,info} = this.props.tour;
        const{removeTour} = this.props;
        return (
            <article className="tour">
                <div className = "img-container">
                    <img src = {img} alt ="city tour"/>
                    <span className ="close_btn " onClick={() => removeTour(id)}>
                        <i className = "fas fa-window-close"/>
                        </span>
                        </div>
                        <div className = "tour-info">
                            <h3>{city}</h3>
                            <h4>{name}</h4>
                            <h5>
                                info{" "}
                                <span onClick ={this.handleInfo}>
                                    <i className = "fas fa-caret-square-down"/>
                                    
                                </span>
                            </h5>
                               {this.state.showInfo &&<p>{info}</p>}
                        </div>
            </article>
        );
    }
}
