import React, { Component } from "react";
import './Detail.css';
import 'font-awesome/css/font-awesome.min.css';
class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="left">
          <div className="pictures">
            <img src={this.props.game.logo} className="logo"/>
            <img src={this.props.game.classification} className="classification"/>
          </div>
          <div className="platforms">
              <h6>Others Platforms</h6>
              <div>
                {this.props.game.platforms.map(platform => {
                       return <img key={platform.name} className="platform-logo" src={platform.logo}/>;
                 })}
              </div>
          </div>
        </div>
        <div className="right">
            <h1>{this.props.game.title}</h1>
            <div>{this.props.game.description}</div>
            <div className="social">
              <a href="#">
                  <i className="fa fa-facebook-official" aria-hidden="true" title="Facebook"></i>
              </a>
              <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" title="Twitter"></i>
              </a>
              <a href="#" title="Google Plus">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </div>
            <div className="specs">
              <table>
                <tbody>
                  <tr>
                    <th>Release Date:</th>
                    <td>{this.props.game.date}</td>
                  </tr>
                  <tr>
                    <th>Production:</th>
                    <td>{this.props.game.production}</td>
                  </tr>
                  <tr>
                    <th>Distribution:</th>
                    <td>{this.props.game.distribution}</td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td>{this.props.game.gender}</td>
                  </tr>
                  <tr>
                    <th>Web Site:</th>
                    <td>
                      <a href={this.props.game.website} title="Visit Official website">Visit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
    );
  }
}

export default Detail;
