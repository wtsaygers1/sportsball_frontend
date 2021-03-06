import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-12 col-lg-6">
                    <h3 className="text-center header">Who We Are</h3>
                    <p className="text-start subtext">Sports Ball is a community of bonhomie with
                    a passion for the park, chilling, and the obscure sports of the world.
                    Connect into the local scene and match with others by ability or interest</p>
                    <p className="subtext">We have one strict rule and that is good vibes only</p>
                    <p className="subtext">Good natured competition is welcomed but a must have is a thriving,
                    inclusive community to rally around one another, have good times, and grow
                    the obscure sports world</p>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="about_1.jpeg" className="rounded float-end fluid" alt="party play" />
                </div>
            </div>
            <div className="row py-4">
                <div className="col-12 col-lg-6">
                    <img src="about_2.jpeg" className="rounded float-start fluid" alt="people in park" />
                </div>
                <div className="col-12 col-lg-6">
                    <h3 className="text-center header">Who Should Play Sports Ball</h3>
                    <p className="text-start subtext">Anyone can use the Sports Ball app!</p>
                    <p className="subtext">We are a community open to all participants as long as you live our one rule.
                    Register, complete a profile, and connect into your community while staying active 
                    and having some fun</p>
                </div>
            </div>
        </div>
    )
}
