const products = [
    {
      productId: 1,
      name: "headphones",
      category: 1,
      price: 100,
    },
    {
      productId: 2,
      name: "Shoes Nike",
      category: 2,
      price: 300,
    },
    {
      productId: 3,
      name: "hamburger",
      category: 3,
      price: 10,
    },
    {
      productId: 4,
      name: "Fries",
      category: 3,
      price: 5,
    },
    {
      productId: 5,
      name: "Sandwich",
      category: 3,
      price: 10,
    },
    {
      productId: 6,
      name: "laptop",
      category: 1,
      price: 100,
    },
    {
      productId: 7,
      name: "keyboard",
      category: 1,
      price: 50,
    },
    {
      productId: 8,
      name: "t-shirt",
      category: 2,
      price: 16,
    },
  ];
  
  const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
  ];
  
  export const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
  ];
  
  //// Activity
  
  // cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
  // y su llamda del metodo con un console.log donde muestre la información
  
  /// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?
  
  /// 2 - ¿Cuál es el producto más costoso de cada categoria?
  
  /// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?
  
  /// 4 - Obtener todos los productos que en nombre tengan las letra S. 
  
  /// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}
  
  /// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}
  
  
/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 1

const averageByCategory = (categories, products) => {
  const response = categories.map ( (category, index) => {
    const productsToSum = products.filter( (product) => {
      return product.category === category.id;
    });
    const sumProducts = productsToSum.reduce( (prev, curr) => {
        return prev + curr.price;
    }, 0);
    console.log(productsToSum);
    return `Category: ${category.name} - Product Average: ${sumProducts/productsToSum.length}`
  });
  return response
};
console.log(averageByCategory(categories, products));

/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 2
const majorPriceByCategory = (categories, products) => {
  const response = categories.map ( (category) => {
      let major = {name: 'product', price: 0};
      const productsToAnalyze = products.filter( (product) => {
        return product.category === category.id;
      });

      for(const product of productsToAnalyze) {
        major = major.price < product.price ? {name: product.name, price: product.price} : major;
      };

      return `Category: ${category.name} - Higher priced product is ${major.name} with a price of ${major.price}`
    });
  return response
};
console.log(majorPriceByCategory(categories, products));

/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 3
const queryOfCategoryPrice = (categories, products, nameForQuery, priceForQuery) => {
  const category = categories.find( (category) => {
    return category.name === nameForQuery;
  });
  const product = products.find( (product) => {
    return product.category === category.id && product.price === priceForQuery;
  })
  return !!product;
};
console.log(queryOfCategoryPrice(categories, products, 'Electronic', 100));

/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 4
const includesLetter = (products, letter) => {
  const productsWithLetter = products.filter( (product) => {
    return product.name.toUpperCase().includes(letter)
  });
  return productsWithLetter
};
console.log(includesLetter(products, 'H'));

/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 5
const newProductArray = (products, categories, discountsHolyDays) => {
  const array = products.map((product) => {
    const category= categories.find((category)=>{
      return category.id === product.category;
    });
    const discount = discountsHolyDays.find((discount) => {
      return discount.category === category.id
    });
    return { productId: product.productId ,nameProduct: product.name, category: category.name, discount: discount.value, applyDiscount: discount.discountApply};
  });
  return array;
};
const array = newProductArray(products, categories, discountsHolyDays);
console.log(array);

/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 6 
const newProductArray2 = (products, categories, discountsHolyDays) => {
  const result = products.map((product) => {
    const category= categories.find((category)=>{
      return category.id === product.category;
    });
    const discount = discountsHolyDays.find((discount) => {
      return discount.category === category.id
    });
    if(discount.discountApply){
      const realPrice = product.price - product.price*discount.value/100 
      return { productId: product.productId ,pricedWithDiscount: realPrice};
    }
    return { productId: product.productId ,pricedWithDiscount: product.price}
  });
  return result;
};
const result = newProductArray2(products, categories, discountsHolyDays);
console.log(result);

/// --------------------------------------------------------------------------------------------------------------------------- ///
/// --------------------------------------------------------------------------------------------------------------------------- ///
// Desarrollo 7
// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
   // errors: duplicated key
  
   const newProducts = [
    {
        id: 9,
        name: 'Tucson',
        typeOfProcuct: 'Car',
        discount: 10,
    },     {
        id: 10,
        name: 'Jeep',
        typeOfProcuct: 'Car',
        discount: 10,
    },  {
        id: 10,
        name: 'Screen',
        typeOfProcuct: 'Electronic'
    },{
        id: 1,
        name: 'Mouse',
        typeOfProcuct: 'Electronic'
    }
]
let resultArray = []
newProducts.forEach( (value) => {
  const productExist = products.some( (product) => product.productId === value.id);
  const categoryExist = categories.find( (category) => category.name === value.typeOfProcuct);
  if(productExist){
    resultArray = [...resultArray, {error: 'duplicated key'}]
    return false
  }
  if(!categoryExist){
    let majorId = 0;
    for(const category of categories) {
      majorId = majorId < category.id ? category.id : majorId;
    };
    majorId++;
    categories.push({id: majorId, name: value.typeOfProcuct});
    if(!!value.discount){
      discountsHolyDays.push({category: majorId, discountApply: true, value: value.discount});
    }
    products.push({productId: value.id, name: value.name, category: majorId, price: value.price});
    resultArray = [...resultArray, {id: value.id, status: 'success'}]
    return true;
  }
  products.push({productId: value.id, name: value.name, category: categoryExist.id, price: value.price});
  resultArray = [...resultArray, {id: value.id, status: 'success'}]
  return true;
});
console.log(products);
console.log(categories);
console.log(resultArray);