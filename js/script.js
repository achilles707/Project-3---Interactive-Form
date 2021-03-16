document.addEventListener('DOMContentLoaded', (e) => {
    // The Name Field:
    // set the default focus to be on the Name input:
    document.getElementById('name').focus();

    // set the "other" job role option to be hidden by default:
    otherJobRoleDisplay = document.getElementById('other-job-role').style.display;
    otherJobRoleDisplay = 'none';

    // Job Role Section:
    // display the other job role option only if the correct option is selected:  
    // listener to display 'other' input if selected:
    const jobOptionList = document.querySelector('#title');

    jobOptionList.addEventListener('change', (e) => {
        console.log(e.target.value);
        if (e.target.value === 'other') {
            otherJobRoleDisplay = 'list-item';
        } else if (e.target.value != 'other' && otherJobRoleDisplay == 'list-item') {
            otherJobRoleDisplay = 'none';
        }
        
    });

    // T-Shirt Info Section:
    // only allow the user to see/choose a color until design has been chosen:
    shirtColorSelect = document.getElementById('shirt-colors');
    shirtColorSelect.style.display = 'none';

    // listen for design select, and display the color select, 
    //  with an available color option selected
    const shirtDesigns = document.getElementById('shirt-designs');

    shirtDesigns.addEventListener('change', (e) => {
        // only display colors associated with the selected design:
        for(let i=0;i<6;i++) {
            if (shirtDesigns[i].data-theme == 'js puns') {
                console.log('JS puns selected');
            } else {
                console.log('I love JS selected');
            }
        }
    });

    
    
});