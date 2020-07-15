import React, { useState } from 'react';
import classes from './ContactData.module.css';
import { connect } from 'react-redux'
import Button from '../../Components/UI/Button/Button'
import Spinner from '../../Components/UI/Spinner/Spinner'
import Input from '../../Components/UI/input/input'
import * as actions from '../../store/actions/index'
import { updateObject , checkValidity} from '../../shared/utilitiy';

const ContactData=(props)=>{
    const [orderForm,setOrderForm] = useState({name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
                },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 6,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
    })
    const [formIsValid,setFormIsValid]=useState(false)

    const orderHandler = ( event ) => {
        event.preventDefault();
        const formData ={};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const orderData = {
            ingredients: props.ings,
            price:props.price,
            orderData: formData,
            userId:props.userId
        }
        props.onOrderBurger(orderData,props.token); 
    }
    const inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedFormElement = updateObject(orderForm[inputIdentifier],
            {
                value : event.target.value,
                valid : checkValidity(event.target.value,orderForm[inputIdentifier].validation),
                touched: true
            });
        const updatedOrderForm = updateObject(orderForm,{ [inputIdentifier] :updatedFormElement});
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid)
    }

    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config:orderForm[key]
        });
    }

    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>
    );

    if ( props.loading ) {
        form = <Spinner />;
    }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );

}
const mapStateToProps = state =>{
    return {
        loading:state.order.loading,
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        token:state.auth.token,
        userId:state.auth.userId
}};
const mapDispatchToProps = dispatch =>{
    return{
        onOrderBurger:(orderData,token)=> dispatch(actions.purchaseBurger(orderData,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);