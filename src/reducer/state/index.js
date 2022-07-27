import SuiteInformation from '../../components/worksheet/worksheet-parts/suiteInformation';
import OtherInformation from '../../components/worksheet/worksheet-parts/otherInformation';
import PurchaserInformation from '../../components/worksheet/worksheet-parts/purchaserInformation';
import AgentInformation from '../../components/worksheet/worksheet-parts/agentInformation';
import Acknowledgement from '../../components/worksheet/worksheet-parts/acknowledgement';
import ReviewInformation from '../../components/worksheet/worksheet-parts/reviewInformation';

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
        form: 'worksheetForm',
        sidebarMenu:{
            suiteInformation: {
                title: 'Suite Information',
                component: SuiteInformation,
                componentProps1: 'worksheetSidebarSetting.sidebarMenu.suiteInformation.title',
                componentProps2: 'navigateWorksheetSection'
            },
            purchaserInformation: {
                title: 'Purchaser Information',
                component: PurchaserInformation,
                childInformation:[
                    {
                        title: 'Primary Purchaser',
                        componentProps1: 'p1',
                        componentProps2: 'primaryPurchaser',
                        componentProps3: 'navigateWorksheetSection' 
                    },
                    {
                        title: 'Secondary Purchaser',
                        componentProps1: 'p2',
                        componentProps2: 'secondaryPurchaser',
                        componentProps3: 'navigateWorksheetSection'
                    }
                ]
            },
            agentInformation: {
                title: 'Agent Information',
                component: AgentInformation,
                componentProps1: 'worksheetSidebarSetting.sidebarMenu.agentInformation.title',
                componentProps2: 'navigateWorksheetSection'
            },
            otherInformation: {
                title: 'Other Information',
                component: OtherInformation,
                componentProps1: 'worksheetSidebarSetting.sidebarMenu.otherInformation.title',
                componentProps2: 'navigateWorksheetSection'
            },
            acknowledgement: {
                title: 'Acknowledgement',
                component: Acknowledgement,
                componentProps1: 'worksheetSidebarSetting.sidebarMenu.acknowledgement.title',
                componentProps2: 'navigateWorksheetSection'
            },
            reviewInformation: {
                title: 'Review Information',
                component: ReviewInformation,
                componentProps1: 'worksheetSidebarSetting.sidebarMenu.reviewInformation.title',
                componentProps2: 'navigateWorksheetSection'
            }
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
                    id: 'preference2',
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
            emailAddress: {
                label: 'Email address',
                value: ''
            },
            password: {
                label: 'Password',
                value: ''
            },
            rememberMe: {
                label: 'Remember me',
                value: false
            },
        },
        forgotPasswordInformation:{
            emailAddress: {
                label: 'Email Address',
                value: ''
            },
        },
        changePasswordInformation:{
            password: {
                label: 'Password',
                value: ''
            },
            confirmPassword: {
                label: 'Confirm password',
                value: ''
            }
        },
        createAccountInformation:{
            firstName: {
                label: 'First name',
                value: ''
            },
            lastName: {
                label: 'Last name',
                value: ''
            },
            emailAddress: {
                label: 'Email address',
                value: ''
            },
            confirmEmailAddress: {
                label: 'Confirm email address',
                value: ''
            },
            phoneNumber: {
                label: 'Phone number',
                value: ''
            },
            password: {
                label: 'Password',
                value: ''
            },
            confirmPassword: {
                label: 'Confirm password',
                value: ''
            }
        },
        profileInformation:{
            firstName: {
                label: 'Agent first name',
                value: ''
            },
            lastName: {
                label: 'Agent last name',
                value: ''
            },
            phoneNumber: {
                label: 'Agent phone number',
                value: ''
            },
            emailAddress: {
                label: 'Agent email address',
                value: ''
            },
            brokerageName: {
                label: 'Brokerage name',
                value: ''
            },
            brokeragePhoneNumber: {
                label: 'Brokerage phone number',
                value: ''
            },
            brokerageAddress: {
                label: 'Brokerage address',
                value: ''
            },
            brokerageCity: {
                label: 'Brokerage city',
                value: ''
            },
            brokerageProvince: {
                label: 'Brokerage province/state/region',
                value: ''
            },
            brokerageCountry: {
                label: 'Brokerage country',
                value: ''
            },
            brokeragePostalCode: {
                label: 'Brokerage postal/zip code',
                value: ''
            },
            privacyPolicyProfile: {
                label: 'I agree that I have read and accept the Privacy Policy/Terms of Use',
                value: false
            }
        }
    },
    worksheetForm:{
        suiteInformation:{
            modelType1: {
                label: 'Model',
                value: ''
            },
            lotType1: {
                label: 'Lot',
                value: ''
            },
            preference1: {
                label: 'Preference',
                value: ''
            },
            modelType2: {
                label: 'Model',
                value: ''
            },
            lotType2: {
                label: 'Lot',
                value: ''
            },
            preference2: {
                label: 'Preference',
                value: ''
            },
            modelType3: {
                label: 'Model',
                value: ''
            },
            lotType3: {
                label: 'Lot',
                value: ''
            },
            preference3: {
                label: 'Preference',
                value: ''
            }
        },
        otherInformation:{
            appointmentType: {
                label: 'Preferred appointment type:',
                value: ''
            }
        },
        primaryPurchaser:{
            p1firstName: {
                label: 'First name',
                value: ''
            },
            p1lastName: {
                label: 'Last name',
                value: ''
            },
            p1address: {
                label: 'Address',
                value: ''
            },
            p1city: {
                label: 'City',
                value: ''
            },
            p1province: {
                label: 'Province/State/Region',
                value: ''
            },
            p1country: {
                label: 'Country',
                value: ''
            },
            p1postalCode: {
                label: 'Postal/Zip code',
                value: ''
            },
            p1phoneNumber: {
                label: 'Phone number',
                value: ''
            },
            p1emailAddress: {
                label: 'Email address',
                value: ''
            },
            p1dob: {
                label: 'Date of birth',
                value: ''
            },
            p1maritalStatus: {
                label: 'Marital status',
                value: ''
            },
            p1occupation: {
                label: 'Occupation',
                value: ''
            },
            p1employer: {
                label: 'Employer',
                value: ''
            },
            p1purchasingType: {
                label: 'Your client is purchasing this home',
                value: ''
            },
            p1notes: {
                label: 'Notes',
                value: ''
            }
        },
        secondaryPurchaser:{
            isSecondaryPurchaserRequired: {
                label: 'Would you like to add secondary purchaser?',
                value: ''
            },
            p2firstName: {
                label: 'First name',
                value: ''
            },
            p2lastName: {
                label: 'Last name',
                value: ''
            },
            p2address: {
                label: 'Address',
                value: ''
            },
            p2city: {
                label: 'City',
                value: ''
            },
            p2province: {
                label: 'Province/State/Region',
                value: ''
            },
            p2country: {
                label: 'Country',
                value: ''
            },
            p2postalCode: {
                label: 'Postal/Zip code',
                value: ''
            },
            p2phoneNumber: {
                label: 'Phone number',
                value: ''
            },
            p2emailAddress: {
                label: 'Email address',
                value: ''
            },
            p2dob: {
                label: 'Date of birth',
                value: ''
            },
            p2maritalStatus: {
                label: 'Marital status',
                value: ''
            },
            p2occupation: {
                label: 'Occupation',
                value: ''
            },
            p2employer: {
                label: 'Employer',
                value: ''
            },
            p2purchasingType: {
                label: 'Your client is purchasing this home',
                value: ''
            },
            p2notes: {
                label: 'Notes',
                value: ''
            }
        },
        acknowledgementInformation:{
            privacyPolicyProfile: {
                label: 'I agree that I have read and accept the Privacy Policy/Terms of Use',
                value: false
            }
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