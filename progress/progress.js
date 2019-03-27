document.querySelectorAll('.progress').forEach(progress => {
    let leftAngle = '';
    let leftColor = '';
    let rightAngle = '';
    let rightColor = '';

    if (progress.value <= 50) {
        leftAngle = `90deg`;
        leftColor = `#f5f5f5`;
        rightAngle = `${90 + 3.6 * progress.value}deg`;
        rightColor = `#6200ee`;
    }
    else {
        leftAngle = `${-90 + 3.6 * (progress.value - 50)}deg`;
        leftColor = `#6200ee`;
        rightAngle = `270deg`;
        rightColor = `#6200ee`;
    }

    progress.style.setProperty('--progress-before-width', `${progress.value}%`);
    progress.style.setProperty('--progress-circular-before-left-angle', leftAngle);
    progress.style.setProperty('--progress-circular-before-left-color', leftColor);
    progress.style.setProperty('--progress-circular-before-right-angle', rightAngle);
    progress.style.setProperty('--progress-circular-before-right-color', rightColor);
});