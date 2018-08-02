module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            req.flash('error_msg', 'Sign up or sign in to see this page');
            res.redirect('/users/signin');
        }

    }
}