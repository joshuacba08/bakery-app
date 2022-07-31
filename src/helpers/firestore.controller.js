import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore/lite";
import db  from '../db/config';

// CREATE
//Esta función recibe el objeto que quiero agregar como nuevo documento de mi colección y como segundo parámetro el nombre de mi colección a la que agregaré el nuevo documento.
export const createItem = async(obj, nameCollection) => {
    const colRef = collection(db, nameCollection);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj, nameCollection) => {
    const colRef = collection(db, nameCollection);
    await updateDoc(doc(colRef, id), obj)
}

// READ
//Esta función recibe por parámetro el nombre de la colección que quiero traer desde firestore y devuelve un array con mis productos incluyendo el id de cada documento.
export const getItems= async (nameCollection)  => {
    const colRef = collection(db, nameCollection);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Esta función recibe por parámetro una palabra clave "key" como el nombre de la propiedad del documento, "condition" como la condición lógica (==, <=...etc.), "value" como el valor de la condición. Tener en cuenta el tipo de dato, que debe coincidir con el que tenemos en nuestro firebase
//*ejemplo: where('category', '==' , 'panaderia')
export const getItemsByCondition = async (key, condition, value,nameCollection) => {
    const colRef = collection(db, nameCollection);
    const result = await getDocs(query(colRef, where(key, condition, value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id, nameCollection) => {
    const colRef = collection(db, nameCollection);
    const result = await getDoc(doc(colRef, id));
    return {...result.data(), id: result.id};
}

// DELETE
//Esta función elimina un documento de firebase, se usaría por ejemplo para anular una escritura en firebase como la de una orden de compra. Por cierto, las eliminaciones en firebase también son costosas $$$ ya que están restringidas.
export const deleteItem = async (id, nameCollection) => {
    const colRef = collection(db, nameCollection);
    await deleteDoc(doc(colRef, id));
}


/* -------------------------- Funciones de soporte -------------------------- */

//Crear un array de los items que obtengo a través de firebase y agregarles la propiedad id
const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}


//SUBIR TODOS NUESTROS PRODUCTOS A FIREBASE:
export const uploadCollectionItems = async (arrayProducts, nameCollection) => {
    arrayProducts.forEach( async (product) => {
        await createItem(product, nameCollection);
    })
}