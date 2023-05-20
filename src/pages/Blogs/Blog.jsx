

const Blog = () => {
    return (
        <div className="m-4">
            <h1 className="text-xl">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>Ans:Access Token:
                An access token is a credential that is issued to a client (such as a mobile app or a web application) after a successful authentication process. It typically contains information about the client and its permissions, such as user identity, access privileges, and an expiration time. The access token is used by the client to include in each request to the server, allowing the server to verify the client's identity and authorize its actions.

                Refresh Token:
                A refresh token is a long-lived credential that is also issued during the authentication process. It is used to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are not typically sent with each request to the server. Instead, they are securely stored on the client-side and sent to the server only when a new access token is needed.</p>
            <h1 className="text-xl">2.Compare SQL and NoSQL databases?</h1>
            <p>Ans:SQL: SQL databases use a rigid, tabular data model with predefined schemas. Data is organized into tables with rows and columns, where each column has a specific data type. Relationships between tables are established through keys (e.g., primary keys, foreign keys).

                NoSQL: NoSQL databases offer a flexible, schema-less data model. They can store different types of data, including key-value pairs, documents, graphs, or wide-column stores. NoSQL databases are designed to handle unstructured, semi-structured, and rapidly changing data.</p>
            <h1 className="text-xl">3.What is express js? What is Nest JS ?</h1>
            <p>Ans:Express.js:
                Express.js is a minimalist and unopinionated web framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js focuses on being lightweight and allows developers to have more control over the application's structure and design choices. It provides a set of basic features for routing, middleware handling, request/response handling, and templating engines.
                Nest.js is a progressive, opinionated framework for building scalable and maintainable server-side applications. It is built on top of Express.js but adds additional features and design patterns inspired by Angular, TypeScript, and other modern frameworks. Nest.js follows a modular architecture and promotes the use of decorators, dependency injection, and TypeScript decorators for building structured and scalable applications.</p>
            <h1 className="text-xl">4.What is MongoDB aggregate and how does it work ?</h1>
            <p>Ans:In MongoDB, the aggregate function is used to perform complex data analysis and aggregation operations on collections. It allows you to process and transform the data using a pipeline of stages, where each stage performs a specific operation on the documents.</p>
        </div>
    );
};

export default Blog;