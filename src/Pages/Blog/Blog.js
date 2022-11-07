import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-5'>
            <h2 className='text-4xl'>Welcome To The BLog Route</h2>
            <br />
            <h4 className='text-3xl mb-5'>The question answers are provided bellow</h4>
            <h1 className='text-2xl text-yellow-600 mb-2'>Q-1: What are the Differences between SQL and NoSQL?</h1>
            <p><span className='text-yellow-600'>Ans</span>: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, <br/> while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, <br/> while NoSQL is better for unstructured data like documents or JSON.</p>
            <br/>
            <h1 className='text-2xl text-yellow-600 mb-2'>Q-2: What is JWT, and how does it work?</h1>
            <p><span className='text-yellow-600'>Ans</span>: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact <br/> and self-contained way for securely transmitting information between parties as a JSON object. <br/> This information can be verified and trusted because it is digitally signed.</p>
            <br/>
            <h1 className='text-2xl text-yellow-600 mb-2'>Q-3: What is the difference between javascript and NodeJS?</h1>
            <p><span className='text-yellow-600'>Ans</span>: JavaScript is a simple programming language that can be used with any browser that has <br/> the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution <br/> environment for the JavaScript programming language.</p>
            <br/>
            <h1 className='text-2xl text-yellow-600 mb-2'>Q-4: How does NodeJS handle multiple requests at the same time?</h1>
            <p className='mb-5'><span className='text-yellow-600'>Ans</span>: Node's main JavaScript thread uses an event loop . When multiple requests are made, the first is processed while the <br/> rest are blocked (until the first is complete). Each request is <br/> processed one loop at a time until they're all processed.</p>
        </div>
    );
};

export default Blog;