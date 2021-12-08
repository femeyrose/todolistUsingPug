const { Router } = require('express')
const express =require('express')

const router = express.Router()

const todoModel = require('../../model/todo')

router.get('/', async(req,res) => {
  const result= await todoModel.getItems()
  res.render('todo',{itemList : result});

})


router.post('/add', async (req, res) => {
  console.log(req.body)
  try {
      await todoModel.addItem(req.body)
      const result= await todoModel.getItems()
      console.log(result)
      res.render('todo',{message:'Item added Successfully',itemList : result})
      } catch (error) {
        console.log(error)
        res.render('todo',{alert:'Failed to add item ....'}) 
    }

})

router.post('/delete', async (req, res) => {
  console.log(req.body)
  try {
      await todoModel.deleteItem(req.body)
      const result= await todoModel.getItems()
      console.log(result)
      res.render('todo',{message:'Item deleted Successfully',itemList : result})
      } catch (error) {
        console.log(error)
        res.render('todo',{alert:'Failed to delete item ....'}) 
    }

})

router.get('/view',async (req, res) => {
  console.log(req.body)
  try {
    const result= await todoModel.getItems()
    console.log(result)
    res.render('todo',{itemList : result})
    } catch (error) {
        console.log(error)
     }

})



module.exports = router;