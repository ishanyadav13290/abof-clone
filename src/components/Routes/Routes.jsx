import {Routes, Route } from "react-router-dom"

export default function PathRoute(){
    return <Routes>
    <Route path=""/>
    <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>}/>
        <Route path="/register" element={<h1>Register Page</h1>}/>
        <Route path="/contact" element={<h1>Contact Page</h1>}/>
    </Routes>
}