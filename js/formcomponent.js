class Form_component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      theresult: ''
    }
    // The methods
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlenameChange = this.handlenameChange.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
  }

  handlenameChange(event) {
    // This set the state when you change the name
    this.setState({
      username: event.target.value
    });
  }

  handleemailChange(event) {
    // This set the state when you change the email
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    // First we must not make the submit, you know
    event.preventDefault();

    // The data is on the state of the component so, let's do the fetch
    fetch('savedatabase.php', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      // Let's send a JSON ;)
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON.correct == false) {
        // Wops! some errors from the server side, lets see them!
        var showerrors = '';
        for (var i = 0; i < responseJSON.errors_string.length; i++) {
          showerrors += responseJSON.errors_string[i] + '\n';
        }
        // Well this is not really needed but it's allways ok (or not)
        // This depends on the UX but for now, lets show an alert to the user
        alert('Woops! There was some errors:\n' + showerrors);
        this.setState({
          theresult: showerrors
        });
      } else {
        // Everything is ok! nice!
        this.setState({
          theresult: 'Congrats!, user added',
          username: '',
          email: ''
        })
      }
    })
    .catch((error) =>{
      // The big one error!
      alert('There was an error sending your data!');
      throw('Error sending!\n'+error);
    })
    ;
  }

  render() {
    // The rendering
    // Let's make several conditions changing and showing a comment for the user if it's new
    if (this.state.theresult == '') {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.username} onChange={this.handlenameChange} required placeholder="Name" />
          <input type="email" name="email" value={this.state.email} onChange={this.handleemailChange} required placeholder="Email" />
          <input type="submit" value="Send" />
        </form>
      )
    } else if (this.state.theresult == 'Congrats!, user added') {
      // If it's ok
      return(
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.username} onChange={this.handlenameChange} required placeholder="Name" />
          <input type="email" name="email" value={this.state.email} onChange={this.handleemailChange} required placeholder="Email" />
          <input type="submit" value="Send" />
          <div class="alert alert-success" role="alert"><strong>Nice</strong>: {this.state.theresult}</div>
        </form>
      )
    } else {
      // If it's not showing the errors!
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.username} onChange={this.handlenameChange} required placeholder="Name" />
          <input type="email" name="email" value={this.state.email} onChange={this.handleemailChange} required placeholder="Email" />
          <input type="submit" value="Send" />
          <div class="alert alert-danger" role="alert"><strong>Sorry, there was some errors</strong>: {this.state.theresult}</div>
        </form>
      )
    }
  }

}

ReactDOM.render(
    <Form_component />,
    document.getElementById("form")
  );
