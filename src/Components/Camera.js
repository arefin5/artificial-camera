import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// imageplaceholder.png
import imageplaceholder from "../assets/image/imageplaceholder.png";
import { FaCamera, FaFolder } from "react-icons/fa";
import Webcam from "react-webcam";

class Camera extends Component {
    constructor(props) {
    super(props);
    this.cameraRef=React.createRef();  
     this.state = {
         capturedPhoto: imageplaceholder
     }    
}
    onCapture = () =>{
      console.log(this.cameraRef.current.getScreenshot());
        let photoBase64 = this.cameraRef.current.getScreenshot();
// console.log("photoBase64");
        this.setState({
            capturedPhoto: photoBase64
        });
    }
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5 text-center shadow-sm bg-white">
            <Col className="p-2" md={6} sm={12} lg={6}>
              {/* <img className="w-100" src={imageplaceholder} alt="imageplaceholder"  /> */}
              <Webcam
                className="w-100"
                audio={false}
                screenshotFormat="image/jpeg"
                ref={this.cameraRef}
              />
              <button onClick={this.onCapture} className="btn  btn-primary mt-3 btn-lg">
                <FaCamera />
                Save
              </button>
            </Col>
            <Col className="p-2   result" md={6} sm={12} lg={6}>
              <img
                className="w-100"
                src={this.state.capturedPhoto}
                alt="imageplaceholder"
              />
              <button className="btn  btn-primary mt-3 btn-lg">
                <FaFolder />
                Save
              </button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Camera;
