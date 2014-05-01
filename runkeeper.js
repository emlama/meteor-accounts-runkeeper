Accounts.oauth.registerService('runkeeper');

if (Meteor.isClient) {
  Meteor.loginWithRunkeeper = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Runkeeper.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  // var autopublishedFields = _.map(
  //   // Runkeeper.whitelistedFields.concat(['id', 'screenName']),
  //   function (subfield) { return 'services.twitter.' + subfield; });

  // Accounts.addAutopublishFields({
  //   forLoggedInUser: autopublishedFields,
  //   forOtherUsers: autopublishedFields
  // });
}