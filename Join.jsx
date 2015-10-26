Join = React.createClass({
  getInitialState: function() {
    return {friend_code: '',trainer_name:''};
  },
  _register:function(){
    let friend_code = this.refs.friend_code.getDOMNode().value
    let trainer_name = this.refs.trainer_name.getDOMNode().value
    Meteor.call('registFriendCode',{friend_code:friend_code,trainer_name:trainer_name})
  },
    render: function() {
        return (
            <div>
              <div>
                <input type='tel' ref='friend_code' placeholder="0000-0000-0000"></input>@
                <input ref='trainer_name' placeholder="トレーナー名"></input>
                <button onClick={this._register}>参加</button>
              </div>
            </div>
        );
    }
});
