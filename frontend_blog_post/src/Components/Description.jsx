import React from 'react';
// import { Icon } from '@iconify/react';
// import Image from 'react-bootstrap/Image';

const Description = () => {
    return (
        <section className=' justify-content-center description_header_text'>
            <div className='bird_post_description'>
               
            {/* <Icon icon="mdi:bird" color="blue" rotate={1} /> */}
            </div>
            <div className='col text-center my-5'>
                <h2>Learn to code</h2>
                <p>With the world largest online coding platform</p>
                <button className='btn btn-primary'>Get started</button>
            </div>
        </section>
    );
}

export default Description;
