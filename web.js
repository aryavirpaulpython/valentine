function handleButtonClick(choice) {
    const gifContainer = document.getElementById('gifContainer');

    if (choice === 'yes') {
        gifContainer.innerHTML = '<img src="https://gifdb.com/images/high/beating-heart-cute-bunny-hug-3n93ptp7obb6tatv.gif" alt="Happy GIF">';
    } else if (choice === 'no') {
        gifContainer.innerHTML = '<img src="https://i.pinimg.com/originals/bc/93/98/bc93986b0bdae0d950224a2ad5e49bbf.gif" alt="Sad GIF">';
    }

    // Disable buttons after choice
    document.getElementById('yesButton').disabled = true;
    document.getElementById('noButton').disabled = true;
}
