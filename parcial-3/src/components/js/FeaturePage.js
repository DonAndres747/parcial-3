  
import React from 'react';
import FeatureCard from './FeatureCard.js';
import '../css/FeaturePage.css';
import Brand from '../../Recursos/icon-brand-recognition.svg';
import Record from '../../Recursos/icon-detailed-records.svg';
import Brushes from '../../Recursos/icon-fully-customizable.svg';
  


const FeaturesPage = () => {
    return (
        <div className='features'>
            <div className='features-inner'>               
                <div className='titulo'>
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard. </p>
                </div>

                <div className='cartas'>
                    <FeatureCard image={Brand} class={'card brand'}>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </FeatureCard>
                    <FeatureCard image={Record} class={'card record'}>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </FeatureCard>
                    <FeatureCard image={Brushes} class={'card brushes'}>
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </FeatureCard>
                </div>  
            </div>
        </div>
    )
}

export default FeaturesPage;