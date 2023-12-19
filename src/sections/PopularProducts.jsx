 import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="sm:flex-1 flex-row">
    <div className="">
      <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> products</h2>
      <p className="mt-5 text-2xl">Experience top-notch products </p>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
    </section>
  )
}

export default PopularProducts
