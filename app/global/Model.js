import IMAGES from './Image';

import m1_0 from "../../assets/image/menu1/menu1_0.png"
import m1_1 from "../../assets/image/menu1/menu1_1.png"
import m1_2 from "../../assets/image/menu1/menu1_2.png"
import m1_3 from "../../assets/image/menu1/menu1_3.png"
import m1_4 from "../../assets/image/menu1/menu1_4.png"

import m2_0 from "../../assets/image/menu2/menu2_0.png"
import m2_1 from "../../assets/image/menu2/menu2_1.png"
import m2_2 from "../../assets/image/menu2/menu2_2.png"

const NType = {
    menu    : 0,
    audio   : 1,
    video   : 2,
    text    : 3,
    social  : 4
}

const Model = {    
    list0: [
        { image: IMAGES.m0_0, type: NType.menu },
        { image: IMAGES.m0_1, type: NType.menu },
        { image: IMAGES.m0_2, type: NType.menu },
        { image: IMAGES.m0_3, type: NType.menu },
        { image: IMAGES.vice, type: NType.text }
      ],
    list1: [
        { image: m1_0, type: NType.menu },
        { image: m1_1, type: NType.menu },
        { image: m1_2, type: NType.menu },
        { image: m1_3, type: NType.menu },
        { image: m1_4, type: NType.menu },
        { image: IMAGES.vice, type: NType.text }
      ],
    list2: [
        { image: m2_0, type: NType.menu },
        { image: m2_1, type: NType.menu },
        { image: m2_2, type: NType.menu },
        { image: IMAGES.vice, type: NType.text }
      ]
}

export default Model;