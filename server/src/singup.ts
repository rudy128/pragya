import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function singup(name: string, email: string, password:string){
    try {
        const newUser = await prisma.user.create({
            data: {
              name: name,
              email: email,
              password: password
            }
        })
        // console.log(newUser)
        return newUser
    } catch (error) {
        console.error('Error creating user: ', error)
        return null
    } finally {
        await prisma.$disconnect()
    }

}