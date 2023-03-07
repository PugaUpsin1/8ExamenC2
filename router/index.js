const express = require("express");
const router = express.Router();

router.get('/entrada',(req,res)=>{
    const valores= {
            num:req.query.num,
            nombre:req.query.nombre,
            domicilio:req.query.domicilio,
            tipo:req.query.tipo,
            kw:req.query.kw,
            subtotal:req.query.subtotal, 
            descuento:req.query.descuento,
            impuesto:req.query.impuesto,
            totalpag:req.query.totalpag,
            preckw:req.query.preckw,
            servi:req.query.servi
         }
    res.render('entrada.html',valores);
})

router.post('/salida',(req,res)=>{
    const valores= {
            num:req.body.num,
            nombre:req.body.nombre,
            domicilio:req.body.domicilio,
            tipo:req.body.tipo,
            kw:req.body.kw,
            subtotal:req.body.subtotal, 
            descuento:req.body.descuento,
            impuesto:req.body.impuesto,
            totalpag:req.body.totalpag,
            preckw:req.body.preckw,
            servi:req.query.servi
            }
    res.render('salida.html',valores);
    
})

router.get('/entrada',(req,res)=>{
    const valores= {
            num:req.query.num,
            nombre:req.query.nombre,
            domicilio:req.query.domicilio,
            tipo:req.query.tipo,
            kw:req.query.kw,
            subtotal:req.query.subtotal, 
            descuento:req.query.descuento,
            impuesto:req.query.impuesto,
            totalpag:req.query.totalpag,
            preckw:req.query.preckw,
            servi:req.query.servi
         }
    res.render('entrada.html',valores);
})  

router.post('/salida',(req,res)=>{
    const valores= {
            num:req.body.num,
            nombre:req.body.nombre,
            domicilio:req.body.domicilio,
            tipo:req.body.tipo,
            kw:req.body.kw,
            subtotal:req.body.subtotal, 
            descuento:req.body.descuento,
            impuesto:req.body.impuesto,
            totalpag:req.body.totalpag,
            preckw:req.body.preckw,
            servi:req.query.servi
            }
    res.render('salida.html',valores);
})
module.exports=router;