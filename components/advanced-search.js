import {Form, Button, Spinner} from 'react-bootstrap';
import {useForm} from 'react-hook-form'
import { useState } from 'react';
import {useRouter} from 'next/router'

export default function AdvancedSearchForm(){

    const {register, errors, handleSubmit, formState}= useForm({mode: "onBlur"});
    const router= useRouter();

    const [stillSubmitting, setSubmitting]= useState(false);

    function search(data){
        setSubmitting(true);
        const {search, country}= data;
        const mindate= 'none';
        const maxdate= 'none';
        router.push(`/advanced-search/${search}/${country}`);
        setSubmitting(false);
    }

    return(
        <>
        <h4 className='text-my-light-blue head'>Advanced Search</h4>
        <Form onSubmit={handleSubmit(search)}>
            <Form.Group>
                <Form.Label>Keyword</Form.Label>
                <Form.Control
                name='search'
                placeholder='Type Keywords You Want To Search For'
                ref={register({
                    required: {
                        value:true, message:'*This Field Is Required'
                    },
                    maxLength:{value:20, message:'*Cannot be greater than 20 letters'},
                    minLength:{value:3, message:'*Cannot be less than 3 letters'}
                })}
                />
                {
                    errors.search && <div className='form-error text-my-green'> {errors.search.message} </div>
                }
            </Form.Group>
            {/* <Form.Group>
                <Form.Label>Minimum Date</Form.Label>
                <Form.Control 
                name= 'mindate'
                type="date" 
                placeholder="none" 
                defaultValue="none"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Maximum Date</Form.Label>
                <Form.Control 
                name= 'maxdate'
                type="date" 
                placeholder="none" 
                defaultValue="none"
                />
            </Form.Group> */}
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control as="select"
                name='country'
                defaultValue='none'
                ref={register({
                    required: {
                        value:true, message:'*This Field Is Required'
                    }
                })}
                >
                <option value='none'>Worldwide</option>
                <option value='ng'>Nigeria</option>
                <option value='uk'>United Kingdom</option>
                <option value='us'>United States</option>
                </Form.Control>
            </Form.Group>
            <Button type='submit' size='sm' disabled={formState.isSubmitting||stillSubmitting} variant='my-green'>
               {stillSubmitting && <Spinner variant='my-dark-blue'></Spinner> } 
                Search
            </Button>
        </Form>
        </>
    )
}