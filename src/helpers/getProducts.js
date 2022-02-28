const url = 'https://run.mocky.io/v3/4e737750-ddd3-4c90-8e09-80237cc36a63';

export const getProducts = async (setState) => {

    try {
        const resp = await fetch(url);//esperamos a que se cumpla la promesa
        const data = await resp.json();//esperamos a que se parse la respuesta
        setState(data);//seteamos nuestro state de productos
    } catch (error) {
        console.log(error);
    }

}

export const getProductById = async (id, setState) => {

    try {
        const resp = await fetch(url);//esperamos a que se cumpla la promesa
        const data = await resp.json();//esperamos a que se parse la respuesta
        const product = data.find( el => el.id == id );
       setState(product);


    } catch (error) {
        console.log(error);
    }

}
