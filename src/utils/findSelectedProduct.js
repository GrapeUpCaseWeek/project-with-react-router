import { fruitsAndVegetables } from '../mocks/mock';

export default function findSelectedProduct (id) {
    return fruitsAndVegetables.find(item => item.id == id);
};
