import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mx-4'>
            <InfoCard bgClr={'bg-gradient-to-r from-secondary to-primary'} img={clock}></InfoCard>
            <InfoCard bgClr={'bg-accent'} img={marker}></InfoCard>
            <InfoCard bgClr={'bg-gradient-to-r from-secondary to-primary'} img={phone}></InfoCard>
        </div>
    );
};

export default Info;