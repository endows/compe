App = React.createClass({
    render: function() {
        return (
            <div>
              <Login />
              <Join />
            </div>
        );
    }
});

if (Meteor.isClient) {
    Meteor.startup(function () {
        $(document.body).html("<div id='container'></div>");
        React.render(<App />, document.getElementById("container"));
    });
}
