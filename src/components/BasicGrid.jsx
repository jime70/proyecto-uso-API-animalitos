    import React from "react";
    import Form from 'react-bootstrap/Form';

    const BasicGrid = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md"> 
            <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Example textarea</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3} 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Form.Group>
            </Form>
        </div>
        </div>
    );
    }

    export default BasicGrid;
