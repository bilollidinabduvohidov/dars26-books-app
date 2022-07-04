const userCtrl = {
    signUp: async(req, res) => {
      const {name, surname, email, password} = req.body
  
      if(!name || !surname || !email || !password){
        return res.status(400).json({message: "Pls hamma qatorlarni to'ldiring!!!"})
      }
      
      res.status(201).send({name, surname, email, password})
    }
  }
  
  
module.exports = userCtrl