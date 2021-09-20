import useInput from "../hooks/use-input"

const Registration = () => {

    // validation checks for every input values
    const isEmpty = value => value.trim() !== ''
    const isEmail = value => value.includes('@')
    const isHusband = value => value.length < 60
    const isFirstName = value => value.length < 60
    const isAddress = value => value.length < 250
    const isPincode = value => value.length < 10
    const isMobile = value => value.length < 11
    const isPan = value => {
      let   regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
      if(regex.test(value)) {
        return true;
      }

    return false;
  }
    const isAadhar = value => value.length < 12
    const isNominee = value => value.length < 50
    const isRelation = value => value.length < 50
    const isPassword = value => {
      let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{15,}$/
      if(regex.test(value)){
        return true
      }
      return false
    }

    //using our custom hook for applying validations
  const {value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName      
  } = useInput(isEmpty, isFirstName)

  const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail 
  } = useInput(isEmpty, isEmail)

  const {
    value: husbandValue,
    isValid: husbandIsValid,
    hasError: husbandHasError,
    valueChangeHandler: husbandChangeHandler,
    inputBlurHandler: husbandBlurHandler,
    reset: resethusband 
} = useInput(isEmpty, isHusband)

  const {
  value: addressValue,
  isValid: addressIsValid,
  hasError: addressHasError,
  valueChangeHandler: addressChangeHandler,
  inputBlurHandler: addressBlurHandler,
  reset: resetAddress
} = useInput(isEmpty, isAddress)

const {
  value: pincodeValue,
  isValid: pincodeIsValid,
  hasError: pincodeHasError,
  valueChangeHandler: pincodeChangeHandler,
  inputBlurHandler: pincodeBlurHandler,
  reset: resetPincode
} = useInput(isPincode)

const {
  value: mobileValue,
  isValid: mobileIsValid,
  hasError: mobileHasError,
  valueChangeHandler: mobileChangeHandler,
  inputBlurHandler: mobileBlurHandler,
  reset: resetMobile
} = useInput(isEmpty, isMobile)

const {
  value: panValue,
  isValid: panIsValid,
  hasError: panHasError,
  valueChangeHandler: panChangeHandler,
  inputBlurHandler: panBlurHandler,
  reset: resetPan
} = useInput(isEmpty, isPan)

const {
  value: aadharValue,
  isValid: aadharIsValid,
  hasError: aadharHasError,
  valueChangeHandler: aadharChangeHandler,
  inputBlurHandler: aadharBlurHandler,
  reset: resetAadhar
} = useInput(isAadhar)

const {
  value: nomineeValue,
  isValid: nomineeIsValid,
  hasError: nomineeHasError,
  valueChangeHandler: nomineeChangeHandler,
  inputBlurHandler: nomineeBlurHandler,
  reset: resetNominee
} = useInput(isEmpty, isNominee)

const {
  value: relationValue,
  isValid: relationIsValid,
  hasError: relationHasError,
  valueChangeHandler: relationChangeHandler,
  inputBlurHandler: relationBlurHandler,
  reset: resetRelation
} = useInput(isEmpty, isRelation)

