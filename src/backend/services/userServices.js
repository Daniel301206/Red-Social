import {PrismaCliente } from '@prisma/client';

const prisma=new PrismaCliente
export const userService={
    // obtener mis usuarios 
    async getAllUsers(){
        try{
            return await prisma.user.findMany()
        }catch(error){
            throw error('error al obtener usuarios' + error.message);
        }
    },
    async creatUsers(Id,data){
        try{
            const {email,name}=data;
            return await prisma.user.create({
                data :{email, name}
                })
        }catch(error){
            throw error ('error al crear usuario' + error.message);
            }
        },
}

