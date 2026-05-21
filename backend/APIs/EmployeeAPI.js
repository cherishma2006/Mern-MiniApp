import exp from 'express';
import {EmployeeModel} from '../models/Employeemodel.js';

export const EmployeeApp=exp.Router()
//REST API Routes
//Create new Employee
EmployeeApp.post("/employees",async(req,res)=>{
        //get new user obj from req
        const newEmployee=req.body;
        //Create new employee
        const newEmployeeDoc= new EmployeeModel(newEmployee)
        //save
        const result =await newEmployeeDoc.save();
         console.log("result : ",result)
        //send res
        res.status(201).json({message:"employee created"});
      }),
      //Read all users
        EmployeeApp.get("/employees",async(req,res)=>{
            //read all users from db
            let empList=await EmployeeModel.find();
            //send res
            res.status(200).json({message:"emp",payload:empList});
        })
// Read all Employee
EmployeeApp.get("/employees",async(req,res)=>{
        //Read object id from res
        const email0femp=req.user?.email;
        //find user by id
        const empObj=await EmployeeModel.findOne({email:email0femp}) 
        //if user not found 
        if(!empObj){
          return res.status(404).json({message:"user not found"})
        }
        //send res
         res.status(200).json({message:"emp",payload:empObj})
      })
//Edit Employee
EmployeeApp.put("/employees/:id",async(req,res)=>{
        //get modified user from req
        const modifiedemp=req.body;
        const  uid=req.params.id;
        //find emp by id and update
        const updateemp = await EmployeeModel.findByIdAndUpdate(uid,
            {$set:{...modifiedemp}},
        {new:true,runValidators:true});
        res.status(200).json({message:"User modified",payload:updateemp})
      })
      
// delete Employee
EmployeeApp.delete("/employees/:id",async(req,res)=>{
        //get id from req params
        let  uid=req.params.id;
        //find and delete  by id
        let deletedEmployee= await EmployeeModel.findByIdAndDelete(uid)
        if(!deletedEmployee){
            return res.status(404).json({message:"employee not found"})
        }
        else{
            res.status(200).json({message:"employee deleted",payload:deletedEmployee})
        }
    })
