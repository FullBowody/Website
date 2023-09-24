export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Redirects the user back in history or on the home page
 * @param {boolean} wait Should the function wait 1s before redirecting
 */
export function redirectHome(wait = true) {
    const url = new URL(window.location.href);
    setTimeout(() => {
        window.topbar.$forceUpdate();
        const newurl = new URL(window.location.href);
        if (url.toString() !== newurl.toString()) return;

        const length = window.history.length;
        if (length > 1) window.topbar.$router.go(-length);
        else window.topbar.$router.push("/");
    }, wait ? 1000 : 0);
}

export function redirectLink(wait = true) {
    const url = new URL(window.location.href);
    setTimeout(() => {
        window.topbar.$forceUpdate();
        const newurl = new URL(window.location.href);
        if (url.toString() !== newurl.toString()) return;

        let link = window.topbar.$route.query.link;
        console.log('link is ' + link);
        if (!link) link = "/";
        window.location.href = link;
    }, wait ? 1000 : 0);
}

export function goBack() {
    try {
        window.topbar.$forceUpdate();
        window.topbar.$router.go(-1);
    } catch (e) { console.error(e); }
}

/**
 * Converts a number of seconds to a stringified time
 * @param {number} time time in seconds to convert to a string
 * @returns stringified time (minutes+seconds)
 */
export function stringTime(time) {
    let nbMinutes = Math.floor(time / 60);
    let nbSeconds = time % 60;
    let minutes = "";
    if (nbMinutes > 0) {
        minutes = `${Math.round(nbMinutes)} ${nbMinutes >= 2 ? LANGUAGE.DATA.TIME.MINUTES : LANGUAGE.DATA.TIME.MINUTE}`;
        minutes += ` ${LANGUAGE.DATA.COMMON.AND} `;
    }
    let seconds = `${Math.round(nbSeconds)} ${nbSeconds >= 2 ? LANGUAGE.DATA.TIME.SECONDS : LANGUAGE.DATA.TIME.SECOND}`;
    return (minutes + seconds).toLowerCase();
}

/**
 * Manages all the .show-* page elements animations
 * @param {HTMLDivElement} page page
 */
export function animateShows(page) {
    if (!page.tagName) return;
    let classes = ["show-up", "show-down", "show-left", "show-right"];
    let elements = [];
    classes.forEach(c => {
        const els = page.querySelectorAll("." + c);
        els.forEach(el => {
            if (el.classList.contains("noscroll")) return;
            el.classList.remove(c);
            el.classList.add("opacity-0");
            el.index = elements.length;
            elements.push({ el, c });
        });

        const els2 = page.querySelectorAll(".-" + c);
        els2.forEach(el => {
            if (el.classList.contains("noscroll")) return;
            el.index = elements.length;
            elements.push({ el, c });
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add(elements[e.target.index].c);
                e.target.classList.remove("-" + elements[e.target.index].c);
                e.target.classList.remove('opacity-0');
            }
            else {
                e.target.classList.remove(elements[e.target.index].c);
                e.target.classList.add("-" + elements[e.target.index].c);
                e.target.classList.add('opacity-0');
            }
        });
    });

    elements.forEach(e => observer.observe(e.el));
}

export const levenshteinDistance = (s, t) => {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= s.length; j++) {
            arr[i][j] = i === 0
                ? j
                : Math.min(
                    arr[i - 1][j] + 1,
                    arr[i][j - 1] + 1,
                    arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                );
        }
    }
    return arr[t.length][s.length];
};

String.prototype.format = function () {
    let formatted = this;
    for (let i = 0; i < arguments.length; i++) {
        let regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

/** FOR EXIT PREVENT POPUP **/
// window.addEventListener("beforeunload", function (e) {
//     var confirmationMessage = "Certaines modifications ne seront pas enregistrés si vous quittez la page maintenant.\n"+
//                               "Enregistrez vos modifications avant de quitter.";
//     (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//     return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
// });