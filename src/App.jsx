
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
} from "./sections";

import Nav from "./components/Nav";

const App =() =>(
  <main className="relative">
   <Nav/>
    <section className="padding ">
      <Hero/>
    </section>
    <section className="padding ">
      <PopularProducts/>
    </section>
   
    <section className="padding-x py-10 ">
      <Services/>
       </section>
        <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
   
    <section className="padding bg-black 
    padding-x pagging-t pb-8">
     <Footer/>
    </section>
  </main>
);
export default App;