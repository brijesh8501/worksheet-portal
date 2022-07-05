export const validation = (data) => {
    const { type, value, maxLength } = data;
    switch (type){
    case 'phoneNumber':

        let textFieldValuePhoneNumber = value.replace(/-/g, "");
        let regexPhoneNumber = /^([0-9]{3})([0-9]{3})([0-9]{4})/;
        let matchPhoneNumber = regexPhoneNumber.exec(textFieldValuePhoneNumber);

        let phoneNumberValue = {};

        if(/^\d+$/.exec(textFieldValuePhoneNumber)){

            if (matchPhoneNumber) {

                matchPhoneNumber.shift();

                textFieldValuePhoneNumber = matchPhoneNumber.join("-");

                phoneNumberValue['flag'] = true;

            }else{

                textFieldValuePhoneNumber = value.replace(/-/g, "");

                phoneNumberValue['flag'] = false;

            }

        }else{

            textFieldValuePhoneNumber = textFieldValuePhoneNumber.replace(/\D/g, "");

            phoneNumberValue['flag'] = false;

        }

        phoneNumberValue['value'] = textFieldValuePhoneNumber;
        return phoneNumberValue;

    case 'date':
  
        let textFieldValueDate = value.replace(/\//g, "");
        let regexDate = /^([0-9]{2})([0-9]{2})([0-9]{4})/;
        let matchDate = regexDate.exec(textFieldValueDate);

        let dateValue = {};

        if(/^\d+$/.exec(textFieldValueDate)){

            if (matchDate) {

                matchDate.shift();

                textFieldValueDate = matchDate.join("/");

                dateValue['flag'] = true;

            }else{

                textFieldValueDate = value.replace(/\//g, "");

                dateValue['flag'] = false;

            }

        }else{

            textFieldValueDate = textFieldValueDate.replace(/\D/g, "");

            dateValue['flag'] = false;

        }

        dateValue['value'] = textFieldValueDate;
        return dateValue;

    case 'postalCode':

        let textFieldValuePostalCode = value.replace(/\s/g, "").toUpperCase();
        let regexPostalCode = /^([A-Z][0-9][A-Z])([0-9][A-Z][0-9])/;
        let matchPostalCode = regexPostalCode.exec(textFieldValuePostalCode);

        let postalCodeValue = {};

        let successFlag = true;
        if(/^(?![A-Z])/.exec(textFieldValuePostalCode)){ successFlag = false; }
        if(/^[A-Z](?![0-9])./.exec(textFieldValuePostalCode)){ successFlag = false; }
        if(/^[A-Z][0-9](?![A-Z])./.exec(textFieldValuePostalCode)){ successFlag = false; }
        if(/^[A-Z][0-9][A-Z](?![0-9])./.exec(textFieldValuePostalCode)){ successFlag = false; }
        if(/^[A-Z][0-9][A-Z][0-9](?![A-Z])./.exec(textFieldValuePostalCode)){ successFlag = false; }
        if(/^[A-Z][0-9][A-Z][0-9][A-Z](?![0-9])./.exec(textFieldValuePostalCode)){ successFlag = false; }

        if(successFlag){

            if(matchPostalCode){

                matchPostalCode.shift();

                textFieldValuePostalCode = matchPostalCode.join(" ");

                postalCodeValue['flag'] = true;

            }else{
                postalCodeValue['flag'] = false;
            }

        }else{

            textFieldValuePostalCode = textFieldValuePostalCode.slice(0, -1);
            postalCodeValue['flag'] = false;

        }

        postalCodeValue['value'] = textFieldValuePostalCode;

        return postalCodeValue;
         
    case 'emailAddress':

        let textFieldValueEmailAddress = value;
        let regexEmailAddress = /^([\w-\.])+@([\w-]+\.)+[\w-]{2,4}$/g;
        let matchEmailAddress = regexEmailAddress.exec(textFieldValueEmailAddress);

    default:

        let requiredValue = {
            value,
            flag: (value)? true : false
        };

        return requiredValue;
    }
}