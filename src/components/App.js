
import ProductFilter from './ProductFilter.js'
import ProductList from "./ProductList.js";
export default {
    components: { ProductFilter, ProductList },
    data(){
        return {
            products: []
        }
    },
    created(){
        fetch("http://localhost:3001/products")
            .then((response) => {
             return response.json();
            })
            .then(products => {
                this.products = products;
            })
            .catch(error => console.error('Error:', error));
    },
    template: /*HTML*/`
        <section>
            <product-filter/>
            <product-list :products="products"/>
        </section>
   `,
}
