function updateTime() {
    const now = new Date();
    const utcDate = now.toUTCString().split(' ')[0] + ' ' + now.getUTCDate() + ' ' + now.toUTCString().split(' ')[2] + ' ' + now.getUTCFullYear();
    const utcTime = now.toISOString().split('T')[1].split('.')[0];

    document.getElementById('current-day').textContent = utcDate;
    document.getElementById('current-time').textContent = utcTime;
}

setInterval(updateTime, 1000);
updateTime();

