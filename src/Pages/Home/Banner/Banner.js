import React from 'react';
import doctor1 from '../../../assets/Images/imgDoctor/doctor1.jpg';


const Banner = () => {
    return (
        <div>
            <div className="hero p-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={doctor1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Dr. Chowdhury Walid</h1>
                        <p className="py-6">DR. CHOWDHURY MOHAMMAD WALID. Specialization. Physical Medicine. Degrees. MBBS,CCD,FCPS (PHYSICAL MEDICINE). Designation. <br/> Book your schedule now! <br/> Available from 4pm to 8pm except fridays.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;