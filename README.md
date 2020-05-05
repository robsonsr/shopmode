REACT NATIVE
QRCODE EXEMPLO
![](https://user-images.githubusercontent.com/9003593/81031398-89ea6300-8e62-11ea-8f71-8226b76489bd.jpeg)
<img src="https://user-images.githubusercontent.com/9003593/81031398-89ea6300-8e62-11ea-8f71-8226b76489bd.jpeg"/>
#Usando realm

import getRealm from '../services/realm'

const realm = await getRealm();
realm.write(() => {
  realm.create('Products', {id: 1, name: '...', description: 'asdasda asdasdasd'}); //cria o objeto no banco(linha)
});

useEffect(() => {
  const loadProducts = async() => {
    const realm = await getRealm();
    const data = realm.objects('Products').sorted('name', true);// list products by name
  }
  loadProducts();
}, [])

#Lista de filtros(sort, like, CONTAINS[c], ...)
https://realm.io/docs/javascript/latest/#queries
