import Cookies from 'js-cookie';

const timerLength = 600;

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

export function getUser() {
      
    const userInLocalStorage = Cookies.get('user');

    if (!userInLocalStorage) return null;

    try {
        const user = JSON.parse(atob(userInLocalStorage));
        const issuedSeconds = isNaN(user.issuedSeconds) ? 0 : user.issuedSeconds; // Convert from string to number

        console.log("issue", issuedSeconds)
        const secondsSinceSignIn = Number(Math.floor(new Date().getTime() / 1000) - issuedSeconds);
        // console.log("secondsSinceSignIn", secondsSinceSignIn)
        
        const sessionSecondsRemaining = Number(timerLength - secondsSinceSignIn);
        user.sessionSecondsRemaining = sessionSecondsRemaining;
        user.displayRemainingTime = secondsToHms(sessionSecondsRemaining)

        if (sessionSecondsRemaining <= 0) {
            Cookies.remove('user');
            return null;
        }

        return user;
    } catch (err) {
        // Local storage has been tampered with
        Cookies.remove('user');
        return null;
    }
}

export function setUser(user) {
    if (user === null || typeof user === 'undefined') {
        user = {};
        return;
    }

    const existingUser = getUser();
    if (user === null || typeof user === 'undefined') {
        if (existingUser === null || typeof existingUser === 'undefined') {
            return null;
        }
    }

    if (user.name === null || typeof user.name === 'undefined') {
        user.name = existingUser.name;
    }

    if (user.email === null || typeof user.email === 'undefined') {
        user.email = existinguser.email;
    }

    if (user.mobile_no !== null && typeof user.mobile_no !== 'undefined') {
        Cookies.set(
            'user',
            btoa(
                JSON.stringify({
                    name: user.name,
                    email: user.email,
                    mobile_no: user.mobile_no,
                    issuedSeconds: Math.floor(new Date().getTime() / 1000),
                })
            )
        );
    }
}