const {
  value: passwordValue,
  isValid: passwordIsValid,
  hasError: passwordHasError,
  valueChangeHandler: passwordChangeHandler,
  inputBlurHandler: passwordBlurHandler,
  reset: resetPassword
} = useInput(isEmpty, isPassword)

  //checking if the form is valid or not
  let formIsValid = false

  const submitHandler = event => {
    event.preventDefault()

    if(!formIsValid){
      return
    }

    console.log("Submitted!")
    console.log(firstNameValue, emailValue, addressValue, pincodeValue, mobileValue, aadharValue)

    resetFirstName()
    resetEmail()
    resethusband()
    resetAddress()
    resetPincode()
    resetMobile()
    resetPan()
    resetAadhar()
    resetNominee()
    resetRelation()
    resetPassword()
  }

  if(firstNameIsValid  && emailIsValid && husbandIsValid && addressIsValid && pincodeIsValid && mobileIsValid && panIsValid && aadharIsValid
    && nomineeIsValid && relationIsValid && passwordIsValid){
    formIsValid = true
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'
  const dobClasses = 'form-control'
  const husbandClasses = husbandHasError ? 'form-control invalid' : 'form-control'   
  const addressClasses = addressHasError ? 'form-control invalid' : 'form-control'  
  const pincodeClasses = pincodeHasError ? 'form-control invalid' : 'form-control'  
  const mobileClasses = mobileHasError ? 'form-control invalid' : 'form-control' 
  const panClasses = panHasError ? 'form-control invalid' : 'form-control' 
  const aadharClasses = aadharHasError ? 'form-control invalid' : 'form-control' 
  const nomineeClasses = nomineeHasError ? 'form-control invalid' : 'form-control' 
  const relationClasses = relationHasError ? 'form-control invalid' : 'form-control' 
  const passwordClasses = passwordHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit= {submitHandler}>
        <div className='control-group'>
    
          {/* Radio button */}
          <div>
          <input type="radio" id="html" name="fav_language" value="Organization"></input>
            <label for="Organization">Organization</label>
            <input type="radio" id="css" name="fav_language" value="Self"></input>
            <label for="Self">Self</label>
          </div>
          </div>

          {/* First Name */}
        <div className={firstNameClasses}>
          <label htmlFor='name'> Name</label>
          <input type='text' 
                 id='name' 
                 value={firstNameValue} 
                 onChange={firstNameChangeHandler} 
                 onBlur={firstNameBlurHandler}
                 />
                 {firstNameHasError && <p className="error-text">Please enter name with less than 60 characters</p>}
        </div>

        {/* Father/Husband Title */}
        <div>
          <input type="radio" id="s/o" name="S/O" value="S/O"></input>
            <label for="Organization">S/O</label>
            <input type="radio" id="d/o" name="S/O" value="D/O"></input>
            <label for="Self">D/O</label>
            <input type="radio" id="w/o" name="S/O" value="W/O"></input>
            <label for="Self">W/O</label>  
          </div>

        {/* Father/Husband Name */}
        <div className={husbandClasses}>
          <label htmlFor='husbandname'>Husband/Father's Name</label>
          <input type='text' 
                 id='husband-name' 
                 value={husbandValue} 
                 onChange={husbandChangeHandler} 
                 onBlur={husbandBlurHandler}
                 />
                 {husbandHasError && <p className="error-text">Please enter a name less than 60 characters</p>}
        </div>
        

      {/* Date of Birth */}
      <div className={dobClasses}>
        <label htmlFor='dob'>Date of Birth</label>
        <input type='date' 
               id='dob' 
               />
      </div>

      {/* Address */}
      <div className={addressClasses}>
        <label htmlFor='address'>Address</label>
        <input type='textarea' 
               id='address' 
               value={addressValue} 
               onChange={addressChangeHandler}
               onBlur={addressBlurHandler}
               />
        {addressHasError && <p className="error-text">Please enter an address less than 250 chars</p>}
      </div>

        {/* Pincode */}
        <div className={pincodeClasses}>
        <label htmlFor='pincode'>Pincode</label>
        <input type='number' 
               id='pincode' 
               value={pincodeValue} 
               onChange={pincodeChangeHandler}
               onBlur={pincodeBlurHandler}
               />
        {pincodeHasError && <p className="error-text">Please enter a valid PIN Code</p>}
      </div>

        {/* Mobile Number */}
        <div className={mobileClasses}>
        <label htmlFor='mobile'>Mobile No</label>
        <input type='number' 
               id='mobile' 
               value={mobileValue} 
               onChange={mobileChangeHandler}
               onBlur={mobileBlurHandler}
               />
        {mobileHasError && <p className="error-text">Please enter a 10 digit Mobile No</p>}
      </div>

        {/* Email */}
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' 
               id='name' 
               value={emailValue} 
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
               />
        {emailHasError && <p className="error-text">Please enter a valid email</p>}
      </div>

      {/* PAN No */}
      <div className={panClasses}>
        <label htmlFor='pan'>PAN No</label>
        <input type='text' 
               id='pan' 
               value={panValue} 
               onChange={panChangeHandler}
               onBlur={panBlurHandler}
               />
        {panHasError && <p className="error-text">Please enter a valid PAN Number</p>}
      </div>
      
      {/* Aadhar No */}
      <div className={aadharClasses}>
        <label htmlFor='pan'>Aadhar No</label>
        <input type='number' 
               id='aadhar' 
               value={aadharValue} 
               onChange={aadharChangeHandler}
               onBlur={aadharBlurHandler}
               />
        {aadharHasError && <p className="error-text">Please enter a valid Aadhar Number</p>}
      </div>

      {/* Nominee Name */}
      <div className={nomineeClasses}>
        <label htmlFor='nominee'>Nominee's Name</label>
        <input type='text' 
               id='moninee' 
               value={nomineeValue} 
               onChange={nomineeChangeHandler}
               onBlur={nomineeBlurHandler}
               />
        {nomineeHasError && <p className="error-text">Please enter a valid Aadhar Number</p>}
      </div>

      {/* Nominee Relation */}
      <div className={relationClasses}>
        <label htmlFor='relation'>Nominee's Relation</label>
        <input type='text' 
               id='relation' 
               value={relationValue} 
               onChange={relationChangeHandler}
               onBlur={relationBlurHandler}
               />
        {relationHasError && <p className="error-text">Please enter Nominee's relation</p>}
      </div>

      {/* Password */}
      <div className={passwordClasses}>
        <label htmlFor='password'>Password</label>
        <input type='password' 
               id='password' 
               value={passwordValue} 
               onChange={passwordChangeHandler}
               onBlur={passwordBlurHandler}
               />
        {passwordHasError && <p className="error-text">Please enter a strong password</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
    )
}

export default Registration