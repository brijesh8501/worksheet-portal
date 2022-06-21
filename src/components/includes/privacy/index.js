import React from 'react';
import FormFields from '../../form-fields';

class PrivacyPolicy extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        
        return(<div>
            <p className='text-danger fw-bold'>You must scroll to read the entire policy below, and click the checkbox to continue.</p>
            <p>We, Golfview Communities, its related and affiliated entities and those licensees using the “Golfview Communities” trademark (referred to as “Golfview Communities”), are committed to protecting your right to privacy. This privacy policy informs you of our practices relating to the collection, use and disclosure of personal information and tells you about the ways we ensure that your privacy and the confidentiality of your information are protected.</p>
            <h2 className='h4'>What Does “Personal Information” Mean?</h2>
            <p>For the purposes of this Statement, “personal information” means information about identifiable individuals and includes contact information (for example, name, mailing address, e-mail address, telephone number), demographic information, household information, preference information and transaction-related information. Personal information does not include business information, such as an individual’s business address and telephone number.</p>
            <h3 className='h4'>Collecting Personal Information</h3>
            <p>Golfview Communities collects personal information from individuals on a voluntary basis through surveys, contest entry forms, registration forms, questionnaires and transaction documents.</p>
            <h3 className='h4'>Using Personal Information</h3>
            <ul>
                <li>Golfview Communities uses personal information that it collects for the following limited purposes:</li>
                <li>To communicate with individuals</li>
                <li>To assist in understanding individuals’ needs and preferences and to adjust our products and services accordingly</li>
                <li>To conduct, process and complete transactions with customers</li>
                <li>Golfview Communities may, from time to time, contact individuals by electronic format, regular mail or telephone for any of the purposes set out above.</li>
            </ul>
            <h3 className='h4'>Disclosing Personal Information</h3>
            <p>We knowingly disclose personal information when we have received your consent to do so or under limited circumstances specifically described when personal information is collected. However, we will disclose personal information without such consent when such disclosure is permitted or required by law.</p>
            <p>We will not knowingly disclose personal information to any third parties except:</p>
            <ul>
                <li>To affiliated and associated companies within the Golfview Communities of Companies and only for the limited purposes described above. These affiliated and associated companies and their respective employees are restricted from using the personal information for any other purpose other than as described above.</li>
                <li>To its agents, professional advisors, promotional and marketing agencies, and to any other third parties in order to complete transactions, to process data and to service our customers. These third parties and their respective employees are only provided with such personal information as is necessary to perform the services for which they have been contracted and are restricted from using the personal information for any purpose other than as described above.</li>
                <li>Golfview Communities does not sell, rent or trade personal information that it collects. In the event of the sale of Golfview Communities, personal information may be one of the transferred business assets.</li>
            </ul>
            <h3 className='h4'>Retaining Personal Information</h3>
            <p>At such time as personal information is no longer required for the purposes stated in this Privacy Statement or other statutory requirements, such personal information will be made anonymous or destroyed. Protecting personal information.</p>
            <p>To ensure the security of our customers' personal information we have designated a Privacy Officer to be responsible for the care and control of personal information.</p>
            <p>Although we take great care in protecting the security of personal information stored in our databases, information transmitted over the Internet can be intercepted by unauthorized parties. Golfview Communities does not assume any liability for any unauthorized use or interception of personal information over the internet by third parties. In addition, we do not assume liability for any unauthorized use of personal information collected by third parties with websites that are the current or future subject of a link from our website.</p>
            <h3 className='h4'>Contact Us</h3>
            <p>Should you have any questions or comments about our privacy policy and/or practices, we invite you to contact us in one of the following ways:</p>
            <p className='mb-0'>By phone: 416-910-9339</p>
            <p className='mb-0'>By mail: 1 Innovation Dr. Renfrew, Ontario K7V 3Z4</p>
            <p className='mb-0'>Attention: Privacy Officer</p>
            <p>By email: tom@golfviewLD.com</p>
            <p>This Privacy Policy may be amended from time to time.</p>
        </div>);

    }

}

export default PrivacyPolicy;