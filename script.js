const depthNumber = document.getElementById('depth-number');
window.addEventListener('scroll', () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const scrollPercentage = window.scrollY / maxScroll;

    const totalMinutes = 900;
    const currentMinutesProgress = Math.floor(scrollPercentage * totalMinutes);
    
    const startMinutesSinceMidnight = 11 * 60;
    let totalCurrentMinutes = startMinutesSinceMidnight + currentMinutesProgress;

    let hours = Math.floor(totalCurrentMinutes / 60) % 24;
    let minutes = totalCurrentMinutes % 60;

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('time-display').textContent = `${hours}:${formattedMinutes} ${ampm}`;
});
