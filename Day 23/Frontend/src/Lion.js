import React, { useContext ,useState,useEffect} from 'react'
import Navbar from './NabBar';
import Footer from './footer';
// import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import { SearchContext } from './searchContext';
import axios from 'axios';
import '../src/SofaPage.css';
function Lion({ addToCart }) {
    // const [cartItems, setCartItems] = useState([]);
    const {searchQuery}=useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductsByType("sofa"); // Fetch products of type "sofa" when the component mounts
    }, []);
  
    const fetchProductsByType = async (type) => {
      try {
        const response = await axios.get(`http://localhost:8080/products/getproducts/${type}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return ( 
        <>
        <Navbar/>
            <div className='bed'>
                <h2 className='sty'>Types of Lions</h2>
            </div>
            <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/730536/pexels-photo-730536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <img src="https://images.pexels.com/photos/730536/pexels-photo-730536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Lion</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://images.pexels.com/photos/11265077/pexels-photo-11265077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <img src="https://images.pexels.com/photos/11265077/pexels-photo-11265077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">White Lion</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>

            <div className='about1'>
            <h4 className='design1'>The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail.
             It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, lions typically do not actively seek out and prey on humans.The lion inhabits grasslands, savannahs and shrublands. It is usually more diurnal than other wild cats, but when persecuted, it adapts to being active at night and at twilight. During the Neolithic period, the lion ranged throughout Africa and Eurasia from Southeast Europe to India, but it has been reduced to fragmented populations in sub-Saharan Africa and one population in western India. It has been listed as Vulnerable on the IUCN Red List since 1996 because populations in African countries have declined by about 43% since the early 1990s. Lion populations are untenable outside designated protected areas. Although the cause of the decline is not fully understood, habitat loss and conflicts with humans are the greatest causes for concern.

One of the most widely recognised animal symbols in human culture, the lion has been extensively depicted in sculptures and paintings, on national flags, and in contemporary films and literature. Lions have been kept in menageries since the time of the Roman Empire and have been a key species sought for exhibition in zoological gardens across the world since the late 18th century. Cultural depictions of lions were prominent in Ancient Egypt, and depictions have occurred in virtually all ancient and medieval cultures in the lion's historic and current rangeThe fur varies in colour from light buff to silvery grey, yellowish red and dark brown. The colours of the underparts are generally lighter. A new-born lion has dark spots, which fade as the cub reaches adulthood, although faint spots often may still be seen on the legs and underparts.[45][46] The tail of all lions ends in a dark, hairy tuft that in some lions conceals an approximately 5 mm (0.20 in)-long, hard "spine" or "spur" that is formed from the final, fused sections of tail bone. The functions of the spur are unknown. The tuft is absent at birth and develops at around 5+1⁄2 months of age. It is readily identifiable by the age of seven months.[47]

Its skull is very similar to that of the tiger, although the frontal region is usually more depressed and flattened, and has a slightly shorter postorbital region and broader nasal openings than those of the tiger. Due to the amount of skull variation in the two species, usually only the structure of the lower jaw can be used as a reliable indicator of species.[48][49]

Skeletal muscles of the lion make up 58.8% of its body weight and represent the highest percentage of muscles among mammals.</h4>
            
            </div>

            <div className='about1'>
            <h4 className='design1'>...........................................................................................................................................</h4>
            {/* <p>Our sofa-beds provide a cosy spot for your guests to sleep, especially when you’re short on room in the apartment. Some, like our VALLENTUNA modular sofa-beds, are super-customisable, so you can add or arrange units as you wish. Then there are daybeds like the BRIMNES, which comes with drawers for storing your bedding or your kid’s toys. Want a seating that multitasks? The vibrant FLOTTEBO and elegant NYHAMN look good, have space for storage, and transform from 3-seater sofas to a comfy single bed. </p> */}
            </div>
                
            <div className='dir'>
                
        {filteredProducts.map((product, index) => (
          <div key={index} className='card1'>
            <img src={product.image} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>{product.name}</h5>
              <p className='price'>Rs. {product.price}</p>
              <p class='card-text'>{product.description}</p>
              {/* <div className='btn'> */}
              <button id='btn1'
                onClick={() => addToCart({ image:product.image,name: product.name, price: product.price })}
                class='btn btn-primary'
              >
                Donation
              </button>
              {/* </div> */}
            </div>
          </div>
        ))}
        
      </div>
            
            <Footer/>
        </>
     );
}
const mapDispatchToProps = {
    addToCart: addToCart,
  };

// export default SofaPage;
export default connect(null, mapDispatchToProps)(Lion);
