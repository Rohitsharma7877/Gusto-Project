import { Button } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='main' >
        <div >
        <p className='mainp1'>One place for payroll, benefits,<br/> and so much more.</p>
        <p className='mainp2'>People are at the heart of every successful business.<br/> Gusto puts the tools you need to hire, pay, insure, <br/>and support your team in one platform.</p>
        <div className='part'>
            <Button className='part1'>Create Account</Button>
            <Button className='part2'>Learn how gusto work</Button>
        </div>
        <p>allready use in Gusto? Sign in</p>
        </div>
        <div className='main2'>
            <div className='main2p1'>
                <img className='image'  src="https://prod.gusto-assets.com/assets/svg/header/pottedplant_kale-9f3a7160b7c67bc539b49e10e4f15c307bd533679eb16004a54a96dc70b8767b.svg"/>
                 <div>
                    <p>Starting BUsiness</p>
                    <p> hire, pay, insure, and support your team in one platform.</p>
                 </div>
            </div>
            <div className='main2p1'>
                <img className='image'  src="https://prod.gusto-assets.com/assets/svg/header/pottedplant_kale-9f3a7160b7c67bc539b49e10e4f15c307bd533679eb16004a54a96dc70b8767b.svg"/>
                 <div>
                    <p>Starting BUsiness</p>
                    <p> hire, pay, insure, and support your team in one platform.</p>
                 </div>
            </div>
            <div className='main2p1'>
                <img className='image' src="https://prod.gusto-assets.com/assets/svg/header/pottedplant_kale-9f3a7160b7c67bc539b49e10e4f15c307bd533679eb16004a54a96dc70b8767b.svg"/>
                 <div>
                    <p>Starting BUsiness</p>
                    <p> hire, pay, insure, and support your team in one platform.</p>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default Home