https://levelup.gitconnected.com/everything-you-need-to-know-about-the-passport-local-passport-js-strategy-633bbab6195
https://medium.com/swlh/everything-you-need-to-know-about-the-passport-jwt-passport-js-strategy-8b69f39014b0

if you are confused about how passport works, read this two articles and you will come back as an expert.

Always remember: passport.authenticate(<strategy>, <option hash>) is a middleware and can change you req body.

don't forget to return res.send({msg: 'whatever'}) if we forget the 'return' there could be wired bugs.
https://stackoverflow.com/questions/52122272/err-http-headers-sent-cannot-set-headers-after-they-are-sent-to-the-client


started session errors on https://open.appacademy.io/learn/full-stack-online/mern-stack-curriculum/frontend-auth

