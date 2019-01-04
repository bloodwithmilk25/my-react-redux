import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    // set Ref to img to access it later
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // component loaded, but to get the image height we need
    // to wait for image itself to load:
    this.imageRef.current.addEventListener("load", this.setSpans);
    // when it's loaded eventually call function setSpans
  }

  setSpans = () => {
    // get image height
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
