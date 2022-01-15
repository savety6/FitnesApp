//import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'
import Form from '../components/Form'
import FormElement from '../components/FormElement'
import {useState} from 'react'

export default function LoginSignin() {
    const [activeForm, setActiveForm] = useState('login');
    const [formHeight, setFormHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight

        setFormHeight(height)
    }

    return (
        <div className="LoginSignin" >
            <div className="hedPease">
                <h2 className={activeForm === 'login' ? 'login selected': 'login'} onClick={()=> setActiveForm('login')}>Login</h2>
                <h2 className={activeForm === 'signin' ? 'SignIn selected': 'SignIn'} onClick={()=> setActiveForm('signin')}>SignIn</h2>
                <div className="line"></div>
            </div>  
            <div className="forms" style={{ height: formHeight}}>
                
                <CSSTransition in={activeForm ==='login'} timeout={1000} classNames="form-primary" unmountOnExit onEnter={calcHeight}>
                    <Form>
                        <FormElement label='Email' type='email' name='email'></FormElement>
                        <FormElement label='Password' type='password' name='password'></FormElement>
                        <div class="details">
                            <label><input type="checkbox" name="rememberMe" required/> Remember Me </label>
                            <a>Forgot your password?</a>
                        </div>
                    </Form>
                </CSSTransition>
                <CSSTransition in={activeForm ==='signin'} timeout={1000} classNames="form-secondary" unmountOnExit onEnter={calcHeight}>
                    <Form>
                        <FormElement label='Username' type='text' name='username'></FormElement>
                        <FormElement label='Email' type='email' name='email'></FormElement>
                        <FormElement label='Password' type='password' name='password'></FormElement>
                        <FormElement label='Password2' type='password' name='password2'></FormElement>
                        <div class="details">
                            <label><input type="checkbox" name="rememberMe" required/> Remember Me </label>
                            <a>Forgot your password?</a>
                        </div>
                    </Form>
                </CSSTransition>
                
            </div>
                <input type="submit" value="Login" name="signin"/>

        </div>
    )
}