import User from '../modals/user.model.js'

export const getUser =async(req,res)=>{
   const {username} = req.params;
   try {
      const user = await User.findOne({username});

      const {hashedPassword,...detailWithoutPassword} = user.toObject();

      return res.status(200).json(detailWithoutPassword);
   } catch (error) {
      console.log(error);
   }

}