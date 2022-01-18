import React from 'react';
import {useForm} from "react-hook-form";
import {loginThunk} from "../../Redux/auth-reducr";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";



const Login = (props) => {
    console.log(props)
    const onSubmit = data => {
        reset();
        props.loginThunk(data);
    };
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    if(!props.isAuth) { return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span>Email</span>
                    <input {...register("email",{required: "Type your email"})} placeholder="Email"/>
                    <p style={{color: "red"}}>{errors?.email?.message}</p>
                </div>
                <div>
                    <span>Password</span>
                    <input {...register("password", {required: "Type your password"})} type="password" placeholder="Password"/>
                    <p style={{color: "red"}}>{errors?.password?.message}</p>
                </div>
                <div>
                    <span>Remember me</span>
                <input {...register("rememberMe")}  type='checkbox'/>
                </div>
                <input type="submit" />
                {props.errors !== null ? <p style={{color: "red"}}>{props.errors}</p> : null}
            </form>
        </div>
    )}
    else return <Redirect to={`/profile/${props.id}`}/>
}

const mapStateToProps = (state) => {
    return {
      errors: state.auth.error,
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

export default connect(mapStateToProps, {loginThunk})(Login)