import {render,screen,fireEvent} from '@testing-library/react';
import Login from '../Login';
import userEvent from '@testing-library/user-event';

describe ("test Login component", ()=>{
    test('render the submit and reset button', ()=>{
        render(<Login/>);
        const buttonList =screen.getAllByRole('button');
        expect(buttonList).toHaveLength(2)
    });

    test('render the submit button', ()=>{
        render(<Login/>);
        const submitBtn =screen.getAllByTestId('submit')
        expect(submitBtn).toHaveLength(1)
    })

    test('email field type should be email',()=>{
        render(<Login/>);
        const emailInput=screen.getByPlaceholderText('Enter email');
        expect(emailInput).toHaveAttribute('type','email')
    });

    test('email filed value should be in email format',()=>{
        render(<Login/>)
        const emailInput=screen.getByPlaceholderText('Enter email');
        userEvent.type(emailInput,'revathi@gmail.com')
        expect(emailInput.value).toMatch('revathi@gmail.com')
    })

    test('should display alert if error',()=>{
         render(<Login/>)
         const emailInput=screen.getByPlaceholderText('Enter email');
         const passwordInput=screen.getByPlaceholderText('Password');
         const submitBtn =screen.getByTestId('submit');
      
        userEvent.type(emailInput,'');
        userEvent.type(passwordInput, "123456");
        fireEvent.click(submitBtn);
        //const error =screen.getByTestId('error');
        const error = screen.getByText("Email is not valid");
        expect(error).toBeInTheDocument()

       


    })
})