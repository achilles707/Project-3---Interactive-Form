/*
Treehouse-Project-3---Interactive-Form
Nathaniel Boonzaaijer
*/

/*
1. implement time restraints into the Register for Activities section
2. form validation
3. accessability
4. code comments
5. testing
*/

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
            for(let i=1;i<=3;i++) {
                colorOptions[i].style.display = 'list-item';
            }
            for(let i=4;i<=6;i++) {
                colorOptions[i].style.display = 'none';
            }
        } else if(e.target.value === 'heart js') {
            for(let i=1;i<=3;i++) {
                colorOptions[i].style.display = 'none';
            }
            for(let i=4;i<=6;i++) {
                colorOptions[i].style.display = 'list-item';
            }
        }
    });  

    // Register for Activities Section:
    const activities = document.getElementById('activities-box');
    const totalPrice = document.getElementById('activities-cost');
    let subTotal = 0;

    // listen for changes in "activities" fieldset
    
    activities.addEventListener('change', (e) => {
        let activityCost = 0;
        // if not checked, then add to the total price
        if(e.target.checked == true) {    
            if(e.target.name != 'all') {
                activityCost = 100;
                subTotal += activityCost;

                // check if certain day and time already checked
                if(e.target.dataset.dayAndTime == 'Tuesday 9am-12pm') {
                    console.log('Tuesday 9am-12pm');
                    // hide other checkbox for same time

                } else if(e.target.dataset.dayAndTime == 'Tuesday 1pm-4pm'){
                    console.log('Tuesday 1pm-4pm');
                    // hide other checkbox for same time
                    
                }
                
            } else {
                activityCost = 200;
                subTotal += activityCost;
            }
        // otherwise, subtract from the total price     
        } else {
            if(e.target.name != 'all') {
                activityCost = 100;
                subTotal -= activityCost;
            } else {
                activityCost = 200;
                subTotal -= activityCost;
            }
        }
        // add the cost of the chosen activities to the total price
        totalPrice.innerHTML = `$${subTotal}`;
    });

    // Payment Info Section:
    const cardNumberInput = document.getElementById('cc-num');
    const paymentMethod = document.getElementById('payment'); 
    // credit card as default payment method
    paymentMethod[1].selected = 'selected';
    // after user has selected hide other payment options
    paymentMethod.addEventListener('change', (e) => {
        if(e.target.value != 'credit-card') {
            document.getElementById('credit-card').style.display = 'none';
        } else if(e.target.value == 'credit-card') {
            document.getElementById('credit-card').style.display = 'list-item';
        }
    });

    // Form Validation:
    const form = document.querySelector('form');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let ccNum = document.getElementById('cc-num').value;

    function validateName(name) {
        console.log(name);
       /* if() {
        return true;
       } else {
           return false;
       } */
    }

    function validateEmail(email) {
        console.log(email);
       /*  if() {
            return true;
           } else {
               return false;
           } */
    }

    function validateActivities(activities) {
        console.log(activities);
        /* if() {
            return true;
           } else {
               return false;
           } */
    }

    function validateCC(ccNum) {
        console.log(ccNum);
       /*  if() {
            return true;
           } else {
               return false;
           } */
    }
    // event listener for form submission that will validate all user input:
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // name field validation:
        validateName(name);
        // email field validation:
        validateEmail(email);
        // register for activities section validation:
        validateActivities(activities);
        // credit card validation: 
        let x = '0';
        if(x == '0') {
            validateCC(ccNum);
        }
        console.log('Form validated.');
    });

});