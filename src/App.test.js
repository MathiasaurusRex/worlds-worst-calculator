import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'; // testing helpers
import '@testing-library/jest-dom/extend-expect';
import App from './App';

//we can put all the tests in the parent component to cover children components. The cool part about react testing library is writing the test the same way the user interacts with UI, the unit test becomes an integration test. 

// cleanup on exiting each test
afterEach(cleanup)


test('renders App component successfully', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Worlds Worst/i);
  expect(linkElement).toBeInTheDocument();
});

//test the calculator button -- what will the user see if they click the buttons. Are they working the way they're supposed to work on the UI
test('renders App component successfully', () => {
  const { getByText, getByTestId, debug } = render(<App />);

   //checking if the button is showing in the UI
   expect(getByTestId('first-button')).toBeTruthy();

   //testing if the what button should be equal to before being clicked 
   expect(getByText('1')).toBeTruthy();
   expect(getByTestId('final-result').innerHTML).toBe("3");


   //if we click number 1, it should be equal to 2 and the results should be equal to 4
   fireEvent.click(getByText('1'));
   expect(getByTestId('first-button').innerHTML).toBe("2");
   expect(getByTestId('final-result').innerHTML).toBe("4");

   //testing the second button
   expect(getByTestId('second-button').innerHTML).toBe("2")
   fireEvent.click(getByTestId('second-button'));

  //the second button and the equal buttons have changed, we don't want to do math while writing the test, we can just use the word 'not'
    expect(getByTestId('second-button').innerHTML).not.toBe("2")
    expect(getByTestId('final-result').innerHTML).not.toBe("4")

  //if want to see how the dom elements are being rendered to modify our test, we can use debug() method at the end of the test or anywhere in the test.
   //  debug()
});

