import React, { useEffect ,useState} from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useProducts } from '../../hooks/useProducts';
import buttons from './buttons';

const ProductsGrid = () => {
    const { products } = useProducts();
    const [filteredProducts , setFilteredProducts] = useState(null);
    const [productslength , setProductsLength] = useState(products.length);
    const [activeButton , setActiveButton] = useState("all");

    useEffect(() => {
        setFilteredProducts(products);
    }, []);
     function getProducts() {
        const productList = products;
        setProductsLength(productList.length);
        return productList;
      }
       function filterProducts(productType) {
        let filterProducts = getProducts().filter(type => type.productCategory === productType);
        setProductsLength(filterProducts.length);
        return filterProducts;
      }
    function handleProducts(e){
        
        let productCategory = e.target.value;
        setActiveButton(productCategory);
        productCategory !== "all" ?
        setFilteredProducts(filterProducts(productCategory))
        : setFilteredProducts(getProducts)
    }
    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {productslength} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    {buttons && buttons.map((type , index) => (
                        <>
                        <button
                        className={`btn btn-outline-primary btn-sm ${activeButton === type.value ? "active" : null}`} onClick={handleProducts} key={index} value={type.value}>
                            {type.name}
                        </button>
                        </>
                    ))}
                
                </div>
            </div>
            <div className={styles.p__grid}>

                {   
                filteredProducts && filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
                

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;