import styles, {layout} from "../style"
import { apple, bill, google } from "../assets"

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad quisquam mollitia modi ipsam amet fugiat soluta hic ducimus beatae?</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_app_store" className="w-[128px] h-[42px] cursor-pointer hover:scale-110 transition-all duration-300 mr-5 object-contain" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] cursor-pointer hover:scale-110 transition-all duration-300 object-contain" />
      </div>
    </div>
  </section>
)

export default Billing