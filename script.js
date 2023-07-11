
    var verifyCallback = function(token) {
        window.parent.document.dispatchEvent(new CustomEvent('grecaptchaVerified', {'detail': {response: token}}));
    };
    var expireCallback = function() {
        window.parent.document.dispatchEvent(new Event('grecaptchaExpired'));
    };
    var errorCallback = function() {
        window.parent.document.dispatchEvent(new Event('grecaptchaError'));
    };
    document.addEventListener('grecaptchaRender', function(e) {
        grecaptcha.render(e.detail.element, {
            'sitekey': '*6LeH8OEZAAAAAMi0TO4HCEgcO9fRTkryTroe13GZ*',
            'callback': verifyCallback,
            'expired-callback': expireCallback,
            'error-callback': errorCallback
        });   
    });
    document.addEventListener('grecaptchaReset', function() {
        grecaptcha.reset();
    }); 