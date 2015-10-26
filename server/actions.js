Meteor.methods({
  'registFriendCode':function(obj){
    Meteor.users.update({_id:this.userId},{$set:
    {
      friend_code:obj.friend_code,
      trainer_name:obj.trainer_name
    }

    })
  }
})
