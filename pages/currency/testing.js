import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative h-[140vh]',
    yes: `box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2)`
}

//<a href="https://widget.onramper.com?color=1d2d50" target="_blank"> OnRamp </a> 

const OnRamp = () => {
    return (
            <iframe
                src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
                height="660px"
                width="482px"
                title="Onramper widget"
                frameBorder="0"
                allow="accelerometer;
  autoplay; camera; gyroscope; payment"
                className = {style.yes}
            >
                Buy crypto
            </iframe>
    )
}
export default OnRamp