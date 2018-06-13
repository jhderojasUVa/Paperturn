class Slideshow_component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      slideshowImages: [],
      slideIndex: 0,
    }
  }

  getInitialState() {
    return { isloadling: true }
  }

  componentWillMount() {
    // If the component mount let's do the fetch
    return fetch('./php/sendjson.php', {
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
    //showSlide(this.state.slideIndex);
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

        return (
          <div className="myslide" key={index}>
            <div style={divstyle}></div>
          </div>
        )

      });
    }
    // "Print" all the carousel
    return (
      <div id="slideshow">
          {theimages}
      </div>
    )
  }

}

ReactDOM.render(
    <Slideshow_component />,
    document.getElementById("slideshow")
  );
