function checkForm()
{
	document.getElementById('errorName1').className='d-none';
	document.getElementById('errorName2').className='d-none';
	document.getElementById('errorName3').className='d-none';
	document.getElementById('errorName4').className='d-none';
	document.getElementById('errorName5').className='d-none';
  document.getElementById('errorName6').className='d-none';
	var error=false; //to znaczy, że danych nie brakuje
	var errorText=""; //komunikat z błędem
	var randimie = document.getElementById("randimie");
  var randnazwisko = document.getElementById("randnazwisko");
	var contactEmail = document.getElementById("contactEmail");
	var information = document.getElementById("information");
		if (randimie.value == "")
		{
			document.getElementById('errorName1').className='alert alert-danger';
			document.getElementById('randimie').className='form-control is-invalid';
			error=true;
		}
		else
		{
			document.getElementById('randimie').className='form-control is-valid';
		}
    if (randnazwisko.value == "")
		{
			document.getElementById('errorName2').className='alert alert-danger';
			document.getElementById('randnazwisko').className='form-control is-invalid';
			error=true;
		}
		else
		{
			document.getElementById('randnazwisko').className='form-control is-valid';
		}

		if (contactEmail.value == "")
		{
			document.getElementById('errorName3').className='alert alert-danger';
			document.getElementById('contactEmail').className='form-control is-invalid';
			error=true;
		}
		else
		{
			document.getElementById('contactEmail').className='form-control is-valid';
		}

		if (information.value == "")
		{
			document.getElementById('errorName4').className='alert alert-danger';
			document.getElementById('information').className='form-control is-invalid';
			error=true;
		}
		else
		{
			document.getElementById('information').className='form-control is-valid';
		}
		var email = contactEmail.value;
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		if(regex.test(email)==false)
		{
			document.getElementById('contactEmail').className='form-control is-invalid';
			document.getElementById('errorName5').className='alert alert-danger';
			error=true;
		}

		if(!error)
		{
			document.getElementById('contactEmail').className='form-control is-valid';
		}

		if (information.value.length > 250)
		{
			document.getElementById('errorName6').className='alert alert-danger';
			document.getElementById('information').className='form-control is-invalid';
			error=true;
		}
		if(error)
		{
			return false;
		}
		else
		{
			document.getElementById('information').className='form-control is-valid';
			return true;
		}
}

function sprawdzajImienia()
{
	var randimie = document.getElementById("randimie");
	if (randimie.value == "")
		{
			document.getElementById('errorName1').className='alert alert-danger';
			document.getElementById('randimie').className='form-control is-invalid';
			return false;
		}
	document.getElementById('randimie').className='form-control is-valid';
	return true;
}

function sprawdzajnazwisko()
{
	var randnazwisko = document.getElementById("randnazwisko");
	if (randnazwisko.value == "")
		{
			document.getElementById('errorName2').className='alert alert-danger';
			document.getElementById('randnazwisko').className='form-control is-invalid';
			return false;
		}
	document.getElementById('randnazwisko').className='form-control is-valid';
	return true;
}

function sprawdzajMaila()
{
	var contactEmail = document.getElementById("contactEmail");
	if (contactEmail.value == "")
	{
		document.getElementById('errorName3').className='alert alert-danger';
		document.getElementById('contactEmail').className='form-control is-invalid';
		return false;
	}
	var email = contactEmail.value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
	if(regex.test(email)==false)
	{
		document.getElementById('contactEmail').className='form-control is-invalid';
		document.getElementById('errorName5').className='alert alert-danger';
		return false;
	}
	document.getElementById('contactEmail').className='form-control is-valid';
	return true;

}

function sprawdzajInformacji()
{
	var information = document.getElementById("information");
	if (information.value == "")
	{
		document.getElementById('errorName4').className='alert alert-danger';
		document.getElementById('information').className='form-control is-invalid';
		return false;
	}
	if (information.value.length > 250)
	{
		document.getElementById('errorName6').className='alert alert-danger';
		document.getElementById('information').className='form-control is-invalid';
		return false;
	}
	document.getElementById('information').className='form-control is-valid';
	return true;

}
