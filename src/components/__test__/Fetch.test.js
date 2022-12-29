import React from "react";
import {screen,render,fireEvent, cleanup,waitFor,wait, getByTestId,waitForElement} from '@testing-library/react';
import Fetch,{URL} from "../Fetch";
import axios from "axios";
import userEvent from '@testing-library/user-event';


describe('test fetch component',()=>{
    afterEach(cleanup);
    test('render loading button',()=>{
        render(<Fetch/>);
        const loadBtn = screen.queryByTestId("load");
        expect(loadBtn).toBeTruthy()
    });

    test('show loading after click load btn',()=>{
        const {getByText,getByTestId}=render(<Fetch/>);
        fireEvent.click(getByText('Load jokes'));
        expect(getByTestId('fetch-loading').textContent).toBe('Loading...')
    });

    test('starts with any loaded data',()=>{
        const {getByText,queryByTestId}=render(<Fetch/>);
        expect(queryByTestId('fetch-joke')).toBeFalsy();
    });
    jest.mock('axios')
    test('display loaded data from api after click load btn',async()=>{
        axios.get = jest.fn()
        axios.get.mockResolvedValue({
            data:[
                {
                  "userId": 1,
                  "id": 1,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }]
          });
        const {getByText,queryByTestId,getByTestId,findByTestId,getAllByTestId}=render(<Fetch/>);
        fireEvent.click(getByText('Load jokes'));
        await waitFor(()=>{
        expect(getAllByTestId('fetch-joke')).toBeTruthy();
        expect(getByTestId("fetch-joke").textContent).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
              
        }) 

        // const rowValues = await waitForElement(() =>
        //     getAllByTestId("fetch-joke").map(row => row.textContent)
        // );
        // expect(rowValues).toEqual(["sunt aut facere repellat provident occaecati excepturi optio reprehenderit"]);
        expect(axios.get).toHaveBeenCalledWith(URL);
        expect(axios.get).toHaveBeenCalledTimes(1);
        // const joke='test jokes';
        // //mock api data
        // // Mock API
        // jest.spyOn(global, 'fetch')
        // .mockImplementation(() => Promise.resolve({
        //     status: 200,
        //     json: () => Promise.resolve({
        //     value: joke
        //     })
        // }));
        // const {getByText,queryByTestId,getByTestId,findByTestId}=render(<Fetch/>);
        // fireEvent.click(getByText('Load jokes'));
        // await waitFor(()=>{
        //    // findByTestId('fetch-joke');
        //     expect(findByTestId('fetch-joke')).toBeTruthy();
        //     expect(global.fetch).toBeCalledTimes(1);
        //     expect(global.fetch.mock.calls[0][0]).toBe('https://api.chucknorris.io/jokes/random')

        // }) 
       // global.fetch.mockClear();
    })

    jest.mock('axios')
    test('display added post',async()=>{
        axios.post = jest.fn()
        axios.post.mockResolvedValue({
            data:
                {
                  "userId": 1,
                  "id": 1,
                  "title": "test",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
          });
          const {getByText,queryByTestId,getByTestId,findByTestId,getAllByTestId}=render(<Fetch/>);
          const postInput=screen.getByPlaceholderText('Add Post')
          userEvent.type(postInput,'test');
          console.log(6,postInput)
          fireEvent.click(getByTestId('add-post'));
          await waitFor(()=>{
          expect(getByTestId('fetch-joke')).toBeTruthy();
          expect(getByTestId("fetch-joke").textContent).toBe('test');                
          }) 
        expect(axios.post).toHaveBeenCalledTimes(1);

    })


})