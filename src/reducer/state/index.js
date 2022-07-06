export const initialState = {

    portalSetting:{
        worksheet: true,
        assets: true
    },
    navSetting:{

        isProfileMenuToShow: false,
        leftMenuLimit: 4

    },
    worksheetSidebarSetting:{
        sidebarMenu:{
            suiteInformation: 'Suite Information',
            purchaserInformation: {
                title: 'Purchaser Information',
                childInformation:[
                    {
                        primaryPurchaser: 'Primary Purchaser'
                    },
                    {
                        secondaryPurchaser: 'Secondary Purchaser'
                    }
                ]
            },
            agentInformation: 'Agent Information',
            otherInformation: 'Other Information',
            acknowledgement: 'Acknowledgement',
            reviewInformation: 'Review Information'
        },
        sidebarMenuActive: 'suiteInformation',
        sidebarMenuChildListActive: {
            purchaserInformation: {
                primaryPurchaser: true, 
                secondaryPurchaser: false
            }
        },
        defaultSidebarMenu: 'suiteInformation',
        defaultSidebarMenuChildListActive: {
            purchaserInformation: 'primaryPurchaser'
        }     
    },
    worksheetSuiteInformationSetting:{
        suiteInformationTitle: 'Suite Information',
        choice:[{
            label: 'First Choice',
            fields: [
                {
                    label: 'Model',
                    fieldType: 'textbox',
                    name: 'modelType1',
                    id: 'modelType1',
                    placeholder: 'Enter model',
                    isApiCallRequired: false
                },
                {
                    label: 'Lot',
                    fieldType: 'textbox',
                    name: 'lotType1',
                    id: 'lotType1',
                    placeholder: 'Enter lot#',
                    isApiCallRequired: false
                },
                {
                    label: 'Preference',
                    fieldType: 'textbox',
                    name: 'preference1',
                    id: 'preference1',
                    placeholder: 'Enter your preference',
                    isApiCallRequired: false
                }
            ]
        },
        {
            label: 'Second Choice',
            fields: [
                {
                    label: 'Model',
                    fieldType: 'dropdown',
                    name: 'modelType2',
                    id: 'modelType2',
                    placeholder: 'select model',
                    isApiCallRequired: false
                },
                {
                    label: 'Lot',
                    fieldType: 'textbox',
                    name: 'lotType2',
                    id: 'lotType2',
                    placeholder: 'Enter lot#',
                    isApiCallRequired: false
                },
                {
                    label: 'Preference',
                    fieldType: 'textbox',
                    name: 'preference2',
                    id: 'prererence2',
                    placeholder: 'Enter your preference',
                    isApiCallRequired: false
                }
            ]
        },
        {
            label: 'Third Choice',
            fields: [
                {
                    label: 'Model',
                    fieldType: 'dropdown',
                    name: 'modelType3',
                    id: 'modelType3',
                    placeholder: 'select model',
                    isApiCallRequired: false
                },
                {
                    label: 'Lot',
                    fieldType: 'dropdown',
                    name: 'lotType3',
                    id: 'lotType3',
                    placeholder: 'select lot#',
                    isApiCallRequired: false
                },
                {
                    label: 'Preference',
                    fieldType: 'dropdown',
                    name: 'preference3',
                    id: 'preference3',
                    placeholder: 'select your preference',
                    isApiCallRequired: false
                }
            ]
        }]
    },
    profileForm: {
        loginInformation:{
            emailAddress: '',
            password: '',
            rememberMe: false
        },
        forgotPasswordInformation:{
            emailAddress: ''
        },
        changePasswordInformation:{
            password: '',
            confirmPassword: ''
        },
        createAccountInformation:{
            firstName: '',
            lastName: '',
            emailAddress: '',
            confirmEmailAddress: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
        },
        profileInformation:{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            brokerageName: '',
            brokeragePhoneNumber: '',
            brokerageAddress: '',
            brokerageCity: '',
            brokerageProvince: '',
            brokerageCountry: '',
            brokeragePostalCode: '',
            privacyPolicyProfile: false
        }
    },
    worksheetForm:{
        suiteInformation:{
            modelType1: '',
            lotType1: '',
            preference1: '',
            modelType2: '',
            lotType2: '',
            preference2: '',
            modelType3: '',
            lotType3: '',
            preference3: ''
        },
        otherInformation:{
            appointmentType: ''
        },
        primaryPurchaser:{
            p1firstName: '',
            p1lastName: '',
            p1address: '',
            p1city: '',
            p1province: '',
            p1country: '',
            p1postalCode: '',
            p1phoneNumber: '',
            p1emailAddress: '',
            p1dob: '',
            p1maritalStatus: '',
            p1occupation: '',
            p1employer: '',
            p1purchasingType: '',
            p1notes: ''
        },
        secondaryPurchaser:{
            isSecondaryPurchaserRequired: '',
            p2firstName: '',
            p2lastName: '',
            p2address: '',
            p2city: '',
            p2province: '',
            p2country: '',
            p2postalCode: '',
            p2phoneNumber: '',
            p2emailAddress: '',
            p2dob: '',
            p2maritalStatus: '',
            p2occupation: '',
            p2employer: '',
            p2purchasingType: '',
            p2notes: ''
        },
        acknowledgementInformation:{
            privacyPolicyProfile: false
        }
    },
    validateForm:{
        profileForm: {
            loginInformation:{
                emailAddress: ['required', 'emailAddress'],
                password: ['required'],
                rememberMe: ['required']
            },
            forgotPasswordInformation:{
                emailAddress: ['required', 'emailAddress']
            },
            changePasswordInformation:{
                password: ['required'],
                confirmPassword: ['required']
            },
            createAccountInformation:{
                firstName: ['required'],
                lastName: ['required'],
                emailAddress: ['required', 'emailAddress'],
                confirmEmailAddress: ['required', 'emailAddress'],
                phoneNumber: ['required', 'phoneNumber'],
                password: ['required'],
                confirmPassword: ['required']
            },
            profileInformation:{
                firstName: ['required'],
                lastName: ['required'],
                phoneNumber: ['required', 'phoneNumber'],
                emailAddress: ['required', 'emailAddress'],
                brokerageName: ['required'],
                brokeragePhoneNumber: ['required', 'phoneNumber'],
                brokerageAddress: ['required'],
                brokerageCity: ['required'],
                brokerageProvince: ['required'],
                brokerageCountry: ['required'],
                brokeragePostalCode: ['required', 'postalCode'],
                privacyPolicyProfile: ['required']
            }
        },
        worksheetForm:{
            suiteInformation: {
                modelType1: ['required'],
                lotType1: ['required'],
                preference1: ['required'],
                modelType2: ['required'],
                lotType2: ['required'],
                preference2: ['required'],
                modelType3: ['required'],
                lotType3: ['required'],
                preference3: ['required'],   
            },
            otherInformation:{
                appointmentType: ['required']
            },
            primaryPurchaser:{
                p1firstName: ['required'],
                p1lastName: ['required'],
                p1address: ['required'],
                p1city: ['required'],
                p1province: ['required'],
                p1country: ['required'],
                p1postalCode: ['required', 'postalCode'],
                p1phoneNumber: ['required', 'phoneNumber'],
                p1emailAddress: ['required', 'emailAddress'],
                p1dob: ['required', 'date'],
                p1maritalStatus: ['required'],
                p1occupation: ['required'],
                p1employer: ['required'],
                p1purchasingType: ['required'],
                p1notes: ['notRequired']
            },
            secondaryPurchaser:{
                isSecondaryPurchaserRequired: ['required'],
                p2firstName: ['required'],
                p2lastName: ['required'],
                p2address: ['required'],
                p2city: ['required'],
                p2province: ['required'],
                p2country: ['required'],
                p2postalCode: ['required', 'postalCode'],
                p2phoneNumber: ['required', 'phoneNumber'],
                p2emailAddress: ['required', 'emailAddress'],
                p2dob: ['required', 'date'],
                p2maritalStatus: ['required'],
                p2occupation: ['required'],
                p2employer: ['required'],
                p2purchasingType: ['required'],
                p2notes: ['notRequired']
            },
            acknowledgementInformation:{
                privacyPolicyProfile: ['required']
            }
        }
    }
   
}