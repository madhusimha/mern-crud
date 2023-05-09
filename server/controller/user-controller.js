import User from "../schema/user-schema.js";

export const addUsercontroller = async (request, response) => {
    const user = request.body;
    
    const newUser = new User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
    
} 

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}


export const getUser = async (request, response) => {
    try {
        const user = await User.findOne({id: request.params.id});
        response.status(200).json(user);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}


export const updateUser = async (request, response) => {
    const user = request.body;
    
    const updateUser = new User(user);
    try {
        await User.updateOne({id: request.params.id}, updateUser);
        response.status(201).json(updateUser, {id: request.params.id});
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}

export const updateUser2 = async (request, response) => {
    const user = request.body;

   // console.log(request.body);
    
    //const updateUser2 = new User(user);
    try {
        await User.updateOne({id: request.params.id}, user);
        response.status(201).json(user);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}


export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({id: request.params.id});
        response.status(200).json({message: 'User Deleted Successfully!', id: request.params.id});
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}