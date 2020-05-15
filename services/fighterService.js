const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {

    searchAll() {
        const items = FighterRepository.getAll();
        if (!items) {
            return null;
        }
        return items;
    }
    searchOne(id) {
        const item = FighterRepository.getOne({ id });
        if (!item) {
            return null;
        }
        return item;
    }
    createFighter(data) {
        const fighter = FighterRepository.create(data);
        if (!fighter) {
            return null;
        }
        return fighter;
    }
    deleteFighter(id) {
        const fighter = FighterRepository.delete(id);
        if (!fighter) {
            return null;
        }
        return fighter;
    }
    updateFighter(id, dataToupdate) {
        const fighter = FighterRepository.update(id, dataToupdate);
        if (!fighter) {
            return null;
        }
        return fighter;
    }
}

module.exports = new FighterService();