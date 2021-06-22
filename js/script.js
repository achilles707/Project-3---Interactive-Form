/*
Treehouse-Project-3---Interactive-Form
Nathaniel Boonzaaijer
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
            console.log('js puns selected');
            for(let i=1;i<=3;i++) {
                colorOptions[i].style.display = 'list-item';
            }
            for(let i=4;i<=6;i++) {
                colorOptions[i].style.display = 'none';
            }
            // clear invalid selection:
            if(colorOptions.selectedIndex == 4 || 5 || 6) {
                colorOptions.selectedIndex = 1;
            }

        } else if(e.target.value === 'heart js') {
            console.log('heart js selected');
            for(let i=1;i<=3;i++) {
                colorOptions[i].style.display = 'none';
            }
            for(let i=4;i<=6;i++) {
                colorOptions[i].style.display = 'list-item';
            }
            // clear invalid selection:
            if(colorOptions.selectedIndex == 1 || 2 || 3) {
                colorOptions.selectedIndex = 4;
            }
        } 
        
    });  

    // Register for Activities Section:
    const activities = document.getElementById('activities-box');
    const totalPrice = document.getElementById('activities-cost');
    let subTotal = 0;
    // for validation:
    let activitiesChecked = 0;

    // listen for changes in "activities" fieldset
    
    activities.addEventListener('change', (e) => {
        let activityCost = 0;
        let tuesdayMorning = document.querySelectorAll("[data-day-and-time='Tuesday 9am-12pm']");
        let tuesdayAfternoon = document.querySelectorAll("[data-day-and-time='Tuesday 1pm-4pm']");

        // when box is checked/unchecked add/subtract 100/200 from subtotal
        if(e.target.checked == true) {
            if(e.target.name != 'all') {
                activityCost = 100;
                subTotal += activityCost;
            } else {
                activityCost = 200;
                subTotal += activityCost;
            }
            activitiesChecked += 1;
        } else {
            if(e.target.name != 'all') {
                activityCost = 100;
                subTotal -= activityCost;
            } else {
                activityCost = 200;
                subTotal -= activityCost;
            }
            activitiesChecked -= 1;
        }

        // when box is checked, disable checkbox for any conflicting event
        if(tuesdayMorning[0].checked == true) {
            tuesdayMorning[1].disabled = true;
            tuesdayMorning[1].parentElement.classList.add('disabled');
        } else if(tuesdayMorning[0].checked == false) {
            tuesdayMorning[1].disabled = false;
            tuesdayMorning[1].parentElement.classList.remove('disabled');
        }

        if(tuesdayMorning[1].checked == true) {
            tuesdayMorning[0].disabled = true;
            tuesdayMorning[0].parentElement.classList.add('disabled');
        } else if(tuesdayMorning[1].checked == false) {
            tuesdayMorning[0].disabled = false;
            tuesdayMorning[0].parentElement.classList.remove('disabled');
        }

        if(tuesdayAfternoon[0].checked == true) {
            tuesdayAfternoon[1].disabled = true;
            tuesdayAfternoon[1].parentElement.classList.add('disabled');
        } else if(tuesdayAfternoon[0].checked == false) {
            tuesdayAfternoon[1].disabled = false;
            tuesdayAfternoon[1].parentElement.classList.remove('disabled');
        }

        if(tuesdayAfternoon[1].checked == true) {
            tuesdayAfternoon[0].disabled = true;
            tuesdayAfternoon[0].parentElement.classList.add('disabled');
        } else if(tuesdayAfternoon[1].checked == false) {
            tuesdayAfternoon[0].disabled = false;
            tuesdayAfternoon[0].parentElement.classList.remove('disabled');
        }

        totalPrice.innerHTML = `$${subTotal}`;
    });

    // Accessibility:
    // make the focus/blur events more obvious for the activity options:
    
    const activityChecks = document.querySelectorAll('input[type=checkbox]')
    for(let i=0; i<activityChecks.length; i++) {
        activityChecks[i].addEventListener('focus', (e) => {
            activityChecks[i].parentElement.classList.add('focus');
            for(j=0; j<activityChecks.length; j++) {
                if(activityChecks[j] != activityChecks[i] && activityChecks[j].parentElement.classList.contains('focus')) {
                    activityChecks[j].parentElement.classList.remove('focus');
                }
            }
        });
    }    

    // Payment Info Section:
    const cardNumberInput = document.getElementById('cc-num');
    const paymentMethod = document.getElementById('payment');
    
    const paypal =  document.getElementById('paypal');
    const bitcoin =  document.getElementById('bitcoin');
    // credit card as default payment method
    paymentMethod[1].selected = 'selected';
    // other payment options hidden
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    // after user has selected hide other payment options
    paymentMethod.addEventListener('change', (e) => {
        if(e.target.value != 'credit-card') {
            document.getElementById('credit-card').style.display = 'none';
            if(e.target.value == 'paypal') {
                paypal.style.display = 'list-item';
                bitcoin.style.display = 'none';
            } else if(e.target.value == 'bitcoin') {
                bitcoin.style.display = 'list-item';
                paypal.style.display = 'none';
            }
        } else if(e.target.value == 'credit-card') {
            document.getElementById('credit-card').style.display = 'list-item';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
            console.log('Bitcoin Hidden');
        }
    });

    // Form Validation:
    const form = document.querySelector('form');
    let nameValid = false;
    let emailValid = false;
    let activitiesValid = false;
    let ccNumValid = false;
    let ccZipValid = false;
    let ccCVVvalid = false;
    let ccYearValid = false;
    let ccMonthValid = false;

    function validateName(name) {
        nameValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name);
        if(nameValid == false) {
            document.getElementById('name').parentElement.classList.add('not-valid');
            document.getElementById('name').classList.add('not-valid');
            document.getElementById('name').parentElement.classList.remove('valid');
            document.getElementById('name').classList.remove('valid');
            document.getElementById('name-hint').style.display = 'list-item';

        } else {
            document.getElementById('name').parentElement.classList.remove('not-valid');
            document.getElementById('name').classList.remove('not-valid');
            document.getElementById('name').parentElement.classList.add('valid');
            document.getElementById('name').classList.add('valid');
            document.getElementById('name-hint').style.display = 'none';

        }

        console.log(`name valid: ${nameValid}`);

        return nameValid;
    }
    function validateEmail(email) {
        emailValid = /^[a-zA-Z0-9]+@+[a-z]+.com$/.test(email);
        if(emailValid == false) {
            document.getElementById('email').parentElement.classList.add('not-valid');
            document.getElementById('email').classList.add('not-valid');
            document.getElementById('email').parentElement.classList.remove('valid');
            document.getElementById('email').classList.remove('valid');
            document.getElementById('email-hint').style.display = 'list-item';
        } else {
            document.getElementById('email').parentElement.classList.remove('not-valid');
            document.getElementById('email').classList.remove('not-valid');
            document.getElementById('email').parentElement.classList.add('valid');
            document.getElementById('email').classList.add('valid');
            document.getElementById('email-hint').style.display = 'none';
        }
        console.log(`email valid: ${emailValid}`);
       
        return emailValid;
    }

    function validateActivities(activities) { 
 
        if(activitiesChecked >= 1) {
            activitiesValid = true;
        }
        if(activitiesValid == false) {
            document.getElementById('activities').classList.add('not-valid');
            document.getElementById('activities').classList.remove('valid');
            document.getElementById('activities-hint').style.display = 'list-item';
        } else {
            document.getElementById('activities').classList.remove('not-valid');
            document.getElementById('activities').classList.add('valid');
            document.getElementById('activities-hint').style.display = 'none';
        }
        console.log(`activities valid: ${activitiesValid}`);
        
        return activitiesValid;
    }

    // Credit Card fields validation:
    function validateCCnum(ccNum) {
        ccNumValid = /^[0-9]{13,16}$/.test(ccNum);
        if(ccNumValid == false) {
            document.getElementById('cc-num').parentElement.classList.add('not-valid');
            document.getElementById('cc-num').classList.add('not-valid');
            document.getElementById('cc-num').parentElement.classList.remove('valid');
            document.getElementById('cc-num').classList.remove('valid');
            document.getElementById('cc-hint').style.display = 'list-item';
        } else {
            document.getElementById('cc-num').parentElement.classList.remove('not-valid');
            document.getElementById('cc-num').classList.remove('not-valid');
            document.getElementById('cc-num').parentElement.classList.add('valid');
            document.getElementById('cc-num').classList.add('valid');
            document.getElementById('cc-hint').style.display = 'none';
        }
        console.log(`Card number valid: ${ccNumValid}`);

        return ccNumValid;
    }
    function validateCCzip(ccZip) {
        ccZipValid = /^\d{5}$/.test(ccZip);
        if(ccZipValid == false) {
            document.getElementById('zip').parentElement.classList.add('not-valid');
            document.getElementById('zip').classList.add('not-valid');
            document.getElementById('zip').parentElement.classList.remove('valid');
            document.getElementById('zip').classList.remove('valid');
            document.getElementById('zip-hint').style.display = 'list-item';
        } else {
            document.getElementById('zip').parentElement.classList.remove('not-valid');
            document.getElementById('zip').classList.remove('not-valid');
            document.getElementById('zip').parentElement.classList.add('valid');
            document.getElementById('zip').classList.add('valid');
            document.getElementById('zip-hint').style.display = 'none';
        }
        console.log(`Zip code valid: ${ccZipValid}`);

        return ccZipValid;
    }
    function validateCCcvv(ccCVV) {
        ccCVVvalid = /^[1-9]{1}[0-9]{2}$/.test(ccCVV);
        if(ccCVVvalid == false) {
            document.getElementById('cvv').parentElement.classList.add('not-valid');
            document.getElementById('cvv').classList.add('not-valid');
            document.getElementById('cvv').parentElement.classList.remove('valid');
            document.getElementById('cvv').classList.remove('valid');
            document.getElementById('cvv-hint').style.display = 'list-item';
        } else {
            document.getElementById('cvv').parentElement.classList.remove('not-valid');
            document.getElementById('cvv').classList.remove('not-valid');
            document.getElementById('cvv').parentElement.classList.add('valid');
            document.getElementById('cvv').classList.add('valid');
            document.getElementById('cvv-hint').style.display = 'none';
        }
        console.log(`CVV valid: ${ccCVVvalid}`);

        return ccCVVvalid;
    }
    function validateCCyear(ccYear) {
        if(isNaN(ccYear) == false) {
            ccYearValid = true;
        }
        if(ccYearValid == false) {
            document.getElementById('exp-year').parentElement.classList.add('not-valid');
            document.getElementById('exp-year').classList.add('not-valid');
            document.getElementById('exp-year').parentElement.classList.remove('valid');
            document.getElementById('exp-year').classList.remove('valid');
        } else {
            document.getElementById('exp-year').parentElement.classList.remove('not-valid');
            document.getElementById('exp-year').classList.remove('not-valid');
            document.getElementById('exp-year').parentElement.classList.add('valid');
            document.getElementById('exp-year').classList.add('valid');
        }

        console.log(`Exp year valid: ${ccYearValid}`);

        return ccYearValid;
    }
    function validateCCmonth(ccMonth) {
        if(isNaN(ccMonth) == false) {
            ccMonthValid = true;
        }
        if(ccMonthValid == false) {
            document.getElementById('exp-month').parentElement.classList.add('not-valid');
            document.getElementById('exp-month').classList.add('not-valid');
            document.getElementById('exp-month').parentElement.classList.remove('valid');
            document.getElementById('exp-month').classList.remove('valid');
        } else {
            document.getElementById('exp-month').parentElement.classList.remove('not-valid');
            document.getElementById('exp-month').classList.remove('not-valid');
            document.getElementById('exp-month').parentElement.classList.add('valid');
            document.getElementById('exp-month').classList.add('valid');
        }
        
        console.log(`Exp month valid: ${ccMonthValid}`);

        return ccMonthValid;
    }

    // event listener for form submission that will validate all user input:
    form.addEventListener('submit', (e) => {

        let nameValue = document.getElementById('name').value;
        let emailValue = document.getElementById('email').value;
        const activities = document.getElementById('activities-box');
        const paymentMethod = document.getElementById('payment');

        let ccNumValue = document.getElementById('cc-num').value;
        let ccZipValue = document.getElementById('zip').value;
        let ccCVVvalue = document.getElementById('cvv').value;
        let ccMonthValue = document.getElementById('exp-month').value;
        let ccYearValue = document.getElementById('exp-year').value;

        // name field validation:
        validateName(nameValue);
        if(nameValid == false) {
            e.preventDefault();
        }
        // email field validation:
        validateEmail(emailValue);
        if(emailValid == false) {
            e.preventDefault();
        }
        // register for activities section validation:
        validateActivities(activities);
        if(activitiesValid == false) {
            e.preventDefault();
        }
        // credit card validation: 
        if(document.getElementById('payment').value == 'credit-card') {
            validateCCnum(ccNumValue);
            validateCCzip(ccZipValue);
            validateCCcvv(ccCVVvalue);
            validateCCyear(ccYearValue);
            validateCCmonth(ccMonthValue);

            if(ccNumValid == false || ccZipValid == false || ccCVVvalid == false 
                || ccYearValid == false || ccMonthValid == false) {
                    e.preventDefault();
            }
        }
        
    });
});