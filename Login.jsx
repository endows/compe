Login = React.createClass({
  _login: function () {
    Meteor.loginWithTwitter()
  },
  render: function () {
    handleLogin = this._login
    return (
      <div>
        <div>
          <button onClick={this._login}>Twitterでログイン</button>
        </div>
      </div>
    );
  }
});
