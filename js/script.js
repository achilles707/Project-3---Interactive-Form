document.addEventListener('DOMContentLoaded', (e) => {
    // The Name Field:
    // set the default focus to be on the Name input:
    document.getElementById('name').focus();

    // set the "other" job role option to be hidden by default:
    otherJobRoleDisplay = document.getElementById('other-job-role');
    otherJobRoleDisplay.style.display = 'none';

    // Job Role Section:
    // display the other job role option only if the correct option is selected:  
    // listener to display 'other' input if selected:
    const jobOptionList = document.querySelector('#title');

    jobOptionList.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            otherJobRoleDisplay.style.display = 'list-item';
        } else if (e.target.value != 'other' && otherJobRoleDisplay.style.display == 'list-item') {
            otherJobRoleDisplay.style.display = 'none';
        }   
    });

    // T-Shirt Info Section:
	// only allow the user to see/choose a color until design has been chosen:
    shirtColorSelect = document.getElementById('shirt-colors');
    shirtColorSelect.style.display = 'none';
	// listen for design select, and display the color select, 
        //  with an available color option selected
	const shirtDesigns = document.getElementById('design');
	const colorOptions = document.getElementById('color');

    shirtDesigns.addEventListener('change', (e) => {
		shirtColorSelect.style.display = 'list-item';
        
		// only display colors associated with the selected design:
        if(e.target.value === 'js puns') {
        	console.log('JS Puns selected!');
			colorOptions[1].style.display = 'list-item';
            colorOptions[2].style.display = 'list-item';
			colorOptions[3].style.display = 'list-item';
            colorOptions[4].style.display = 'none';
            colorOptions[5].style.display = 'none';
			colorOptions[6].style.display = 'none';
        } else if(e.target.value === 'heart js') {
			console.log('I love JS selected!');
            colorOptions[1].style.display = 'none';
            colorOptions[2].style.display = 'none';
			colorOptions[3].style.display = 'none';
            colorOptions[4].style.display = 'list-item';
            colorOptions[5].style.display = 'list-item';
			colorOptions[6].style.display = 'list-item';
        }
    });  

    // Register for Activities Section:
    // listen for changes in "activities" fieldset
    const activities = document.getElementById('activities-box');
    let totalPrice = document.getElementById('activites-cost').innerHTML;

    activities.addEventListener(checked, (e) => {
        console.log('Change event heard.');
        if(e.target.name = 'all') {
            
            console.log(totalPrice);
        } else {
            
            console.log(totalPrice);
        }
    });

});