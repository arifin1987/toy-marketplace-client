import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../providers/AuthProvider';
import PoliceCar from './PoliceCar/PoliceCar';
import SportsCar from './SportsCar/SportsCar';
import FireTruck from './FireTruck/FireTruck';

const ShopByCategory = () => {
    
    const[police,setPolice] = useState([]);
    const[fire,setFire] = useState([]);
    const[sports,setSports] = useState([]);

    const url1 = 'http://localhost:5000/police';
    useEffect(() => {
        fetch(url1)
            .then(res => res.json())
            .then(data => setPolice(data))
            
    }, [url1]);
    const url2 = 'http://localhost:5000/fire';
    useEffect(() => {
        fetch(url2)
            .then(res => res.json())
            .then(data => setFire(data))
            
    }, [url2]);
    const url3 = 'http://localhost:5000/sports';
    useEffect(() => {
        fetch(url3)
            .then(res => res.json())
            .then(data => setSports(data))
            
    }, [url3]);
    return (

      
    <div>
        <Tabs className="m-8 text-center">
            <h1 className='text-6xl mb-6'>Shop By Category</h1>
            <TabList>
                <Tab>Sports Car</Tab>
                <Tab>Mini Fire Truck</Tab>
                <Tab>Mini Police Car</Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-2 gap-4'>
                {sports.map(sport=> <SportsCar
                
                sport ={sport}
                ></SportsCar>)}
                </div>
            
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-2 gap-4'>
                {fire.map(fir=> <FireTruck
                fir={fir}
                ></FireTruck>)}
                </div>
            
            </TabPanel>
            
            <TabPanel >
                <div className='grid grid-cols-2 gap-4'>
                {police.map(pol=> <PoliceCar
                pol={pol}
            
                >
                </PoliceCar>)}
                </div>
            
            </TabPanel>
        </Tabs>
    </div>
    );
};

export default ShopByCategory;







