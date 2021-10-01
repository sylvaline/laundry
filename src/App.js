
import React from 'react'
import {Route, Switch} from "react-router-dom"
import AboutUs from './component/AboutUs'
import TrainingAndSupport from './component/TrainingAndSupport'
import WhyUs from './component/WhyUs'
import Home from './component/Home'
import News from './component/News'
import Investment from './component/Investment'
import FAQ from './component/FAQ'
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/why-us" exact component={WhyUs} />
        <Route path="/training-and-support" exact component={TrainingAndSupport} />
        <Route path="/news" exact component={News} />
        <Route path="/investment" exact component={Investment} />
        <Route path="/faqs" exact component={FAQ} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
