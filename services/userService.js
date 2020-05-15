const { UserRepository } = require('../repositories/userRepository');

class UserService {

    createNewUser(data) {
        const newUser = UserRepository.create(data)
        if(!newUser) {
            return null;
        }
        return newUser;
    }

    updateUserData(id, dataToUpdate){     
           const updateUser = UserRepository.update(id, dataToUpdate)
        if(!updateUser) {
            return null;
        }
        return updateUser;
    }

    searchOne(id) {
        const item = UserRepository.getOne({id});
        if(!item) {
            return null;
        }
        return item;
    }
    searchAll() {
        const items = UserRepository.getAll();
        if(!items) {
            return null;
        }
        return items;
    }
    delete(id) {
        const item = UserRepository.delete(id);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();