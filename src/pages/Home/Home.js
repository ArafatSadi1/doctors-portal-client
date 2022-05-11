import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;