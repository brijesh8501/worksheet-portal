export const validation = (data) => {
    const { type, value, maxLength } = data;

    switch (type){
    case 'phoneNumber':

        let textFieldValuePhoneNumber = value.replace(/-/g, "");
        let regexPhoneNumber = /^([0-9]{3})([0-9]{3})([0-9]{4})/;
        let matchPhoneNumber = regexPhoneNumber.exec(textFieldValuePhoneNumber);

        if(/^\d+$/.exec(textFieldValuePhoneNumber)){
            if (matchPhoneNumber) {
                matchPhoneNumber.shift();
                textFieldValuePhoneNumber = matchPhoneNumber.join("-");
                return textFieldValuePhoneNumber;

            }else{
                textFieldValuePhoneNumber = value.replace(/-/g, "");
                return textFieldValuePhoneNumber;
            }
        }else{
            const textFieldValuePhoneNumberRemoveCharacter = textFieldValuePhoneNumber.replace(/\D/g, "");
            return textFieldValuePhoneNumberRemoveCharacter;
        }
    
    case 'date':

        let textFieldValueDate = value.replace(/\//g, "");
        let regexDate = /^([0-9]{2})([0-9]{2})([0-9]{4})/;
        let matchDate = regexDate.exec(textFieldValueDate);

        if(/^\d+$/.exec(textFieldValueDate)){
            if (matchDate) {
                matchDate.shift();
                textFieldValueDate = matchDate.join("/");
                return textFieldValueDate;

            }else{
                textFieldValueDate = value.replace(/\//g, "");
                return textFieldValueDate;
            }
        }else{
            const textFieldValueDateRemoveCharacter = textFieldValueDate.replace(/\D/g, "");
            return textFieldValueDateRemoveCharacter;
        }
    case 'postalCode':

        let textFieldValuePostalCode = value.toUpperCase();
        let regexPostalCode = /^([A-Z][0-9][A-Z])([0-9][A-Z][0-9])/;
        let matchPostalCode = regexPostalCode.exec(textFieldValuePostalCode);

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
                }
                return textFieldValuePostalCode;

            }else{
                textFieldValuePostalCode = textFieldValuePostalCode.slice(0, -1) 
            }
            return textFieldValuePostalCode;
         
    case 'emailAddress':

        let textFieldValueEmailAddress = value;
        let regexEmailAddress = /^([\w-\.])+@([\w-]+\.)+[\w-]{2,4}$/g;
        let matchEmailAddress = regexEmailAddress.exec(textFieldValueEmailAddress);

    default:
        return value;
    }
}