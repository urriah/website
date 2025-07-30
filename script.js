// declare time zone formatting
    let options = {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);

    // set time
    setInterval(
        () => {
            document.querySelector("#time").innerText = formatter.format(new Date());
        }
    , 1000)
