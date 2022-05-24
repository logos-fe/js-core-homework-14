const registration = document.querySelector('.registration');
const agreement = document.forms.agreement;
const firstName = document.forms.name.first_name;
const lastName = document.forms.name.last_name;
const email = document.forms.name.email;
const sex = document.forms.sex.elements.radio;
const position = document.forms.position.elements.positions;
const agree = agreement.agree;

const profile = document.querySelector('.profile-dis')
const profileImage = document.querySelector('.image');
const profileFirstName = document.querySelector('#first-name');
const profileLastName = document.querySelector('#last-name');
const profileEmail = document.querySelector('#email');
const profileSex = document.querySelector('#sex-text');
const profilePosition = document.querySelector('#position-text');
const signOut = document.forms.signout




   agreement.button.onclick = () => {
      if (agree.checked === true){
   if (sex.value === 'Woman'){
      profileImage.src = "./img/woman.jpg"
   }
   if (firstName.value !== ''){
      profileFirstName.textContent = firstName.value;
   }
   if (lastName.value !== ''){
profileLastName.textContent = lastName.value;
   }
   if (email.value !== ''){
      profileEmail.textContent = email.value;
   }
   if (sex.value !== ''){
profileSex.textContent = sex.value;
   }
   if (position.value !== 'position'){
   profilePosition.textContent = position.value;
   }
   profile.classList.remove('profile-dis');
   profile.classList.add('profile');
   registration.classList.remove('registration');
   registration.classList.add('registration-dis');
}
}



signout.button.onclick = () => {
   firstName.value = '';
   lastName.value = '';
   email.value = '';
   position.value = 'position'
   sex[0].checked = false;
   sex[1].checked = false;
   agree.checked = false;
   profile.classList.add('profile-dis');
   profile.classList.remove('profile');
   registration.classList.add('registration');
   registration.classList.remove('registration-dis');
}