App = React.createClass({
    render: function() {
        return (
            <div>
              <input placeholder="0000-0000-0000"></input>@
              <input placeholder="トレーナー名"></input>
              <button></button>
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
