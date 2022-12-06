import React from 'react'
import HomeButton from './HomeButton'

export default function AboutPage() {
  return (
    <>
      <HomeButton />
      <div>
        <h1>About WOAB</h1>
        <p>This app is designed to help the user figure out which Wellington is best for them on a given day. Because we all know Wellington as a windy and tempermental city, it is important that our app helps you see which beach is best. The app will provide the user global Wellington weather statistics and more specific statistics per beach. The app can also filter beaches based on what they can provide such as whether a beach is good to see sunset or other features. </p>
        <h1>About the Team</h1>
        <p>Welly on a Beach was created by five aspiring future junior developers. We have all been working hard at dev academy and we are excited to present this app as our final project.</p>
        <h3>The programming aspirants</h3>
        <ul>
          <li>Allie</li>
          <li>Alyssa</li>
          <li>Emelyn</li>
          <li>Kelsey</li>
          <li>Paola</li>
        </ul>
        <h4>Contact us: emelyn.barrientos22@gmail.com</h4>
      </div>
    </>
  )
}
