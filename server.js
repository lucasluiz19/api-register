import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000;


app.post('/informative', async(req,res)=>{

    await prisma.informatives.create({
        data: { 
            noteNumber:req.body.noteNumber,
            cityOfOrigin: req.body.cityOfOrigin,
            destinationCity: req.body.destinationCity,    
            truckPlate: req.body.truckPlate,  
            truckBrand:req.body.truckBrand
        }
    })

    res.status(201).json(req.body)
})

app.listen(port, () => console.log(`listening on ${port}`));
