var feed = new Instafeed ({
  get:'user',
  userId: '269979804',
  accessToken: '269979804.1677ed0.b45a22e29ef347db8a0367708264fd02',
  template: '<a href="{{link}}"><img src="{{image}}" /></a> <br> <p class="likes"> {{likes}}</p><p> {{caption}}</p>',
  limit: 3
});
feed.run();

var configProfile = {
  "profile": {"screenName": 'nickbark97'},
  "id": '788440410188312576',
  "domId": 'example1',
  "maxTweets": 1,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);
