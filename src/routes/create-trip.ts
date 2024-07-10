import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import dayjs from 'dayjs';
import nodemailer from "nodemailer";
import { z } from 'zod';
import { prisma } from "../lib/prisma";
import { getMailClient } from "../lib/mail"
import { create } from "domain";

export async function createTrip(app: FastifyInstance){
    app.withTypeProvider<ZodTypeProvider>().post('/trips',{
        schema: {
    body: z.object({
        destination: z.string().min(4),
        starts_at: z.coerce.date(),
        ends_at: z.coerce.date(),
        owner_name: z.string(),
        owner_email: z.string().email(),
    }),
        },
    }, async (request) => {
        const {destination, starts_at, ends_at, owner_name, owner_email} = request.body
    
        if (dayjs(starts_at).isBefore(new Date())){
            throw new Error('Invalid trip start day')
        }
        if (dayjs(ends_at).isBefore(starts_at)){
            throw new Error ('End date cannot be before start date')
        }


        const trip = await prisma.trip.create({
            data:{
                destination,
                starts_at,
                ends_at,
                participants:{
                    create:{
                        name: owner_name,
                        email: owner_email,
                    }
                }
            }
        })

        const mail = await getMailClient()
        
        const message = await mail.sendMail({
            from:{
                name:'equipe Planer',
                address: '123@123.com'
            },
            to: {
                name: owner_name,
                address: owner_email,   
            },
            subject: 'testando ',
            html:'<p>teste</p>'
        })

        console.log(nodemailer.getTestMessageUrl(message))

        return{tripID: trip.id}
    }
    )
}