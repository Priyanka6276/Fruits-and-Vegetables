const express = require("express")
const router = express.Router()
const Vegetable = require("../models/vegetables")

//================================VEGETABLES================================

//INDEX
router.get("/", (req,res) => {
    Vegetable.find({}, (error,allVegetables) => {
      if(!error){
        res
        .status(200)
        .render("vegetables/Index", {
          vegetables: allVegetables
        })
      } else {
        res
        .status(400)
        .send(error)
      }
    })
  })
  
  
  //NEW
  router.get("/new", (req,res) => {
    console.log("2.controller")
    res.render("vegetables/New")
  })
  
  //DELETE
  router.delete("/:id", (req,res) => {
    Vegetable.findByIdAndDelete(req.params.id, (err,data) => {
      res.redirect("/vegetables")
    })
  })
  
  //UPDATE
  router.put("/:id", (req,res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err,updatedVegetable) => {
      if(!err){
        res.status(200).redirect(`/vegetables/${req.params.id}`)
      } else {
        res.status(400).send(err)
      }
    })
  })
  
  
  //CREATE
  router.post("/", (req,res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true
    } else {
      req.body.readyToEat = false
    }
    Vegetable.create(req.body, (error, createdVegetable) => {
      if(!error) {
        res
        .status(200)
        .redirect("/vegetables")
      } else {
        res
        .status(400)
        .send(error)
      }
    })
  })
  
  //EDIT
  router.get("/:id/edit", (req,res) => {
    Vegetable.findById(req.params.id, (err,foundVegetable) => {
      if (!err) {
        res.status(200).render("vegetables/Edit", {vegetable: foundVegetable})
      } else {
        res.status(400).send({mes: err.message})
      }
    })
  })
  
  
  //SHOW
  router.get("/:id", (req,res) => {
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
      if(!error) {
        res
        .status(200)
        .render("vegetables/Show", {
          vegetable: foundVegetable
        })
      } else {
        res
        .status(400)
        .send(error)
      }
    })
  })
  
   

  module.exports = router