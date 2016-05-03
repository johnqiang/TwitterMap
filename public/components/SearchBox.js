var SearchBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="searchBox">
        <h1>twittes</h1>
        <p>{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <SearchBox url="/TwitterAPI/search" />,
  document.getElementById('content')
);