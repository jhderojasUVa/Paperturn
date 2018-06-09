class Slideshow_component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      slideshowImages: []
    }
  }

  getInitialState() {
    return { isloadling: true }
  }

  componentWillMount() {
    // If the component mount let's do the fetch
    return fetch('sendjson.php', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseInJSON) => {
      this.setState({
        slideshowImages: responseInJSON.images,
        isloading: false
      })
    })
    .catch((error) => {
      // There was an error, let's inform the user
      alert('There was an error fetching de JSON!');
      throw('Error fetching JSON!');
    });
  }

  render() {
    // First on the render create the elements
    if (this.state.isloading === false) {
      var theimages = this.state.slideshowImages.map((image, index) => {
        var divstyle = {
          width: 350,
          height: 300,
          backgroundImage: 'url(images/'+image+')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }

        if (index == 0) {
          // Bootstrap carousel need to be "activated" with the active class
          return (
            <div className="carousel-item active" key={index}>
              <div style={divstyle}></div>
            </div>
          )
        } else {
          return (
            <div className="carousel-item" key={index}>
              <div style={divstyle}></div>
            </div>
          )
        }
      });
    }

    // "Print" all the carousel
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {theimages}
        </div>
      </div>
    )
  }

}

ReactDOM.render(
    <Slideshow_component />,
    document.getElementById("slideshow")
  );
