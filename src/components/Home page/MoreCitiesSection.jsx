import styled from 'styled-components';

//this component are belongs to qna section but its css are same as i need here
import {StyledQNASection} from './QNASection'
const MoreCities = ({ title, arrOfLocations }) => {
    return (
        <StyledMoreCities>
            <h2>{title}</h2>
            <div className='overflow-scroll'>
                {arrOfLocations.map((item, ind) => {
                    return <p key={ind}>{ item }</p>
                })}
            </div>
        </StyledMoreCities>
    )
}
export const MoreCitiesSection = () => {
    return (
        <StyledQNASection>    
            <MoreCities title={'More Top Cities'} arrOfLocations={arrOfLocations} />
            <MoreCities title={'VistaVoyage International'} arrOfLocations={arrOfInterNationalLocations} />
        </StyledQNASection>
    )
}

const StyledMoreCities = styled.div`
    & .overflow-scroll {
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 150px;
        grid-gap:10px;
       
    };

    & .overflow-scroll > p {
        font-size:12px;
        /* border:1px solid lime; */
       
    };
    & > h2 {
        color:#007fad;
        font-size:18px;
        margin-bottom: 15px;
    }
`;

const arrOfLocations = [
    'Chennai', 'Mysore', 'Pune', 'Shimla', 'Manali', 'Udhagamandalam', 'Gurgaon', 'Agra', 'London', 'Nainital', 'Pattaya', 'Udaipur', 'Kolkata', 'Ahmedabad', 'Mount Abu', 'Kochi', 'Srinagar', 'Darjeeling', 'Amritsar', 'Coimbatore', 'Chandigarh', 'Tirupati', 'Jodhpur', 'Las Vegas', 'Gangtok', 'Kuala Lumpur', 'Haridwar', 'Noida', 'Indore', 'Panaji', 'Varanasi', 'Kovalam', 'Panchgani', 'Jaisalmer', 'Gulmarg', 'Madurai', 'Kathmandu', 'Kanyakumari', 'Colombo', 'Berlin'];


const arrOfInterNationalLocations = [
    'VistaVoyage', " العالم العرب", 'VistaVoyage', ' ArgentinaVistaVoyage', 'AustraliaVistaVoyage ', 'БългарияVistaVoyage', 'BelgiëVistaVoyage', 'BrasilVistaVoyage', 'CanadaVistaVoyage', 'ČeskoVistaVoyage', 'ChileVistaVoyage', 'ColombiaVistaVoyage', 'DanmarkVistaVoyage', 'DeutschlandVistaVoyage', 'EcuadorVistaVoyage', 'ΕλλάδαVistaVoyage', 'EspañaVistaVoyage', 'FranceVistaVoyage', '한국VistaVoyage', 'HrvatskaVistaVoyage', 'IndonesiaVistaVoyage', 'IrelandVistaVoyage', 'ItaliaVistaVoyage', 'MagyarországVistaVoyage', 'MalaysiaVistaVoyage', 'MéxicoVistaVoyage', 'NederlandVistaVoyage', 'New Zealand VistaVoyage',
    'VistaVoyage'," العالم العرب",'VistaVoyage',' ArgentinaVistaVoyage' ,'AustraliaVistaVoyage ','БългарияVistaVoyage', 'BelgiëVistaVoyage' ,'BrasilVistaVoyage', 'CanadaVistaVoyage', 'ČeskoVistaVoyage', 'ChileVistaVoyage', 'ColombiaVistaVoyage', 'DanmarkVistaVoyage', 'DeutschlandVistaVoyage', 'EcuadorVistaVoyage', 'ΕλλάδαVistaVoyage', 'EspañaVistaVoyage', 'FranceVistaVoyage', '한국VistaVoyage', 'HrvatskaVistaVoyage', 'IndonesiaVistaVoyage', 'IrelandVistaVoyage', 'ItaliaVistaVoyage', 'MagyarországVistaVoyage', 'MalaysiaVistaVoyage', 'MéxicoVistaVoyage', 'NederlandVistaVoyage', 'New Zealand VistaVoyage'

]