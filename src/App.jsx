import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './style'
import { Navbar, Hero, Stats, Business, CardDeal, Billing, Testimonials, Clients, CTA, Footer } from './components'


function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}



const App = () => {

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <FadeInWhenVisible>
            <Hero />

          </FadeInWhenVisible>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <FadeInWhenVisible>

            <Stats />
          </FadeInWhenVisible>

          <FadeInWhenVisible>

            <Business />
          </FadeInWhenVisible>

          <FadeInWhenVisible>

            <Billing />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CardDeal />

          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Testimonials />

          </FadeInWhenVisible>

          <FadeInWhenVisible>

          <Clients />  
          </FadeInWhenVisible>

          <FadeInWhenVisible>

          <CTA />
          </FadeInWhenVisible>

          <FadeInWhenVisible>

          <Footer />
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  )
}

export default App