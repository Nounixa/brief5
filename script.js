const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const password = document.getElementById('password');
const confirmepassword = document.getElementById('confirmepassword');
const age = document.getElementById('age');
const genre = document.getElementById('genre');
const number = document.getElementById('number');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const lnameValue = lname.value;
    const fnameValue = fname.value;
	const emailValue = email.value;	
	const genreValue =genre.value;
	const passwordValue = password.value;
	const confirmepasswordValue = confirmepassword.value;
    const numberValue=number.value;
    const ageValue = age.value;

    if(lnameValue===''){
        setErrorFor(lname, 'your last name is required');
    }else if(lnameValue.length <3 ) {
		setErrorFor(lname, 'your last name need to be composed of more then 3 caracters');
	} else {
		setSuccessFor(lname);
	}
    if(fnameValue===''){
        setErrorFor(fname, 'your last name is required');
    }else if(fnameValue.length <3 ) {
		setErrorFor(fname, 'your first name need to be composed of more then 3 caracters');
	} else {
		setSuccessFor(fname);
	}
    if (emailValue==='') {
        setErrorFor(email, 'email required');
          }else if (!email.validity.valid) {
    setErrorFor(email, 'invalide forma of email here s an exemple :exemple@exemple.com');
      } else{
        setSuccessFor(email);
      }
    if(passwordValue===''){
        setErrorFor(password, 'a password is required to finish your submition');
    }else if(passwordValue.length<8) {
		setErrorFor(password, 'your password need to be composed of more then 8 caracters');
	} else {
		setSuccessFor(password);
	}
    if(confirmepasswordValue===''){
        setErrorFor(confirmepassword, 'you need to confire your password');
    }else if(passwordValue !== confirmepasswordValue) {
		setErrorFor(confirmepassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmepassword);
	}
	if(numberValue===''){
        setErrorFor(number,'phonenumber is required');
    } else {
    	setSuccessFor(number);
    }

    if (ageValue<18) {
      setErrorFor(age, 'you need to be 18 or older');
  } else {
		setSuccessFor(age);
	}


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

