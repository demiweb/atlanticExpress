//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}


//

let preloader = document.querySelector('.preloader');

function preloading() {
    if (preloader) {
        document.body.classList.add('no-scroll');
        preloader.classList.add('start');
        setTimeout(() => {
            preloader.classList.add('log');
        }, 2900);
        setTimeout(() => {
            preloader.classList.add('end');
            document.body.classList.remove('no-scroll');
        }, 5400);
        setTimeout(() => {
            scrollAnimations();

        }, 5700)
    }
}

preloading();
// scrollAnimations();

function helloConsole() {
    var staticText = 'Made with ❤️ by Demiweb';
    var staticUrl = '> https://demiweb.pro/';
    var hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        var title = '%c';

        for (var i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        var title = 'demiweb';
        var banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        var styler = [];

        var symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();
var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();
//scrolling bg

let scrollingBg = [...document.querySelectorAll('.scrolled-bg')];

function scrollParallaxBg() {
    if (scrollingBg.length) {
        scrollingBg.forEach((bg) => {
            let toTop = bg.getBoundingClientRect().top;
            let h = bg.offsetHeight;
            let inc = bg.dataset.inc;
            console.log(h);

            if (toTop < 0) {
                if (inc > 0.6) {
                    inc = 0.6;
                }
                bg.style.setProperty('--st', `${((toTop * (-1)) / h) * 100 * inc}%`);
            } else {
                bg.style.setProperty('--st', '0');
            }
        })
    }
}

scrollParallaxBg();


//scrolling bg

//scrolling img

let scrollingImg = [...document.querySelectorAll('.scrolled-img')];

function scrollParallaxImg() {
    if (scrollingImg.length) {
        scrollingImg.forEach((bg) => {
            let toTop = bg.getBoundingClientRect().top;
            let w = window.innerHeight;
            // console.log(w);
            let h = bg.offsetHeight;
            let inc = bg.dataset.inc;
            // console.log(h);

            if (toTop < w) {
                if (inc > 0.6) {
                    inc = 0.6;
                }
                bg.style.setProperty('--st', `${((toTop * (-1)) / w) * 100 * inc}%`);
            } else {
                bg.style.setProperty('--st', '0');
            }
        })
    }
}

scrollParallaxImg();


//scrolling img

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');
                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                    }
                })
            })
        });
        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
            })
        })
    }
}

let goForm = [...document.querySelectorAll('.go-form')];

function formDown() {
    if (goForm.length) {
        goForm.forEach((btn) => {
            if (document.querySelector('.contact-forms')) {
                $(btn).click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".contact-forms").offset().top
                    }, 500);
                });
            }
        })
    }
}

formDown();

controlModal();
//modal window

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);
    scrollParallaxBg();
    scrollParallaxImg();
});


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');
// var backdrop = document.querySelector('.backdrop');

function burgerControl() {
    if (burger.length) {
        let men = document.querySelector('.header-fixed-menu');
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                men.classList.toggle('visible');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


//lang

let langBtn = [...document.querySelectorAll('.lang')];

function controlLang() {
    if (langBtn.length) {
        langBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })
    }
}

controlLang();


//lang


//main title

let mainTitle = [...document.querySelectorAll('.main-title')];

function createMainTitle() {
    if (mainTitle.length) {
        mainTitle.forEach((btn) => {
            let strong = btn.querySelector('strong');

            let arr = strong.innerHTML.split('');
            strong.innerHTML = '';
            // console.log(arr);
            arr.forEach((arr2) => {
                let span = document.createElement('span');

                if (arr2 === " ") {
                    span.innerHTML = '\xa0';
                } else {
                    span.innerHTML = arr2;

                }
                strong.appendChild(span);
            });

        })
    }
}

createMainTitle();

//main title

//semi title
let semiTitles = [...document.querySelectorAll('.semi-title')];

function concatSemi() {
    if (semiTitles.length) {
        semiTitles.forEach((title) => {
            var spanInserted = $(title).html().split(" ");
            // console.log(spanInserted[0]);
            let wrapped = '';
            console.log(spanInserted);
            spanInserted.forEach((spn) => {
                console.log(spn);
                if (spn === '<br>') {
                    spn = '<div class="long"></div>';
                    wrapped += `${spn}`;
                } else {
                    if (spn === ' ' || spn === '') {

                    } else {
                        wrapped += `<span><span>${spn}\xa0</span></span>`;

                    }
                }
            });
            title.innerHTML = wrapped;

        })
    }
}

concatSemi();


//semi title


//sliders

let showcase = [...document.querySelectorAll('.showcase-cont')];

function prodSlider() {
    if (!showcase.length) {

    } else {
        showcase.forEach((sld) => {
            let sldCont = sld.querySelector('.showcase-slider');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 400,

                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                spaceBetween: 40,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                on: {
                    init: () => {
                        sld.querySelector('.time-line').classList.add('active');
                    },
                    slideChange: () => {//Здесь мы переключаем старый слайд на новый и нужно обновить прогресс-бар. Без таймаута стиль не обновляется.
                        sld.querySelector('.time-line').classList.remove('active');
                        setTimeout(() => {
                            sld.querySelector('.time-line').classList.add('active');
                        }, 400);
                    },
                },


            });
        })
    }
}

prodSlider();


//sliders

//cargo line

let currentCargo = 0;

function cargoInterval() {
    if (cargoLine.length) {
        if (currentCargo === cargoLine.length - 1) {
            currentCargo = 0;
        } else {
            currentCargo += 1;
        }
        cargoLine.forEach((btn2) => {
            btn2.classList.remove('active');
        });
        cargoLine[currentCargo].classList.add('active');
    }
}

let intervalCargo = setInterval(cargoInterval, 3400);

let cargoLine = [...document.querySelectorAll('.cargo-line')];


function cargoLines() {
    if (cargoLine.length) {
        cargoLine.forEach((btn) => {

        });
    }
}

cargoLines();


//cargo line