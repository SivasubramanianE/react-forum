const user = require('../api/user');

module.exports = function(express) {

    // Create a new user
    express.post('/user/reg', user.create);

     // User login
    express.post('/user/login', user.login);

    // Retrieve all user
    express.get('/user', user.getUser);

    // Delete a user with userId
    // express.delete('/user/:userId', user.delete);
}