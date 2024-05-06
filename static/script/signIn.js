let logIncpnt = document.getElementById('logIncpnt')
let logIncpnt2 = document.getElementById('logIncpnt2')
let emailinput = document.getElementById('emailinput')
let passInput = document.getElementById('passInput')
let FormEmail = document.getElementById('FormEmail')
let emailEnteredValue = document.getElementById('emailEnteredValue')


// this function is email to password
let userID = []; // so called local database
function getEmailVal(){
    FormEmail.addEventListener('submit' , (e) => {
        e.preventDefault()
        // console.log(emailinput.value)
        addUser(emailinput.value)
        console.log(userID)
        if(validateEmailFormat(emailinput.value)){
            logIncpnt.style.display = 'none'
            logIncpnt2.style.display = 'block'
            emailEnteredValue.innerHTML = emailinput.value
    }
    })
}

// this func is paswd to Mobile num
// this is optional
let CreateAcc = document.getElementById('CreateAcc')
let logIncpnt3 = document.getElementById('logIncpnt3')
let logIncpnt4 = document.getElementById('logIncpnt4')
let topOfpopUp = document.getElementById('topOfpopUp')
let SignToAccount = document.getElementById('SignToAccount')
function nextPage(){
    logIncpnt2.addEventListener('submit' , (e) => {
        e.preventDefault();
        console.log(passInput.value)
        let password = passInput.value
        if(password.length>=6){
            logIncpnt.style.display = 'none'
            logIncpnt2.style.display = 'none'
            logIncpnt3.style.display = 'block'
        }
    })
}

// let skipToHomePage = document.getElementById('skipToHomePage')
function skipToHomePage(){
    var href = this.getAttribute("href"); // Get the href attribute value
     // Navigate to the specified href without reloading the page
    
    // setTimeout(function() {
    //     // window.location.href = href;
    // }, 2000);
    
    logIncpnt2.addEventListener('submit' , (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        SignToAccount.innerHTML = 'Account'
        topOfpopUp.style.display ='none'
    });
}
// document.getElementById("skipToHomePage").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     var href = this.getAttribute("href"); // Get the href attribute value
//     window.history.pushState({}, "", href); // Update the URL without reloading the page
//   });

//sendOTP 
let sendCode = document.getElementById('sendCode')
let numInput = document.getElementById('numInput')
function sendOTP(){
    logIncpnt3.addEventListener('submit' , (e) => {
        e.preventDefault();

        let number  = numInput.value;
        console.log(number.length)
        if(number.length === 10){
            logIncpnt.style.display = 'none'
            logIncpnt2.style.display = 'none'
            logIncpnt3.style.display = 'none'
            logIncpnt4.style.display = 'block'
            sendOtpAlrt();
        }
    })
}
//validateOTP
let signIN = document.getElementById('signIN')
let otpInput = document.getElementById('otpInput')
function validateOTP(){
    logIncpnt4.addEventListener('submit' , (e) => {
        e.preventDefault();

        if(otp === otpInput.value){
            logIncpnt4.addEventListener('submit' , (e) => {
                e.preventDefault();
                
                setTimeout(function() {
                    window.location.href = './index.html';
                        // window.location.href = href;
                    }, 1000);
            })
            // signIN.setAttribute("href","./index.html")
        }
    })
}

function changeSignInText() {
    var signInLink = parent.window.document.getElementById('signIntxtInPopup');
    if (signInLink) {
        signInLink.textContent = 'Account';
    }
}

//otp generation

function generateOTP() {
    // generating a random 6-digit number
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString(); // to str
}

// Function to display an alert with the OTP
let otp = generateOTP();
function sendOtpAlrt() {
    alert("Your OTP is: " + " " + otp + " " + " Please Copy It");
}

// this is to validate the use Email format
function validateEmailFormat(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let idCounter = 0; 
function addUser(email) {
    idCounter++; // Increment the counter
    let newID = { id: idCounter, userEmail : email}; //userNumber : number // Create a new object with the current ID value
    userID.push(newID); // Add the new ID object to the userID array
    // return n
}
