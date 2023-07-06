import React from 'react'
import "./Home.css";
import Product from './Product';


export default function Home() {
  return (
    <section className='container-lg-fluid'>
        <div className='Home_Section'>
             <div className='Home_Slider_img'>
                    <img src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg" alt="eccommers-slider" width={"100%"}  height={"450"}/>

                    <div className='home_row'>
                      <Product 
                      id="12345773"
                      title="Black Iphone Png Hd Images 11pro Max Phone Model, New Phone Model, Phone Models, Phone Processor"
                      price={50.74}
                      rating={4}
                     image="https://www.transparentpng.com/download/iphone/QJa82c--black-iphone-11pro-max-phone-model-png-new-phone-model-phone-models-phone-processor.png" />

                      <Product 
                      id="8576994"
                      title="Long Lasting And Highly Comfortable Ladies Handbag Peach Color For Boys Gender: Women"
                      price={25.5}
                      rating={5}
                      image="https://freepngimg.com/thumb/women_bag/13-2-women-bag-free-png-image.png"/> 
                    </div>

                    <div className='home_row'>

                      <Product 
                      id="947857"
                      title ="Lg Refrigerator Clipart Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE PRM 2S WINE BLOOM-Z, 2023 Model)"
                      price={33.85}
                      rating={4}
                      image="https://freepngimg.com/thumb/refrigerator/22668-7-lg-refrigerator-clipart.png"
                      />

                      <Product 
                       id="368500"
                      title ="AXEN BAGS Laptop Backpack 30L Medium TRI-color Laptop Backpack Medium 30L Unisex College & School Bag"
                      price={5.5}
                      rating={3}
                      image="https://freepngimg.com/thumb/gloves/55145-4-school-bag-free-transparent-image-hd.png"/>
                      <Product 
                       id="685903"
                       title ="Computer of the Year: Dell XPS 13 Laptop HP 15s- Ryzen 5-5500U 8GB RAM/512GB SSD 15.6 inch(39cm) Micro-Edge Anti-Glare FHD."
                       price={80.0}
                       rating={4}
                       image="https://www.pngfind.com/pngs/m/60-603278_laptop-png-free-download-png-laptop-transparent-png.png" />

                    </div>

                    <div className='home_row'>
                      <Product 
                       id="798579"
                       title ="Bajaj 36L Personal Air Cooler PMH 36 Torque (Anti-Bacterial Technology, Honeycomb Cooling Pads) Bajaj DMH 90 Neo 90L Desert Air Cooler With Antibacterial Honeycomb Pads, Turbo Fan Technology, Powerful Air Throw And 3-Speed Control, White"
                       price={40.5}
                       rating={4}
                       image="https://www.pngmart.com/files/7/Evaporative-Air-Cooler-PNG-File.png"/>
                    </div>
            </div>
        </div>
    </section>
  )
}
