"use client"
import React from 'react'
import Footer from './Footer'
import Map from './Map'
import Image from 'next/image'

export default function Hero() {
    const Menu=[
        {
            id:1,
            name:'Discover',
            path:'/'
        },
       
    ]
  return (
    
    
    <section>
        <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <svg className="h-8" viewBox="0 0 28 24" fill="none" >
          <img
            src='./logo5.png'
            class=""
          />
          </svg>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a class="text-blue-600 transition hover:text-white-700/75 underline h-7" href="#"> Articles </a>
            </li>

            <li>
              <a class="text-blue-600 transition hover:text-white-700/75 underline h-7" href="#"> Tips </a>
            </li>

            <li>
              <a class="text-blue-600 transition hover:text-white-700/75 underline h-7" href="#"> Resource </a>
            </li>

            <li>
              <a class="text-blue-600 transition hover:text-white-700/75 underline h-7" href="#"> Explore </a>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Wellness Hub</h2>
          <p>
          Your Ultimate Destination for Health and Happiness - Dive into a World of Wellness Wonders!
       
          </p>
          </header>
          <header class="text-center">
          <ul>
        {Menu.map((item,index)=>
         <li class="text-blue-600 transition hover:text-white-700/75 underline" >{item.name}</li>)}
     </ul>
   </header>
   </div>
    <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Wellness in Pictures</h2>
      
       
    
    </header>

    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://advantagecaredtc.org/wp-content/uploads/2019/05/mental-wellness-09.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

 
        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://st.depositphotos.com/1518767/4292/i/600/depositphotos_42920419-stock-photo-cheerful-fit-women-in-yoga.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://static8.depositphotos.com/1011434/921/i/600/depositphotos_9210977-stock-photo-enjoying-the-spring.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />


        </a>
      </li>
    </ul>
  </div>
</section>
<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
<h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Empowering Wellness Choices</h2>


<p>
Welcome to our vibrant health and wellness hub, where we ignite the spark for a healthier you! Dive into a world of expertly crafted articles, tips, and resources designed to revolutionize your well-being journey.

From the latest fitness trends to nourishing nutrition advice, we've got you covered. Explore the depths of mental health and indulge in self-care practices that will leave you glowing from the inside out.

Join our community of wellness warriors as we embark on a quest for holistic health. Let's break barriers, shatter stereotypes, and redefine what it means to thrive in today's fast-paced world.

</p>
</header>
</div>
<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
<h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Wellness Wisdom</h2>
</header>
<text class='underline'>How can I boost my energy levels?</text>
<ul>
<text class='newline'>Discover the secrets to skyrocketing your energy with our expert tips and revitalizing practices.</text>
</ul>

<text class='underline'>How can I boost my energy levels?</text>
<ul>
<text>Discover the secrets to skyrocketing your energy with our expert tips and revitalizing practices.</text>
</ul>
<text class='underline'>How can I boost my energy levels?</text>
<ul>
<text>Discover the secrets to skyrocketing your energy with our expert tips and revitalizing practices.</text>
</ul>

</div>
<section class="bg-white">
 


  
    
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <p class="order-last text-lg font-medium text-gray-500">Total Sales</p>

          <p class="text-4xl font-bold text-green-600 md:text-2xl">$4.8m</p>
        </div>

        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <p class="order-last text-lg font-medium">Official Addons</p>

          <p class="text-4xl font-bold text-green-600 md:text-2xl">24</p>
        </div>

        <div class="flex flex-col rounded-lg border px-4 py-8 text-center">
          <p class="order-last text-lg font-medium ">Total Addons</p>

          <p class="text-4xl font-bold text-green-600 md:text-2xl">86</p>
        </div>
    
  
 
  <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Wellness Wonders
</h2>

    </header>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
    <ul >
      
      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="group relative block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />
        </a>
      </li>
    </ul>
    </header>
    </div>
  </div>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
  <p class="text-blue-600 transition hover:text-white-700/75 underline">Fuel Your Body Right</p>
  <p>March 13, 2024</p>
  <p>Discover delicious recipes and expert tips to nourish your body and boost your energy levels.</p>
  <p class="text-blue-600 transition hover:text-white-700/75 underline">Explore</p>
  <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="group relative block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />


        </a>
      </li>
      </header>
      </div>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
 <p class="text-blue-600 transition hover:text-white-700/75 underline">Mind Matters</p>
  <p>March 13, 2024</p>
  <p>Discover delicious recipes and expert tips to nourish your body and boost your energy levels.</p>
  <p class="text-blue-600 transition hover:text-white-700/75 underline">Explore</p>
  <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="group relative block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />
        </a>
      </li>
      </header>
      </div>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <p class="text-blue-600 transition hover:text-white-700/75 underline">Fitness Fun</p>
  <p>March 13, 2024</p>
  <p>Discover delicious recipes and expert tips to nourish your body and boost your energy levels.</p>
  <p class="text-blue-600 transition hover:text-white-700/75 underline">Explore</p>
  <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="group relative block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />


        </a>
      </li>
      </header>
      </div>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <p class='text-bold'>Inspire</p>
      <p>TThe blog changed my life! I feel healthier, happier, and more motivated than ever before.</p>
      <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="size-14 rounded-full object-cover start-32 mx-auto max-w-screen-xl top-6"
          />
            <p class='text-bold'>Smantha</p>
    </header>
          </div>
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
        <p>Luna</p>
        <p>The blog changed my life! I feel healthier, happier, and more motivated than ever before.</p>
      <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW8NdSNLxDrN1cej7D0XMM8PLRGRhErzvZ9IiJUOo0HORSnkM3oTEgL0AYLjp9dHPstM&usqp=CAU"
            alt=""
            class="size-14 rounded-full object-cover start-32 mx-auto max-w-screen-xl top-6"
          />
          </header>
          </div>
      
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  bg-yellow-500">
      <header class="text-center">
        
        <p>Join Our Wellness Revolution Today</p>
        <p>Join our vibrant community of wellness enthusiasts and start your transformation today!</p>
        <p class="text-blue-600 transition hover:text-white-700/75 underline">Join Now</p>
        </header>
        </div>

 <section>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
    Join Our
     Wellness Community
    </h2>
    </div>
    <div class='flex center text-green-500 mx-auto max-w-screen-xl'>
       
        <img
          alt=""
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="size-14 rounded-full object-cover start-32 mx-auto max-w-screen-xl "
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="size-14 rounded-full object-cover start-32 mx-auto max-w-screen-xl "
        />
        
        
        <img
          alt=""
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="size-14 rounded-full object-cover start-32 mx-auto max-w-screen-xl top-6 "
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="size-14 rounded-full object-cover start-32 mx-auto max-w-screen-xl "
        />
        
        
</div>

     
      
 


<section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div >
     
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
      Get in Touch Now
    </h2>
        <form action="#" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <label
                for="Option1"
                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabindex="0"
              >
                <input class="sr-only" id="Option1" type="radio" tabindex="-1" name="option" />

                <span class="text-sm"> Option 1 </span>
              </label>
            </div>

            <div>
              <label
                for="Option2"
                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabindex="0"
              >
                <input class="sr-only" id="Option2" type="radio" tabindex="-1" name="option" />

                <span class="text-sm"> Option 2 </span>
              </label>
            </div>

            <div>
              <label
                for="Option3"
                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                tabindex="0"
              >
                <input class="sr-only" id="Option3" type="radio" tabindex="-1" name="option" />

                <span class="text-sm"> Option 3 </span>
              </label>
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
   
      </div>
    </div>
  </div>
 <div>
      <header class="text-center">
        <p>Contact Us</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@healthwellnessblog.com</p>
        <p>Address: Rawalpindi Pakistan</p>
        <p>Working Hours: Mon-Fri: 9am-5pm</p>
      
       </header> 
    </div>
   <Map/>
    <Footer/>
</section>

</section>
</section>
</section>
  </section>
  

  
  )
}
