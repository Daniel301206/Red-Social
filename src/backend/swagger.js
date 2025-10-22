 import swaggerJsdoc from 'swagger-jsdoc'; 
 
 const swaggerOptions = { 
    definition: { 
        openapi: '3.0.0', 
        info: { 
            title: 'Mi API REST',
            version: '1.0.0',
            description: "Documentación de la API REST con Express, Prisma y PostgreSQL"
        },  
        contact: {
            email:"daniel3012riberr@gmail.com"
        },
        servers: [{
            url: "http://localhost:3000",
            description: "Servidor de desarrollo"
    }],
},
    apis: ['./routes/*.js'] }; 
    export const swaggerSpec = swaggerJsdoc(swaggerOptions);