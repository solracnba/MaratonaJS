const express = require('express');

const {Link} = require('../models');

const router = express.Router();


router.get('/', (req , res)=>{
return res.jsonOK('Links');

});

router.post('/', async(req,res)=>{

const accountId= 1; ///req.id;    
const {label, url, isSocial} = req.body;

console.log(label, url, isSocial);

const image = 'https://google.com/image.jpg';

const link = await Link.create({label, url, isSocial,image, accountId});



    return res.jsonOK(link);

});

router.put('/:id', async(req,res)=>{

    const accountId =1;
    const {id} = req.params;
    const { body } = req;
    const fields = ['label','url','isSocial'];

    const link = await Link.findOne({where: {id, accountId}});

    if(!link) return res.jsonNotFound();

    fields.map((fieldName) => {

        const newValue = body[fieldName];
        if(newValue) link[fieldName] = newValue;

    });

    await link.save();

    return res.jsonOK(link);

});


module.exports = router;