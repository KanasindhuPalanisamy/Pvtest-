import {MainPage} from '../integration/my_first_test'
import { Orgoverview } from './Orgoverview';

const mainPage=new MainPage()
const orgoverview=new Orgoverview()


it('login test',function(){
    mainPage.navigate();
})

it('orgoverview test',function(){
    orgoverview.direct();
})
