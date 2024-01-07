import Image from 'next/image'
import style from './aboutus.module.css'
import cherry from '../../assets/images/cherry.png'
import text from '../../assets/images/text-main.png'
import imageSec1 from '../../assets/images/imageSec1.png'
import imageSec2 from '../../assets/images/imageSec2.png'
import imageDivider from '../../assets/images/image-divider.png'

const AboutUs = () => {
  return (
    <>
        <div className={style.aboutUs}>
            <Image src={cherry} alt='cherry'/>
            <Image src={text} alt='Liquid Maestro' className={style.text}/>
            <p>With an ambiance that exudes elegance and a commitment to delivering unforgettable experiences, Liquid Maestro is the ultimate destination for cocktail enthusiasts. Join us for an exquisite journey into the world of liquid artistry.</p>
        </div>
        <div className={style.images}>
            <Image className={style.image1} src={imageSec1} alt='image section'/>
            <Image className={style.image1} src={imageSec2} alt='image section'/>
        </div>
    </>
  )
}

export default AboutUs